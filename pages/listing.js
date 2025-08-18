import Image from "next/image";
import { useState } from "react";

export default function Listing() {
  // State for hvilket galleri som er åpent
  const [selectedGallery, setSelectedGallery] = useState(null);

  // Bilder for de forskjellige kategoriene
  const galleries = {
    utsikt: [
      "/panoramautsikt.jpg",
      "/panoramautsikt2.jpg"
    ],
    hage: [
      "/hage1.jpg",
      "/hage2.jpg"
    ],
    kjokken: [
      "/kjokkenutstyr1.jpg",
      "/vannkoker.jpg",
      "/kaffemaskin.jpg",
      "/innegrill.jpg"
    ],
    balpanne: [
      "/balute.jpg"
    ],
    seng: [
      "/soverom1.jpg",
      "/soverom2.jpg"
    ],
    tv: [
      "/tvstue1.jpg"
    ],
    treningsrom: [
      "/gym1.jpg",
      "/gym2.jpg"
    ],
    vaskemaskin: [
      "/vaskemaskin.jpg"
    ],
    elbil: [
      "/elbillader.jpg"
    ],
    wifi: [
      "/wifi.jpg"
    ]
  };

  return (
    <div className="bg-pink-50 min-h-screen">
      {/* Toppseksjon */}
      <header className="text-center py-8">
        <h1 className="text-2xl font-bold">Velkommen til ditt drømmehjem i Sandnes</h1>
        <p className="text-gray-700">
          Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
        </p>
        <p className="mt-2 text-sm text-gray-500">Grill nights, firelight and views – make yourself at home</p>
      </header>

      {/* Hovedbilde */}
      <div className="flex justify-center">
        <Image
          src="/hus.jpg"
          alt="Huset"
          width={600}
          height={400}
          className="rounded-xl shadow-md"
        />
      </div>

      {/* 3D opplevelse seksjon */}
      <div className="bg-pink-100 mx-4 md:mx-20 my-8 p-6 rounded-xl shadow">
        <h2 className="text-center font-semibold">👀 Opplev huset i 3D / Explore the house in 3D</h2>
        <p className="text-center text-gray-700 text-sm mb-4">
          Ta en virtuell visning og se alle rom før du booker – akkurat som å være der selv
        </p>
        <div className="flex justify-center">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full">
            Gå inn i huset nå / Enter the house now
          </button>
        </div>
        <p className="text-center text-xs text-gray-500 mt-2">
          95% av gjester elsker 3D-visningen før booking – ikke gå glipp av den!
        </p>
      </div>

      {/* Ikoner med utstyr */}
      <div className="text-center mb-6">
        <p className="text-sm text-gray-600">
          Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 text-center">
        {/* Utsikt */}
        <div onClick={() => setSelectedGallery("utsikt")} className="cursor-pointer">
          <span className="text-3xl">🌅</span>
          <p>Utsikt / View</p>
        </div>

        {/* Hage */}
        <div onClick={() => setSelectedGallery("hage")} className="cursor-pointer">
          <span className="text-3xl">🌳</span>
          <p>Hage / Garden</p>
        </div>

        {/* Seng */}
        <div onClick={() => setSelectedGallery("seng")} className="cursor-pointer">
          <span className="text-3xl">🛏️</span>
          <p>Komfortable senger / Cozy beds</p>
        </div>

        {/* Kjøkken */}
        <div onClick={() => setSelectedGallery("kjokken")} className="cursor-pointer">
          <span className="text-3xl">🍴</span>
          <p>Kjøkken / Kitchen equipped</p>
        </div>

        {/* TV */}
        <div onClick={() => setSelectedGallery("tv")} className="cursor-pointer">
          <span className="text-3xl">📺</span>
          <p>TV-stue / TV lounge</p>
        </div>

        {/* Treningsrom */}
        <div onClick={() => setSelectedGallery("treningsrom")} className="cursor-pointer">
          <span className="text-3xl">💪</span>
          <p>Treningsrom / Gym</p>
        </div>

        {/* Bålpanne */}
        <div onClick={() => setSelectedGallery("balpanne")} className="cursor-pointer">
          <span className="text-3xl">🔥</span>
          <p>Bålpanne / Fire pit</p>
        </div>

        {/* Wifi */}
        <div onClick={() => setSelectedGallery("wifi")} className="cursor-pointer">
          <span className="text-3xl">📶</span>
          <p>WiFi</p>
        </div>

        {/* Elbil */}
        <div onClick={() => setSelectedGallery("elbil")} className="cursor-pointer">
          <span className="text-3xl">⚡</span>
          <p>Elbillader / EV charger</p>
        </div>

        {/* Vaskemaskin */}
        <div onClick={() => setSelectedGallery("vaskemaskin")} className="cursor-pointer">
          <span className="text-3xl">🧺</span>
          <p>Vaskemaskin / Washing machine</p>
        </div>
      </div>

      {/* Galleri */}
      {selectedGallery && (
        <div className="mt-10 px-6">
          <h3 className="text-center font-semibold mb-4">Galleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleries[selectedGallery].map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={selectedGallery}
                width={400}
                height={300}
                className="rounded-lg shadow"
              />
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => setSelectedGallery(null)}
              className="bg-gray-300 px-4 py-2 rounded-lg"
            >
              Lukk galleri
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
