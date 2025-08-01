import { useState } from "react";
import axios from "axios";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hei! Jeg er DeiviBot 🤖 – spør meg om hva som helst!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Legg bruker-melding til historikken
    const newMessages = [
      ...messages,
      { from: "user", text: input }
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      // Map til role/content-format
      const apiMsgs = newMessages.map((m) => ({
        role: m.from === "bot" ? "assistant" : "user",
        content: m.text,
      }));

      const res = await axios.post("/api/chat", { messages: apiMsgs });

      const reply = res.data.reply?.trim() || "Beklager, jeg forstod ikke helt 🤔";
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch (err) {
      console.error("Chat-error:", err);
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Oops, noe gikk galt. Prøv igjen om litt!" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200">
      <div className="bg-pink-600 text-white p-3 font-semibold">
        DeiviBot – Din digitale vert
      </div>
      <div className="p-4 max-h-80 overflow-y-auto space-y-2 text-sm">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg ${
              m.from === "bot" ? "bg-gray-100 text-left" : "bg-pink-100 text-right"
            }`}
          >
            {m.text}
          </div>
        ))}
        {loading && <div className="text-gray-400 italic">Skriver svar…</div>}
      </div>
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          placeholder="Spør meg om noe…"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700 text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}
