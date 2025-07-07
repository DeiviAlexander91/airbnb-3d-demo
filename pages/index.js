// pages/index.js

import Image from "next/image";

export default function Home() {
  return (
    <div className="px-6 py-12">

      {/* Tittel og introduksjon */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Stort hus i ypperlig beliggenhet</h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
          Bright and modern house in Sandnes
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          God plass, moderne bad, basseng og nydelig utsikt! Perfekt for familier, par og mindre grupper – stedet passer til både avslapning og moro.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full">
          Se søk & pris
        </button>
      </div>

      {/* Forsidebilde */}
      <div className="mt-12">
        <Image
          src="/forside-bilde.jpg"
          width={1000}
          height={600}
          alt="Forsidebilde"
          className="rounded-xl w-full object-cover"
        />
      </div>

      {/* Amenities */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-4">Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
          <div>🛋️ Hemmekino</div>
          <div>📶 High speed internet</div>
          <div>⚠️ Utsikt</div>
          <div>📡 Hurtig WiFi</div>
          <div>🍽️ Fullt kjøkken</div>
          <div>🛏️ Komfortable senger</div>
        </div>
      </div>

      {/* Galleri */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-4">Galleri</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image src="/1.avif.jpg" width={600} height={400} alt="Galleri 1" className="rounded-lg" />
          <Image src="/2.avif.jpg" width={600} height={400} alt="Galleri 2" className="rounded-lg" />
          <Image src="/3.avif.jpg" width={600} height={400} alt="Galleri 3" className="rounded-lg" />
        </div>
      </div>

    </div>
  );
}
