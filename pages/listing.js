"use client";
import { useState } from "react";
import ChatBot from "./ChatBot";

const equipment = {
  kjøkken: [
    "/images/kjøkkenutstyr1.jpg",
    "/images/kaffemaskin.jpg",
    "/images/vannkoker.jpg",
    "/images/innegrill.jpg",
  ],
  utsikt: [
    "/images/panoramautsikt.jpg",
    "/images/panoramautsikt2.jpg",
  ],
  bålpanne: [
    "/images/bålute.jpg",
  ],
};

export default function Listing() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="bg-pink-50 min-h-screen">
      {/* HEADER */}
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">
          Velkommen til ditt drømmehjem i Sandnes
        </h1>
        <p className="text-gray-700">
          Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
        </p>
        <p className="font-semibold mt-2">
          Grill nights, firelight and views – make yourself at home
        </p>
      </div>

      {/* HOVEDBILDE */}
      <div className="flex justify-center">
        <img
          src="/images/hus.jpg"
          alt="Huset"
          className="rounded-2xl shadow-lg w-11/12 max-w-4xl"
        />
      </div>

      {/* 3D-SEKSJON */}
      <div className="bg-pink-100 p-6 rounded-xl shadow-md text-center w-11/12 max-w-3xl mx-auto mt-6">
        <h2 className="font-bold text-lg">👀 Opplev huset i 3D / Explore the house in 3D</h2>
        <p className="text-gray-700">
          Ta en virtuell visning og se alle rom før du booker – akkurat som å være der selv!
        </p>
        <button className="mt-4 bg-pink-600 text-white px-6 py-2 rounded-full shadow hover:bg-pink-700">
          Gå inn i huset nå / Enter the house now
        </button>
        <p className="text-xs text-gray-500 mt-2">
          95% av gjester sjekker 3D-visningen før booking – ikke gå glipp av den!
        </p>
      </div>

      {/* IKONER */}
      <p className="text-center mt-10 text-sm text-gray-600">
        Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center py-8 w-11/12 mx-auto">
        <div onClick={() => setSelectedCategory("utsikt")} className="cursor-pointer">
          <span className="text-3xl">🌅</span>
          <p>Utsikt / View</p>
        </div>
        <div onClick={() => setSelectedCategory("kjøkken")} className="cursor-pointer">
          <span className="text-3xl">🍴</span>
          <p>Kjøkken / Kitchen</p>
        </div>
        <div onClick={() => setSelectedCategory("bålpanne")} className="cursor-pointer">
          <span className="text-3xl">🔥</span>
          <p>Bålpanne / Fire pit</p>
        </div>
        <div>
          <span className="text-3xl">💪</span>
          <p>Treningsrom / Gym</p>
        </div>
        <div>
          <span className="text-3xl">🛏️</span>
          <p>Komfortable senger / Cozy beds</p>
        </div>
        <div>
          <span className="text-3xl">📺</span>
          <p>TV-stue / TV lounge</p>
        </div>
        <div>
          <span className="text-3xl">🧺</span>
          <p>Vaskemaskin / Washing machine</p>
        </div>
        <div>
          <span className="text-3xl">⚡</span>
          <p>Elbillader / EV charger</p>
        </div>
        <div>
          <span className="text-3xl">📶</span>
          <p>WiFi</p>
        </div>
        <div>
          <span className="text-3xl">🌳</span>
          <p>Hage / Garden</p>
        </div>
      </div>

      {/* GALLERI */}
      <div className="text-center mt-6">
        <h2 className="font-bold text-lg">Galleri</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 w-11/12 mx-auto">
          <img src="/images/bilseng.jpg" alt="Bilseng" className="rounded-lg shadow" />
          <img src="/images/hus.jpg" alt="Hus" className="rounded-lg shadow" />
          <img src="/images/treningsrom.jpg" alt="Treningsrom" className="rounded-lg shadow" />
        </div>
      </div>

      {/* MODAL */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-xl"
              onClick={() => setSelectedCategory(null)}
            >
              ✖
            </button>
            <div className="flex overflow-x-auto space-x-4">
              {equipment[selectedCategory].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={selectedCategory}
                  className="w-80 h-60 object-cover rounded-lg shadow"
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CHATBOT */}
      <ChatBot />
    </div>
  );
}
