
import { useState } from "react";

const faq = [
  { keywords: ["wifi", "internett"], answer: "WiFi-passordet finner du på ruteren i stua eller i velkomstmappen." },
  { keywords: ["parkering", "bil"], answer: "Ja, det er gratis parkering rett utenfor huset." },
  { keywords: ["innsjekk", "check-in"], answer: "Innsjekk er fra kl. 15:00. Du får mer info på e-post før ankomst." },
  { keywords: ["utsjekk", "check-out"], answer: "Utsjekk er før kl. 11:00. Bare lås døra og legg nøkkelen tilbake i boksen." },
  { keywords: ["sengetøy", "håndklær", "laken"], answer: "Sengetøy og håndklær er inkludert i oppholdet." },
  { keywords: ["grill", "gass"], answer: "Grillen står klar på terrassen. Husk å sjekke at gassflasken er tilkoblet." },
  { keywords: ["kontakt", "eier", "hjelp"], answer: "Du kan kontakte oss når som helst via Airbnb-meldinger 😊" },
];

function getBotResponse(userInput) {
  const input = userInput.toLowerCase();
  for (const item of faq) {
    if (item.keywords.some(keyword => input.includes(keyword))) {
      return item.answer;
    }
  }
  return "Beklager, jeg er ikke helt sikker på det. Prøv gjerne å stille spørsmålet på en annen måte 🙏";
}

export default function ChatBot() {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hei! Jeg er DeiviBot – spør meg gjerne om ting knyttet til oppholdet 😊" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    const botMessage = { from: "bot", text: getBotResponse(input) };
    setMessages([...messages, userMessage, botMessage]);
    setInput("");
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
