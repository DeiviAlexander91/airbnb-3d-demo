import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="bg-neutral-100 text-neutral-900 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">
          Stort hus i ypperlig beliggenhet
        </h1>
        <p className="mt-2 text-xl font-semibold text-gray-700">
          Bright and modern house in Sandnes
        </p>
        <p className="mt-4 text-gray-600">
          Godt plass, moderne fasiliteter og nydelig utsikt. Perfekt for familier, par og mindre grupper – med både hjemmekino og treningsrom.
        </p>
        <a
          href="https://airbnb.com" // endre til din faktiske link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 rounded bg-pink-500 px-5 py-3 text-white font-medium hover:bg-pink-600 transition"
        >
          Se på Airbnb
        </a>
      </div>

      {/* Hero image */}
      <div className="mt-10 rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/images/bilrom.jpg"
          alt="Barnerom med bilseng"
          width={1200}
          height={800}
          className="w-full object-cover"
        />
      </div>

      {/* Galleri */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Image src="/images/utsikt1.jpg" alt="Utsikt 1" width={600} height={400} className="rounded-lg object-cover" />
          <Image src="/images/utsikt2.jpg" alt="Utsikt 2" width={600} height={400} className="rounded-lg object-cover" />
          <Image src="/images/utsikt3.jpg" alt="Utsikt 3" width={600} height={400} className="rounded-lg object-cover" />
        </div>
      </div>
    </div>
  );
}
