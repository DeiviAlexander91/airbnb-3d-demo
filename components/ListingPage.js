import { Card, CardContent } from './Card';
import Button from './Button';

export default function ListingPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      {/* Hero-bilde og tekst */}
      <section className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl shadow">
        <img
          src="/hero.jpg"
          alt="Airbnb highlight room"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center px-4">
            Magisk familieopplevelse i stor enebolig – med utsikt, kino og 3D-visning
          </h1>
        </div>
      </section>

      {/* Toppseksjon */}
      <section className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Bright and modern apartment in Oslo</h1>
        <p className="text-gray-600">
          Centrally located with a view, modern facilities, and 3D viewing right from your sofa.
        </p>
        <Button asChild>
          <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
            View on Airbnb
          </a>
        </Button>
      </section>

      {/* 3D-visning */}
      <section className="aspect-video w-full rounded-2xl overflow-hidden shadow">
        <iframe
          src="https://my.matterport.com/show/?m=XXXXXXX"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </section>

      {/* Galleri */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <Card key={i}>
            <CardContent className="p-4">Card {i}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
