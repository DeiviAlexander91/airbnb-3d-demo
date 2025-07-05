import { Button } from "./Button";
import Image from "next/image";
import { Card, CardContent } from "./Card";

const highlights = [
  {
    title: "Moderne stue med hjemmekino",
    desc: "Stor TV, gode sitteplasser og kino-opplevelse hjemme.",
  },
  {
    title: "Fullt utstyrt treningsrom",
    desc: "Hold deg i form med kvalitetsutstyr – helt gratis!",
  },
  {
    title: "Utsikt og solrik uteplass",
    desc: "Nyt sommeren ute med fantastisk utsikt og grillmuligheter.",
  },
];

export default function ListingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
      {/* Hero-bilde og toppbanner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
        <Image
          src="/hero-car.jpg"
          alt="Airbnb highlight house"
          fill
          className="absolute inset-0 object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-xl">
            Utforsk boligen i 3D
          </h1>
          <p className="text-xl mt-2 drop-shadow-md">
            Gå en virtuell visning – akkurat som om du var der!
          </p>
          <Button
            className="mt-4 px-6 py-3 text-lg"
            onClick={() =>
              window.open("https://matterport-link-her", "_blank")
            }
          >
            Se i 3D
          </Button>
        </div>
      </div>

      {/* Kort tekstbeskrivelse */}
      <div className="text-white text-lg mt-2">
        Med utsikt, hjemmekino og perfekt beliggenhet!
      </div>

      {/* Om leiligheten */}
      <section className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold">
          Bright and modern apartment in Oslo
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Velkommen til et moderne hjem med god plass, komfort og stil. Perfekt
          for familier, par og små grupper. Her finner du alt fra moderne
          kjøkken til hjemmekino og nydelig uteplass.
        </p>
        <Button asChild>
          <a
            href="https://airbnb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Se på Airbnb
          </a>
        </Button>
      </section>

      {/* Høydepunkter */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {highlights.map((item) => (
          <Card key={item.title}>
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
