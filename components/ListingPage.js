import { Card, CardContent } from './Card';
import Button from './Button';

export default function ListingPage() {
  const highlights = [
    { title: 'Stor terrasse', desc: 'Utsikt og morgensol i solen' },
    { title: 'Hjemmekino', desc: 'Koselige kvelder med film' },
    { title: 'Moderne kjøkken', desc: 'Fullt utstyrt for alle behov' },
    { title: 'Herlige senger', desc: 'Komfort og rolig søvn' },
    { title: 'Verksted til oss gjester', desc: 'Kort vei til alt' },
    { title: 'Gratis parkering', desc: 'Privat plass inkludert' }
  ];

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
      <sect
