import { Card, CardContent } from './Card';
import Button from './Button';

export default function ListingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      {/* Hero-bilde og overskrift */}
      <section className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow-lg">
        <img
          src="/hero.jpg"
          alt="Airbnb highlight room"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Magisk familieopplevelse i stor enebolig
          </h1>
          <p className="text-white text-lg mt-2">
            Med utsikt, hjemmekino og perfekt beliggenhet!
          </p>
        </div>
      </section>

      {/* Om leiligheten */}
      <section className="space-y-2 text-center">
        <h2 className="text-2xl font-semibold">Bright and modern apartment in Oslo</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Velkommen til et moderne hjem med god plass, komfort og stil. Perfekt for familier, par og små grupper. Her finner du alt fra moderne kjøkken til hjemmekino og nydelig uteplass.
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

      {/* Høydepunkter (galleri) */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { title: 'Stor terrasse', desc: 'Utsikt og morgenkaffe i solen' },
          { title: 'Hjemmekino', desc: 'Koselige kvelder med film' },
          { title: 'Moderne kjøkken', desc: 'Fullt utstyrt for alle behov' },
          { title: 'Romslige soverom', desc: 'Komfort og rolig søvn' },
          { title: 'Nærhet til Oslo sentrum', desc: 'Kort vei til alt' },
          { title: 'Gratis parkering', desc: 'Privat plass inkludert' },
        ].map((item, i) => (
          <Card key={i}>
            <CardContent>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section.>
    </div>
  );
}
