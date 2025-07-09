import { useState } from "react";
import Image from "next/image";

export default function Listing() {
  const [modalImage, setModalImage] = useState(null);
  const [showChat, setShowChat] = useState(false);
  const [firstMessage, setFirstMessage] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
    if (!firstMessage) setFirstMessage(true);
  };

  const equipment = [
    { label: "TV-stue / TV lounge", icon: "📺", image: "/tvstue1.jpg" },
    { label: "Utsikt / view", icon: "🌅", image: "/utsikt4.jpg" },
    { label: "Komfortable senger / Cozy beds", icon: "🛏️", image: "/soverom1.jpg" },
    { label: "Kjøkken / Kitchen equipped", icon: "🍴", image: "/utstyr1.jpg" },
    { label: "WiFi", icon: "📶", image: "/wifi.jpg" },
    { label: "Elbillader / EV charger", icon: "🔌", image: "/lader1.jpg" },
    { label: "Vaskemaskin / Washing machine", icon: "🧺", image: "/treningsrom1.jpg" },
    { label: "Bålpanne / Fire pit", icon: "🔥", image: "/balplass.jpg" },
  ];

  const galleryImages = [
    { src: "/barnerom.jpg", alt: "Barnerom" },
    { src: "/utsikt1.jpg", alt: "Utsikt 1" },
    { src: "/treningsrom1.jpg", alt: "Treningsrom" }
  ];

  return (
    <div className="bg-pink-50 min-h-screen text-center text-gray-900 px-4">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Velkommen til ditt drømmehjem i Sandnes
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-1">
          Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for
          familier, par og venner.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Grill nights, firelight and views – make yourself at home
        </h2>
        <p className="italic text-sm text-gray-600 mb-6">
          Cozy fire nights, scenic views and room to relax – everything you need for a memorable stay.
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg mb-4">
          <Image
            src="/forsidelayout.jpg"
            alt="Hovedbilde"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        <p className="text-sm italic mb-4">
          Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              onClick={() => item.image && setModalImage(item.image)}
              className={`cursor-pointer text-sm hover:underline flex flex-col items-center ${
                item.image ? "text-blue-800 hover:text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <a
          href="https://www.airbnb.no/rooms/1282008856141933433"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition mb-8"
        >
          Start ferien din her
        </a>

        <h3 className="text-lg font-semibold mb-4">Galleri</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={`gallery-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Avatar-knapp */}
      <div 
        className="fixed top-4 right-4 cursor-pointer z-50 hover:scale-105 transition-transform"
        onClick={toggleChat}
      >
        <Image
          src="/avatar-deivi.png?ver=2"
          alt="Chat-hjelp"
          width={80}
          height={80}
          className="rounded-full shadow-xl"
          unoptimized
          priority
        />
      </div>

      {/* Chat-popup */}
      {showChat && (
        <div className="fixed bottom-28 right-6 w-80 bg-white rounded-lg shadow-xl z-50 overflow-hidden border border-gray-200">
          <div className="bg-pink-600 text-white p-3 font-semibold flex items-center">
            <img 
              src="/avatar-deivi.png" 
              width={40} 
              height={40} 
              className="rounded-full mr-2"
              alt="Avatar"
            />
            <span>DeiviBot - Din digitale vert</span>
          </div>
          <div className="p-4">
            {firstMessage && (
              <p className="text-gray-700 mb-2 text-sm">Hei! Hva kan jeg hjelpe deg med? 😊</p>
            )}
            <textarea
              className="w-full p-2 border border-gray-300 rounded resize-none text-sm"
              rows="3"
              placeholder="Skriv en melding..."
            />
            <button className="mt-2 bg-pink-600 text-white px-3 py-1 rounded text-sm hover:bg-pink-700">
              Send
            </button>
          </div>
        </div>
      )}

      {/* Bilde-modalen */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="bg-white p-4 rounded-xl max-w-xl">
            <Image
              src={modalImage}
              alt="Utstyrsdetalj"
              width={800}
              height={600}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      )}
    </div>
  );
}
