import { useState } from "react";
import Image from "next/image";

export default function ListingPage() {
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
    { src: "/bilseng.jpg", alt: "Bilseng med lys" },
    { src: "/treningsrom1.jpg", alt: "Treningsrom" },
    { src: "/tvstue1.jpg", alt: "TV stue" },
  ];

  return (
    <div className="bg-pink-50 min-h-screen text-center text-gray-900 px-4">
      <div className="max-w-4xl mx-auto py-10">
        {/* ... (andre seksjoner over kan være her) ... */}

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

      {/* Avatar (øverst høyre) */}
      <div 
        className="fixed top-4 right-4 cursor-pointer z-50 hover:scale-105 transition-transform"
        onClick={toggleChat}
      >
        <Image
          src="/avatar-deivi.png?ver=1"
          alt="Chat-hjelp"
          width={80}
          height={80}
          className="rounded-full shadow-xl"
          unoptimized
          priority
        />
        <img 
          src="/avatar-deivi.png" 
          alt="Chat fallback" 
          className="hidden"
          onError={(e) => {
            e.target.style.display = 'none';
            document.querySelector('.avatar-fallback').style.display = 'block';
          }}
        />
        <img
          src="/avatar-deivi.png"
          alt="Chat fallback"
          className="avatar-fallback rounded-full shadow-xl w-20 h-20 hidden"
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
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
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
