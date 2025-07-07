// pages/index.js
export default function Home() {
  return (
    <main className="bg-rose-50 min-h-screen text-gray-800">
      <section className="text-center py-16">
<h1 className="text-4xl font-bold text-center">
  Velkommen til ditt drømmehjem i Sandnes
</h1>
<h2 className="text-xl font-medium text-center text-gray-700 mt-2">
  Grill nights, firelight and views – make yourself at home
</h2>

{/* Norsk avsnitt */}
<p className="text-center text-gray-800 mt-4 text-base">
  Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
</p>

{/* Engelsk avsnitt */}
<p className="text-center text-gray-600 mt-2 text-sm italic">
  Cozy fire nights, scenic views and room to relax – everything you need for a memorable stay.
</p>
     <button className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
          Se søk & pris
        </button>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <img
          src="/bilseng.jpg"
          alt="Bilseng"
          className="rounded-xl shadow-lg mb-12 w-full object-cover"
        />

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
