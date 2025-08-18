import { useState } from "react";
import Image from "next/image";
import ChatBot from "../components/ChatBot";

export default function Listing() {
  const [modalImage, setModalImage] = useState(null);

  const equipment = [
    { label: "Utsikt / View", icon: "🌅", image: "/utsikt4.jpg" },
    { label: "Hage / Garden", icon: "🌳", image: "/hage.jpg" },
    { label: "Komfortable senger / Cozy beds", icon: "🛏️", image: "/soverom1.jpg" },
    { label: "Kjøkken / Kitchen equipped", icon: "🍴", image: "/utstyr1.jpg" },
    { label: "TV-stue / TV lounge", icon: "📺", image: "/tvstue1.jpg" },
    { label: "Treningsrom / Gym", icon: "💪", image: "/treningsrom1.jpg" },
    { label: "Bålpanne / Fire pit", icon: "🔥", image: "/balplass.jpg" },
    { label: "WiFi", icon: "📶", image: "/wifi.jpg" },
    { label: "Elbillader / EV charger", icon: "🔌", image: "/lader1.jpg" },
    { label: "Vaskemaskin / Washing machine", icon: "🧺", image: "/vaskemaskin.jpg" },
  ];

  const galleryImages = [
    { src: "/barnerom.jpg", alt: "Barnerom" },
    { src: "/forsidelayout.jpg", alt: "Forsidelayout" },
    { src: "/treningsrom1.jpg", alt: "Treningsrom" },
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

        {/* Forsidebilde */}
        <div className="rounded-xl overflow-hidden shadow-lg mb-6">
          <Image
            src="/forsidelayout.jpg"
            alt="Hovedbilde"
            width={1200}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* 3D visning seksjon */}
        <div className="my-10 p-8 bg-gradient-to-r from-pink-100 via-rose-100 to-pink-200 rounded-2xl shadow-xl text-center relative overflow-hidden">
          {/* Bakgrunnseffekt */}
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-300/20 to-pink-200/10 animate-pulse"></div>

          <h2 className="relative text-3xl font-extrabold mb-3 text-gray-900">
            👀 Opplev huset i 3D / Explore the house in 3D
          </h2>

          <p className="relative text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
            Ta en virtuell visning og se alle rom før du booker – akkurat som å være der selv! <br />
            Take a virtual tour and explore every room before booking – just like being there in person!
          </p>

          {/* Knapp med animasjon */}
          <a
            href="https://your-matterport-or-3d-link.com" // 🔗 sett inn din faktiske 3D-lenke
            target="_blank"
            rel="noopener noreferrer"
            title="Ta en virtuell omvisning nå 🚀"
            className="relative inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition duration-300 animate-bounce"
          >
            <span className="text-2xl">🚪</span>
            <span className="hidden sm:inline">Gå inn i huset nå / Enter the house now</span>
            <span className="sm:hidden">3D-visning</span>
          </a>

          {/* Microcopy */}
          <p className="relative mt-3 text-xs italic text-gray-600">
            💡 95% av gjester sjekker 3D-visningen før booking – ikke gå glipp av den!
          </p>
        </div>

        {/* Utstyrsliste */}
        <p className="text-sm italic mb-4">
          Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              onClick={() => item.image && setModalImage(item.image)}
              className={`cursor-pointer text-sm hover:underline flex flex-col items-center ${
                item.image
                  ? "text-blue-800 hover:text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Airbnb CTA */}
        <a
          href="https://www.airbnb.no/rooms/1282008856141933433"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition mb-8"
        >
          Start ferien din her
        </a>

        {/* Galleri */}
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

      {/* Chatbot-widget nederst til høyre */}
      <ChatBot />

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
