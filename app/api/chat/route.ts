// src/app/api/chat/route.ts
import { NextResponse } from "next/server";

type Role = "user" | "assistant";

type ChatMessage = {
  role: Role;
  content: string;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body?.messages ?? [];

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { ok: false, error: "No messages provided." },
        { status: 400 }
      );
    }

    const systemPrompt = `
You are the official ASK Studios website assistant.

ASK Studios:
- A product studio based in Ontario, Canada.
- Builds mobile apps (React Native), web apps (Next.js), SaaS products, and automation/AI tools.
- Products: AutoLog (vehicle logbook), Intervue.AI (AI interview practice), DripReel (short-form video automation), Tambola Caller (Tambola/Housie number caller).
- Services: product/MVP development, AI/automation, dashboards, SaaS platforms, APIs, and consulting.

Goals:
- Answer questions about ASK Studios, its products, and services.
- Help visitors understand what we can build for them.
- Encourage serious leads to contact via the form or email info@askstudios.net.

Style:
- Friendly, concise, and clear.
- Confident and straightforward.
- If a question is unrelated to ASK Studios, answer briefly and gently steer back to what we do.
`;

    // Convert frontend messages to provider-compatible format
    const conversation = [
      { role: "system", content: systemPrompt },
      ...messages.map((m) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content,
      })),
    ];

    // --- Provider selection with OPENAI priority ---
    const openaiKey = (process.env.OPENAI_API_KEY || "").trim();
    const aimlKey = (process.env.AIMLAPI_API_KEY || "").trim();
    const aimlBase =
      (process.env.AIMLAPI_BASE_URL || "").trim() ||
      "https://api.aimlapi.com/v1";

    type Provider = "openai" | "aimlapi";

    let provider: Provider | null = null;

    if (openaiKey) {
      provider = "openai";
    } else if (aimlKey) {
      provider = "aimlapi";
    }

    if (!provider) {
      console.error("No provider configured: set OPENAI_API_KEY or AIMLAPI_API_KEY.");
      return NextResponse.json(
        {
          ok: false,
          error:
            "Chat service is not configured. Please try again later or contact info@askstudios.net.",
        },
        { status: 500 }
      );
    }

    // Default model – valid for both OpenAI and AIMLAPI
    const defaultModel = "gpt-4o-mini";
    const model = process.env.CHAT_MODEL || defaultModel;

    let assistantText = "";

    if (provider === "openai") {
      // ---------- OpenAI ----------
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model,
          messages: conversation,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("OpenAI error:", errText);
        throw new Error("OpenAI request failed");
      }

      const data = await res.json();
      assistantText =
        data.choices?.[0]?.message?.content ||
        "Sorry, I wasn’t able to generate a response.";
    } else {
      // ---------- AIMLAPI ----------
      const res = await fetch(`${aimlBase}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${aimlKey}`,
        },
        body: JSON.stringify({
          model,
          messages: conversation,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("AIMLAPI error:", errText);
        throw new Error("AIMLAPI request failed");
      }

      const data = await res.json();
      assistantText =
        data.choices?.[0]?.message?.content ||
        "Sorry, I wasn’t able to generate a response.";
    }

    const responseMessage: ChatMessage = {
      role: "assistant",
      content: assistantText,
    };

    return NextResponse.json({ ok: true, message: responseMessage });
  } catch (err) {
    console.error("Error in /api/chat", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong in the chat API. Please try again or contact us at info@askstudios.net.",
      },
      { status: 500 }
    );
  }
}
