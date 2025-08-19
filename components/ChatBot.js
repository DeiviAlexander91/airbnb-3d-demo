// components/ChatBot.js
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [inEdytaMode, setInEdytaMode] = useState(false);
  const [inDeiviMode, setInDeiviMode] = useState(false);
  const chatEndRef = useRef(null);

  // 👇 Auto-scroll til siste melding
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🎭 30 Edyta-facts
  const edytaFacts = [
    "Edyta trenger ikke passord – datamaskinen logger inn av seg selv 💻😏",
    "Når Edyta går tur, følger veien etter henne 🚶‍♀️🛣️",
    "Edyta kan vinne i stein–saks–papir hver gang – selv mot seg selv ✊✋✌️😂",
    "Når hun tar bilde, får kameraet bedre oppløsning 📸✨",
    "Kaffemaskinen lager seg selv når Edyta er i nærheten ☕⚡",
    "Når hun spiller kort, vinner hun før spillet starter 🃏🔥",
    "Deivi prøvde en gang å skru IKEA-møbler uten henne – stolen er fortsatt ikke ferdig 🪑🤣",
    "Netflix spør Edyta hva DU vil se 📺😆",
    "Når hun ser på planter, vokser de av frykt 🌱👀",
    "Hun har slått Google i quiz 💡🔍",
    "Når hun sier 'skru på lys', blir selv sola nervøs ☀️😂",
    "Deivi påstår han er morsom – men Edyta fikk folk til å le FØR hun sa noe 🎤🤣",
    "Hun trenger ikke klokke – tiden følger hennes rytme ⏰😏",
    "Når Edyta lager middag, blir Michelin-guide stressa 🍽️🌟",
    "Hver gang hun ler, skrives det en ny vits på nettet 🤣📲",
    "Hvis hun hopper i boblebadet, blir det tsunami i Sandnes 🛁🌊",
    "Hun kan åpne en brus uten å lage lyd 🥤🤫",
    "Når hun tar selfie, får hun automatisk 1000 likes 📸❤️",
    "Hun har aldri tapt i yatzy – terningene vet bedre 🎲😅",
    "Når hun lager kaffe, våkner til og med naboen ☕🏠😂",
    "Hun trenger ikke lommelykt – mørket flykter 🌑💡",
    "Når hun ser på TV, bytter kanalene av seg selv 📺👉",
    "Hun kan kjøre bil baklengs – og fortsatt være foran 🚗💨",
    "Deivi prøvde å lage nettside alene – Edyta var allerede ferdig med en penere 💻🔥",
    "Hun trenger ikke kompass – jorda roterer etter henne 🌍🧭",
    "Når Edyta smiler, mister tannlegen jobben 😁🦷",
    "Hun kan åpne vinflaske med ren tankekraft 🍷😏",
    "Når hun vasker klær, blir maskinen renere enn klærne 🧺✨",
    "Logger hun på WiFi, får naboene bedre nett 📶😂",
    "Når hun sier 'nei', er det egentlig ja… men ingen tør å spørre igjen 😅🤫",
  ];

  // 🎭 Deivi-facts
 const deiviFacts = [
  "Deivi prøvde å koke pasta – men måtte ringe Edyta for å få vite når vannet koker 🍝🤣",
  "Når Deivi bruker Google, skriver han bare 'Edyta' og venter på svar 🔍😂",
  "Han klarte å sette opp Netflix... etter at Edyta hadde trykket på 'OK' for ham 📺😆",
  "Deivi prøvde å vaske klær alene – maskinen ringte Edyta for hjelp 🧺📞🤣",
  "Når han griller, må han spørre Edyta om hvilken side av pølsa som skal stekes 🌭🔥😂",
  "Deivi kan kode nettsider – men bare hvis Edyta nikker godkjennende 💻😉",
  "Han kjøpte en ny drill… men Edyta måtte forklare hvilken vei som er 'inn' og 'ut' 🔧🤣",
  "Når Deivi sier 'jeg fikser det', betyr det egentlig 'jeg går og spør Edyta' 😅❤️",
];

  const handleUserMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const messageText = input.toLowerCase();
    setInput("");

    let botReply = "";

    // 🎭 Start Edyta facts
    if (messageText.includes("fun fact om edyta")) {
      setInEdytaMode(true);
      setInDeiviMode(false);
      const fact = edytaFacts[Math.floor(Math.random() * edytaFacts.length)];
      botReply = fact + "\n\nVil du ha mer?.";
    }
    // 🎭 Fortsett Edyta facts
    else if (inEdytaMode && messageText === "ja") {
      const fact = edytaFacts[Math.floor(Math.random() * edytaFacts.length)];
      botReply = fact + "\n\nVil du ha mer?.";
    }
    // 🎭 Start Deivi facts
    else if (messageText.includes("fun fact om deivi")) {
      setInDeiviMode(true);
      setInEdytaMode(false);
      const fact = deiviFacts[Math.floor(Math.random() * deiviFacts.length)];
      botReply = fact + "\n\nVil du ha en ny?.";
    }
    // 🎭 Fortsett Deivi facts
    else if (inDeiviMode && messageText === "ja") {
      const fact = deiviFacts[Math.floor(Math.random() * deiviFacts.length)];
      botReply = fact + "\n\nVil du ha en ny?.";
    }
    // 🎭 Andre morsomme regler
    else if (messageText.includes("deivi") && messageText.includes("edyta")) {
      botReply =
        "Deivi + Edyta = Norges ultimate power-couple 💑⚡ Hun er hjernen, han er verktøykassa – sammen kan de fikse alt fra verdenskriser til grillkvelder i hagen 🔧🔥😂";
    } else if (messageText.includes("hvem er deivi")) {
      botReply =
        "Deivi? Han er en kjekk fyr fra Sandnes, men la oss være ærlige – uten Edyta hadde han fortsatt sittet fast i IKEA med en halv stol 🪑🤣";
    } else if (messageText.includes("hvor er deivi")) {
      botReply =
        "Akkurat nå? På hemmelig oppdrag… men mest sannsynlig ved nærmeste kaffemaskin ☕🕵️‍♂️";
    } else if (messageText.includes("hva kan deivi")) {
      botReply =
        "Deivi kan fikse alt fra koding til boblebad – men spør Edyta, hun gjør det dobbelt så fort 🔧💻🛁😂";
    } else if (messageText.includes("hvem er edyta")) {
      botReply =
        "Edyta? Hun er legenden selv 💖 Når hun logger på Netflix, blir algoritmen nervøs 📺🔥";
    } else if (messageText.includes("kaffe") || messageText.includes("coffee")) {
      botReply =
        "Kaffe? Det er Deivi sitt drivstoff ☕⚡️ Uten kaffe starter ikke dagen, med kaffe kan han fikse hele Sandnes (og kanskje halve Stavanger også)! 😂";
    } else {
      botReply = "La meg tenke litt... 🤔 (API-svar kommer her)";
    }

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
            <div ref={chatEndRef} />
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
