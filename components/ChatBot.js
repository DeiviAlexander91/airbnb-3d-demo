import { useState } from "react";
import axios from "axios";

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hei! Jeg er DeiviBot 🤖 – spør meg hva som helst om oppholdet!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
        { inputs: { text: input } },
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_HF_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const botText = response.data.generated_text || "Beklager, jeg forstod ikke helt det. Prøv igjen 😊";
      const botMessage = { from: "bot", text: botText };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Feil i forespørsel:", error);
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Noe gikk galt med svaret. Prøv igjen senere 😓" }
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
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded-lg ${msg.from === "bot" ? "bg-gray-100 text-left" : "bg-pink-100 text-right"}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-gray-400 italic">Skriver svar...</div>}
      </div>
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          placeholder="Spør meg om noe..."
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
