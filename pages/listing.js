import { useState } from "react";

export default function ListingPage() {
  const [activeGallery, setActiveGallery] = useState(null);

  const galleries = {
    kitchen: [
      "/utsikt4.jpg"
    ],
    tv: [
      "/tvstue1.jpg"
    ],
    bedroom: [
      "/soverom1.jpg"
    ],
    washing: [
      "/treningsrom1.jpg"
    ],
    charger: [
      "/lader1.jpg"
    ],
    firepit: [
      "/bilseng.jpg"
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl font-bold text-center">
        Velkommen til ditt drømmehjem i Sandnes
      </h1>
      <p className="text-center mt-4 text-base">
        Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig –
        perfekt for familier, par og venner.
      </p>

      <p className="text-center text-sm text-gray-600 mt-6 italic">
        Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-4 text-sm text-center">
        <button onClick={() => setActiveGallery("tv")} className="hover:underline">
          🔍 📺 TV-stue / TV lounge
        </button>
        <div>🌅 Utsikt / Scenic view</div>
        <button onClick={() => setActiveGallery("bedroom")} className="hover:underline">
          🔍 🛏️ Komfortable senger / Cozy beds
        </button>
        <button onClick={() => setActiveGallery("kitchen")} className="hover:underline">
          🔍 🍽️ Kjøkken / Kitchen equipped
        </button>
        <div>🌐 WiFi / Free WiFi</div>
        <button onClick={() => setActiveGallery("charger")} className="hover:underline">
          🔍 🔌 Elbillader / EV charger
        </button>
        <button onClick={() => setActiveGallery("washing")} className="hover:underline">
          🔍 🧼 Vaskemaskin / Washing machine
        </button>
        <button onClick={() => setActiveGallery("firepit")} className="hover:underline">
          🔍 🔥 Bålpanne / Fire pit
        </button>
      </div>

      {activeGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setActiveGallery(null)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center capitalize">
              {activeGallery.charAt(0).toUpperCase() + activeGallery.slice(1)} gallery
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {galleries[activeGallery].map((src, index) => (
                <img key={index} src={src} alt={`gallery ${index}`} className="rounded" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
