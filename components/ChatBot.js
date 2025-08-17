// components/ChatBot.js
import { useState } from "react";
import Image from "next/image";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleUserMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const messageText = input.toLowerCase();
    setInput("");

    let botReply = "";

    // 🎭 Humor-regler
    if (messageText.includes("deivi") && messageText.includes("edyta")) {
      botReply =
        "Deivi + Edyta = Norges ultimate power-couple 💑⚡ Hun er hjernen, han er verktøykassa – sammen kan de fikse alt fra verdenskriser til grillkvelder i hagen 🔧🔥😂";
    } else if (messageText.includes("hvem er deivi")) {
      botReply =
        "Deivi? Han er basically en blanding av Elon Musk, Iron Man og en barista fra Starbucks. En ekte superhelt fra Sandnes! 🚀🤖☕";
    } else if (messageText.includes("hvor er deivi")) {
      botReply =
        "Akkurat nå? På hemmelig oppdrag… men mest sannsynlig ved nærmeste kaffemaskin ☕🕵️‍♂️";
    } else if (messageText.includes("hva kan deivi")) {
      botReply =
        "Deivi kan fikse alt fra koding til boblebad – han er basically MacGyver med WiFi! 🔧💻🛁";
    } else if (messageText.includes("hvem er edyta")) {
      botReply =
        "Edyta? Hun er rett og slett verdens beste dame 💖 – smartere enn Google, mer tålmodig enn en mobil-lader, og hun holder Deivi i sjakk når han prøver å bygge roboter på kjøkkenet 🤖🍳😂";
    } else if (messageText.includes("kaffe") || messageText.includes("coffee")) {
      botReply =
        "Kaffe? Det er Deivi sitt drivstoff ☕⚡️ Uten kaffe starter ikke dagen, med kaffe kan han fikse hele Sandnes (og kanskje halve Stavanger også)! 😂";
    } else {
      // 👇 Standard fallback
      botReply = "La meg tenke litt... 🤔 (API-svar kommer her)";
    }

    // Send hele svaret med en gang
    const botMessage = { sender: "bot", text: botReply };
    setMessages((prev) => [...prev, botMessage]);
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
