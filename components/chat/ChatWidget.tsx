// src/components/chat/ChatWidget.tsx
"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        "Hey, I’m the ASK Studios AI assistant. Ask me about our products, services, or what we can build for you.",
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
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
              "Sorry, something went wrong on my side. You can always email info@askstudios.net instead.",
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
            "I couldn’t reach the chat service. Please try again or contact us via email.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        type="button"
        onClick={toggleOpen}
        className="fixed bottom-5 right-5 z-40 rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 hover:bg-emerald-300 focus:outline-none md:bottom-6 md:right-6"
      >
        {isOpen ? "Close chat" : "Chat with ASK AI"}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-16 right-3 z-40 w-[90vw] max-w-sm rounded-2xl border border-slate-700/70 bg-slate-950/95 p-3 shadow-2xl backdrop-blur md:bottom-20 md:right-6"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-slate-800 pb-2">
              <div>
                <div className="text-xs font-semibold text-slate-100">
                  ASK Studios AI Assistant
                </div>
                <div className="text-[11px] text-slate-400">
                  Live demo chatbot powered by our own /api/chat + LLM.
                </div>
              </div>
              <span className="flex items-center gap-1 text-[11px] text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Live
              </span>
            </div>

            {/* Messages */}
            <div className="mt-2 max-h-64 space-y-2 overflow-y-auto pr-1 text-xs">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                      m.role === "user"
                        ? "bg-emerald-500 text-slate-950"
                        : "bg-slate-800 text-slate-100"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="inline-flex items-center gap-1 rounded-2xl bg-slate-800 px-3 py-2 text-[11px] text-slate-300">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-300" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.1s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-500 [animation-delay:0.2s]" />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="mt-2 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950 px-2 py-1"
            >
              <input
                className="flex-1 bg-transparent px-1 py-1 text-xs text-slate-50 outline-none placeholder:text-slate-500"
                placeholder="Ask about our products, services, or ideas..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-semibold text-slate-950 hover:bg-emerald-300 disabled:opacity-60"
              >
                Send
              </button>
            </form>

            <p className="mt-1 text-[10px] text-slate-500">
              This chatbot is built by ASK Studios, a custom API route, and an
              LLM.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
