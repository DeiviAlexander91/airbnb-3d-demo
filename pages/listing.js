import { useState } from "react";

export default function ListingPage() {
  const [showKitchenGallery, setShowKitchenGallery] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl font-bold text-center">
        Velkommen til ditt drømmehjem i Sandnes
      </h1>
      <p className="text-center mt-4 text-base">
        Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig –
        perfekt for familier, par og venner.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 text-sm text-center">
        <div>📺 TV-stue / TV lounge</div>
        <div>🌅 Utsikt / Scenic view</div>
        <div>🛏️ Komfortable senger / Cozy beds</div>
        <button
          className="hover:underline focus:outline-none"
          onClick={() => setShowKitchenGallery(true)}
        >
          🍽️ Kjøkken / Kitchen equipped
        </button>
        <div>🌐 WiFi / Free WiFi</div>
        <div>🔌 Elbillader / EV charger</div>
        <div>🧼 Vaskemaskin / Washing machine</div>
        <div>🔥 Bålpanne / Fire pit</div>
      </div>

      {/* Modal popup for kitchen gallery */}
      {showKitchenGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-2xl w-full relative">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={() => setShowKitchenGallery(false)}
            >
              ×
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Kjøkkenutstyr / Kitchen equipment
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <img src="/utsikt1.jpg" alt="utstyr 1" className="rounded" />
              <img src="/utsikt2.jpg" alt="utstyr 2" className="rounded" />
              <img src="/utsikt3.jpg" alt="utstyr 3" className="rounded" />
              <img src="/bilseng.jpg" alt="utstyr 4" className="rounded" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
