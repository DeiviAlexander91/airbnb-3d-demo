import Image from "next/image";
import { useState } from "react";
import ChatBot from "../components/ChatBot";

const categories = {
  utsikt: [
    { src: "/panoramutsikt.jpg", label: "Utsikt" },
    { src: "/panoramutsikt2.jpg", label: "Utsikt" },
  ],
  hage: [],
  kjokken: [
    { src: "/kjokkenutstyr1.jpg", label: "Kjøkkenutstyr" },
    { src: "/vannkoker.jpg", label: "Vannkoker" },
    { src: "/kaffemaskin.jpg", label: "Kaffemaskin" },
    { src: "/innegrill.jpg", label: "Innegrill" },
  ],
  balpanne: [
    { src: "/balute.jpg", label: "Bål" },
  ],
};

export default function Listing() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="bg-pink-50 min-h-screen p-6">
      {/* Header */}
      <h1 className="text-center text-2xl font-bold mb-2">
        Velkommen til ditt drømmehjem i Sandnes
      </h1>
      <p className="text-center text-gray-700 mb-6">
        Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig –
        perfekt for familier, par og venner.
      </p>
      <p className="text-center font-semibold text-gray-800 mb-8">
        Grill nights, firelight and views – make yourself at home
      </p>

      {/* Husbilde */}
      <div className="flex justify-center mb-8">
        <Image
          src="/hus.jpg"
          alt="Huset"
          width={600}
          height={400}
          className="rounded-2xl shadow-lg"
        />
      </div>

      {/* 3D-knapp */}
      <div className="bg-pink-100 rounded-xl shadow-md p-6 mb-12 text-center">
        <h2 className="text-lg font-bold mb-2">
          👀 Opplev huset i 3D / Explore the house in 3D
        </h2>
        <p className="mb-4 text-gray-700">
          Ta en virtuell visning og se alle rom før du booker – akkurat som å
          være der selv
        </p>
        <button className="bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition">
          Gå inn i huset nå / Enter the house now
        </button>
        <p className="text-xs text-gray-500 mt-2">
          95% av gjester elsker 3D-visningen før booking – ikke gå glipp av den!
        </p>
      </div>

      {/* Utstyr / ikoner */}
      <h2 className="text-center mb-4 text-gray-800">
        Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        <div
          onClick={() => setSelectedCategory("utsikt")}
          className="cursor-pointer hover:scale-105 transition"
        >
          <span className="text-3xl">🌅</span>
          <p>Utsikt / View</p>
        </div>
        <div
          onClick={() => setSelectedCategory("hage")}
          className="cursor-pointer hover:scale-105 transition"
        >
          <span className="text-3xl">🌳</span>
          <p>Hage / Garden</p>
        </div>
        <div
          onClick={() => setSelectedCategory("kjokken")}
          className="cursor-pointer hover:scale-105 transition"
        >
          <span className="text-3xl">🍳</span>
          <p>Kjøkken / Kitchen</p>
        </div>
        <div
          onClick={() => setSelectedCategory("balpanne")}
          className="cursor-pointer hover:scale-105 transition"
        >
          <span className="text-3xl">🔥</span>
          <p>Bålpanne / Fire pit</p>
        </div>
      </div>

      {/* Galleri */}
      {selectedCategory && (
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">Galleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories[selectedCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64"
                />
                <p className="p-2 text-center text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chatbot */}
      <div className="fixed bottom-6 right-6">
        <ChatBot />
      </div>
    </div>
  );
}
