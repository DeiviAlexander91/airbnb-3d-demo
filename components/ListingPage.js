export default function ListingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-800">
      <h1 className="text-4xl font-bold">
        Velkommen til ditt drømmehjem i Sandnes
      </h1>
      <p className="mt-4 text-base">
        Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
      </p>

      <h2 className="text-xl font-medium mt-8">
        Grill nights, firelight and views – make yourself at home
      </h2>
      <p className="mt-2 text-sm italic">
        Cozy fire nights, scenic views and room to relax – everything you need for a memorable stay.
      </p>

      {/* CTA-knapp riktig implementert */}
      <div className="mt-6">
        <a
          href="https://www.airbnb.no/rooms/1282008856141933433"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-700 transition duration-300"
        >
          Start ferien din her
        </a>
      </div>

      {/* Bilde */}
      <div className="mt-10">
        <img src="/bilseng.jpg" alt="bilseng" className="rounded-xl w-full" />
      </div>

      {/* Ikon-seksjon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-10 text-sm">
        <div>🎬 Hjemmekino</div>
        <div>📶 High speed internet</div>
        <div>⚡️ Utsikt</div>
        <div>💪 Hurtig Wifi</div>
        <div>🍽 Fullt kjøkken</div>
        <div>🛏 Komfortable senger</div>
      </div>

      {/* Galleri */}
      <h2 className="text-2xl font-semibold mt-12 mb-4">Galleri</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <img src="/utsikt1.jpg" alt="utsikt 1" className="rounded-lg" />
        <img src="/utsikt2.jpg" alt="utsikt 2" className="rounded-lg" />
        <img src="/utsikt3.jpg" alt="utsikt 3" className="rounded-lg" />
      </div>
    </div>
  );
}

