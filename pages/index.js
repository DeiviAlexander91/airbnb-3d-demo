// pages/index.js
export default function Home() {
  return (
    <main className="bg-rose-50 min-h-screen text-gray-800">
<section className="text-center py-16">
  <h1 className="text-4xl font-extrabold tracking-tight">
    Velkommen til ditt drømmehjem i Sandnes
  </h1>
  <p className="mt-4 text-base text-gray-800">
    Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
  </p>

  <h2 className="text-xl font-medium mt-8 text-gray-700">
    Grill nights, firelight and views – make yourself at home
  </h2>
  <p className="text-sm italic text-gray-600 mt-2">
    Cozy fire nights, scenic views and room to relax – everything you need for a memorable stay.
  </p>
</section>
      <section className="max-w-4xl mx-auto px-4">
        <img
          src="/bilseng.jpg"
          alt="Bilseng"
          className="rounded-xl shadow-lg mb-12 w-full object-cover"
        />
            
            <div className="text-center mt-6">
    <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
      Se søk & pris
    </button>
  </div>
</section>

        <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-lg">
          <li>🛋 Hemmekino</li>
          <li>🌐 Høyhastighets internett</li>
          <li>🔥 Utsikt og uteplass</li>
          <li>🚿 Hurtig Wifi</li>
          <li>🍽 Fullt kjøkken</li>
          <li>🛏 Komfortable senger</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-12 mb-4">Galleri</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="/utsikt1.jpg" alt="Utsikt 1" className="rounded-lg" />
          <img src="/utsikt2.jpg" alt="Utsikt 2" className="rounded-lg" />
          <img src="/utsikt3.jpg" alt="Utsikt 3" className="rounded-lg" />
        </div>
      </section>
    </main>
  );
}
