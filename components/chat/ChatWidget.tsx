"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send, Bot, ArrowRight, User } from "lucide-react";

type Role = "user" | "assistant";

type ChatMessage = {
  role: Role;
  content: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Welcome to ASK Studios. I’m our live AI assistant. Ask me about our shipped products, mobile architecture, or how we can help build your software.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [isOpen, messages.length]);

  // Listen for custom trigger from AIShowcaseSection
  useEffect(() => {
    const handleCustomPrompt = (e: any) => {
      const prompt = e.detail?.prompt;
      if (prompt) {
        setIsOpen(true);
        setInput(prompt);
      }
    };

    window.addEventListener("open-ask-chat", handleCustomPrompt);
    return () =>
      window.removeEventListener("open-ask-chat", handleCustomPrompt);
  }, []);

  const sendMessage = async (messageText: string) => {
    const trimmed = messageText.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      const data = await res.json();

      if (res.ok && data?.ok && data?.message) {
        setMessages((prev) => [...prev, data.message as ChatMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Sorry, I encountered an issue reaching the model. Feel free to contact our team directly at info@askstudios.net.",
          },
        ]);
      }
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Connection interrupted. Please verify your network or email info@askstudios.net.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating launcher button */}
      <button
        type="button"
        onClick={toggleOpen}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full border border-white/15 bg-[#070514]/95 px-4 py-2.5 text-xs font-semibold text-white shadow-2xl shadow-black/80 backdrop-blur-2xl transition-all duration-200 hover:border-violet-500/40 hover:bg-[#0c0922] hover:shadow-violet-500/20 focus:outline-none active:scale-95"
      >
        {isOpen ? (
          <>
            <X className="h-4 w-4 text-zinc-300" />
            <span className="font-tech">Close</span>
          </>
        ) : (
          <>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            <span className="font-tech tracking-wide">Ask Studio AI</span>
          </>
        )}
      </button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-20 right-4 z-40 w-[92vw] max-w-md overflow-hidden rounded-3xl border border-white/15 bg-[#060414]/98 shadow-2xl shadow-black/95 backdrop-blur-3xl md:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400 border border-violet-500/25">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold text-white tracking-wide">
                    ASK Studios Concierge
                  </div>
                  <div className="font-tech text-[10px] text-zinc-400">
                    Edge Runtime · LLM Reasoning
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={toggleOpen}
                className="rounded-lg p-1.5 text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="h-80 space-y-3.5 overflow-y-auto p-4 text-xs">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 leading-relaxed ${
                      m.role === "user"
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium shadow-md shadow-violet-500/20"
                        : "border border-white/[0.08] bg-[#0c091f] text-zinc-200"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-1.5 rounded-2xl border border-white/[0.08] bg-[#0c091f] px-4 py-2.5 text-[11px] text-zinc-400">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-400 [animation-delay:0.3s]" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-white/[0.08] bg-white/[0.02] p-3.5 flex items-center gap-2"
            >
              <input
                className="flex-1 rounded-xl border border-white/[0.08] bg-black/50 px-4 py-2.5 text-xs text-white placeholder-zinc-500 outline-none transition-colors focus:border-violet-400"
                placeholder="Ask about AutoLog, BrieflyCA, or studio services..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white transition-all hover:from-violet-500 hover:to-indigo-500 disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
