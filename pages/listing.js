import { useState } from "react";
import Image from "next/image";

const equipment = [
  {
    name: "Utsikt / View",
    icon: "🌅",
    images: ["/images/panoramautsikt.jpg", "/images/panoramautsikt2.jpg"],
  },
  {
    name: "Hage / Garden",
    icon: "🌳",
    images: [],
  },
  {
    name: "Komfortable senger / Cozy beds",
    icon: "🛏️",
    images: [],
  },
  {
    name: "Kjøkken / Kitchen equipped",
    icon: "🍴",
    images: [
      "/images/kjøkkenutstyr1.jpg",
      "/images/vannkoker.jpg",
      "/images/kaffemaskin.jpg",
      "/images/innegrill.jpg",
    ],
  },
  {
    name: "TV-stue / TV lounge",
    icon: "📺",
    images: [],
  },
  {
    name: "Treningsrom / Gym",
    icon: "💪",
    images: [],
  },
  {
    name: "Bålpanne / Fire pit",
    icon: "🔥",
    images: ["/images/bålute.jpg"],
  },
  {
    name: "WiFi",
    icon: "📶",
    images: [],
  },
  {
    name: "Elbillader / EV charger",
    icon: "⚡",
    images: [],
  },
  {
    name: "Vaskemaskin / Washing machine",
    icon: "🧺",
    images: [],
  },
];

export default function Listing() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-pink-50 min-h-screen text-center p-6">
      {/* Hero */}
      <h1 className="text-3xl font-bold mb-2">
        Velkommen til ditt drømmehjem i Sandnes
      </h1>
      <p className="text-gray-700 mb-4">
        Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig –
        perfekt for familier, par og venner.
      </p>
      <h2 className="text-xl font-semibold mb-6">
        Grill nights, firelight and views – make yourself at home
      </h2>
      <Image
        src="/images/panoramautsikt.jpg"
        alt="Huset"
        width={1000}
        height={600}
        className="rounded-2xl mx-auto shadow-lg"
      />

      {/* 3D CTA */}
      <div className="bg-pink-100 rounded-2xl p-6 mt-10 shadow-lg">
        <h3 className="text-2xl font-bold mb-2">
          👀 Opplev huset i 3D / Explore the house in 3D
        </h3>
        <p className="text-gray-700 mb-4">
          Ta en virtuell visning og se alle rom før du booker – akkurat som å
          være der selv!
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold shadow hover:bg-pink-600 transition">
          Gå inn i huset nå / Enter the house now
        </button>
        <p className="text-sm text-gray-600 mt-2 italic">
          95% av gjester sjekker 3D-visningen før booking – ikke gå glipp av den!
        </p>
      </div>

      {/* Utstyr */}
      <p className="mt-10 text-sm text-gray-600">
        Trykk på ikonene for å se bilder av utstyret / Click on the icons to view
        equipment
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-6">
        {equipment.map((item, i) => (
          <div
            key={i}
            onClick={() => item.images.length > 0 && setSelected(item)}
            className={`cursor-pointer hover:scale-110 transition ${
              item.images.length === 0 ? "opacity-40 cursor-not-allowed" : ""
            }`}
          >
            <div className="text-4xl">{item.icon}</div>
            <p className="mt-2 text-sm font-medium">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Popup galleri */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-2xl w-full">
            <h3 className="text-xl font-bold mb-4">{selected.name}</h3>
            <div className="flex overflow-x-scroll gap-4">
              {selected.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={selected.name}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
              ))}
            </div>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 bg-pink-500 text-white px-6 py-2 rounded-full"
            >
              Lukk
            </button>
          </div>
        </div>
      )}

      {/* Galleri nederst */}
      <h2 className="text-2xl font-bold mt-16 mb-6">Galleri</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Image
          src="/images/bålute.jpg"
          alt="Bål"
          width={400}
          height={300}
          className="rounded-xl shadow"
        />
        <Image
          src="/images/panoramautsikt2.jpg"
          alt="Utsikt"
          width={400}
          height={300}
          className="rounded-xl shadow"
        />
        <Image
          src="/images/kaffemaskin.jpg"
          alt="Kaffemaskin"
          width={400}
          height={300}
          className="rounded-xl shadow"
        />
      </div>
    </div>
  );
}
