// pages/index.js

export default function Home() {
  return (
    <main className="bg-rose-50 min-h-screen text-gray-800">
      {/* Introduksjon */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Velkommen til ditt drømmehjem i Sandnes
        </h1>
        <p className="mt-4 text-base">
          Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
        </p>
        <h2 className="text-xl font-medium mt-8 text-gray-700">
          Grill nights, firelight and views – make yourself at home
        </h2>
        <p className="text-sm italic text-gray-600 mt-2">
          Cozy fire nights, scenic views and room to relax – everything you need for a memorable stay.
        </p>
      </section>

      {/* Bilde + knapp */}
      <section className="max-w-5xl mx-auto px-4">
        <img
          src="/bilseng.jpg"
          alt="Bilseng"
          className="rounded-xl shadow-lg w-full object-cover"
        />
        <div className="text-center mt-6">
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition">
            Se søk & pris
          </button>
        </div>
      </section>

      {/* Fa*
