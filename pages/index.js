// pages/index.js

export default function Home() {
  return (
    <main className="bg-rose-50 min-h-screen text-gray-800">
      <section className="text-center px-6 py-8">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Velkommen til ditt drømmehjem i Sandnes
        </h1>
        <p className="text-base text-gray-600 mt-2">
          Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
        </p>
        <p className="text-xl font-medium mt-6 text-pink-800">
          Grill nights, firelight and views – make yourself at home
        </p>
        <p className="text-sm italic text-gray-600 mt-1">
          Cozy fire nights, scenic views and room to relax – everything you need for a memorable stay.
        </p>
      </section>

      {/* Galleri */}
      <section className="px-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <img src="/utsikt1.jpg" alt="Utsikt 1" className="rounded-lg w-full aspect-video object-cover" />
          <img src="/utsikt2.jpg" alt="Utsikt 2" className="rounded-lg w-full aspect-video object-cover" />
          <img src="/utsikt3.jpg" alt="Utsikt 3" className="rounded-lg w-full aspect-video object-cover" />
        </div>
      </section>
    </main>
  );
}
