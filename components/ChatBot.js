// components/ChatBot.js
import { useState } from "react";
import Image from "next/image";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const handleUserMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const messageText = input.toLowerCase();
    setInput("");
    setTyping(true);

    let botReply = "";

    // Spesialregel for "hvem er Deivi"
    if (messageText.includes("hvem er deivi")) {
      botReply =
        "Deivi? Han er basically en blanding av Elon Musk, Iron Man og en barista fra Starbucks. En ekte superhelt fra Sandnes! 🚀🤖☕";
    } else {
      // Her ville API-kall til HuggingFace/andre ligget
      botReply = "La meg tenke litt... 🤔 (API-svar kommer her)";
    }

    // Simuler typing-effekt
    let displayedText = "";
    for (let i = 0; i < botReply.length; i++) {
      displayedText += botReply[i];
      await new Promise((resolve) => setTimeout(resolve, 20)); // 20ms per bokstav
      setMessages((prev) => [
        ...prev.filter((m) => m !== "typing"),
        "typing",
      ]);
      setMessages((prev) =>
        prev.map((m) => (m === "typing" ? { sender: "bot", text: displayedText } : m))
      );
    }

    setTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-2 z-50">
      {/* Snakkeboble når chat er lukket */}
      {!isOpen && (
        <div className="bg-white text-gray-800 shadow-lg rounded-2xl px-4 py-2 max-w-[220px] text-sm relative">
          Hei 👋 Jeg er DeiviBot. Klikk på meg for å chatte!
          <div className="absolute -bottom-2 right-6 w-0 h-0 border-t-[10px] border-t-white border-x-[10px] border-x-transparent"></div>
        </div>
      )}

      {/* Avatar */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full shadow-lg cursor-pointer overflow-hidden"
      >
        <Image
          src="/avatar-deivi.png"
          alt="DeiviBot"
          width={64}
          height={64}
          className="object-cover"
        />
      </div>

      {/* Chatvindu */}
      {isOpen && (
        <div className="bg-white w-80 h-96 shadow-xl rounded-2xl p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-pink-200 text-gray-900"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {typing && (
              <div className="bg-gray-100 text-gray-600 text-sm p-2 rounded-lg inline-block">
                ✍️ DeiviBot skriver...
              </div>
            )}
          </div>

          <div className="mt-2 flex">
            <input
              type="text"
              placeholder="Skriv en melding..."
              className="border rounded-l-md p-2 text-sm flex-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
            />
            <button
              onClick={handleUserMessage}
              className="bg-pink-600 text-white px-3 rounded-r-md hover:bg-pink-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


