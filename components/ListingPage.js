import Image from "next/image";
import Link from "next/link";

export default function ListingPage() {
  return (
    <div className="bg-[#fffaf3] text-black min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-12 px-4">
        <h1 className="text-4xl font-extrabold">Stort hus i ypperlig beliggenhet</h1>
        <h2 className="text-xl text-gray-600 mt-2">Bright and modern house in <span className="line-through">Oslo</span> Sandnes</h2>
        <p className="mt-4 max-w-xl mx-auto">
          Centrally located with ample space, comfort, and modern amenities. Ideal for families,
          couples, and small groups. Everything from a home theater to a lovely outdoor area.
        </p>
        <Link href="https://www.airbnb.no/rooms/12345678" target="_blank">
          <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-full shadow">
            View on Airbnb
          </button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full relative h-[400px]">
        <Image
          src="/hero.jpg"
          alt="Hero image of the house"
          layout="fill"
          objectFit="cover"
          className="rounded"
          priority
        />
      </div>

      {/* Amenities Section */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Fasiliteter</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <div>🎬 Hjemmekino</div>
          <div>📶 Høyhastighetsinternett</div>
          <div>🧖‍♂️ Privat badstue</div>
          <div>🌄 Fantastisk utsikt</div>
          <div>🍽️ Fullt utstyrt kjøkken</div>
          <div>🌞 Utemøbler og grillplass</div>
        </div>
      </div>

      {/* Gallery */}
      <div className="px-6 pb-12">
        <h2 className="text-2xl font-bold mb-6">Galleri</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Image
            src="/barneseng.jpg"
            alt="Barneseng bil"
            width={400}
            height={300}
            className="rounded"
          />
          <Image
            src="/gallery1.jpg"
            alt="Gallery 1"
            width={400}
            height={300}
            className="rounded"
          />
          <Image
            src="/gallery2.jpg"
            alt="Gallery 2"
            width={400}
            height={300}
            className="rounded"
          />
          <Image
            src="/gallery3.jpg"
            alt="Gallery 3"
            width={400}
            height={300}
            className="rounded"
          />
        </div>
      </div>
    </div>
  );
}

