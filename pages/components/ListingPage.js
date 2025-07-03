import { Card, CardContent } from "./kort";
import { Button } from "./knapp";

export default function ListingPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      {/* Toppseksjon */}
      <section className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Lys og moderne leilighet i Oslo</h1>
        <p className="text-gray-600">
          Bo sentralt med utsikt, moderne fasiliteter og 3D-visning rett fra sofaen.
        </p>
        <Button asChild>
          <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
            Se på Airbnb
          </a>
        </Button>
      </section>

      {/* 3D-visning */}
      <section>
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow">
          <iframe
            src="https://my.matterport.com/show/?m=XXXXXX"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </section>

      {/* Bildegalleri */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <img
            key={i}
            src={`https://source.unsplash.com/400x300/?apartment,interior,${i}`}
            alt="Boligbilde"
            className="rounded-xl object-cover w-full h-full"
          />
        ))}
      </section>

      {/* Detaljer */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <Card>
          <CardContent className="p-4">
            <p className="font-semibold">2 Soverom</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="font-semibold">1 Bad</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="font-semibold">65 m²</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="font-semibold">WiFi, vaskemaskin, TV</p>
          </CardContent>
        </Card>
      </section>

      {/* Kart og booking */}
      <section className="space-y-4">
        <div className="w-full h-64">
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            className="rounded-2xl"
          ></iframe>
        </div>
        <div className="text-center">
          <Button asChild>
            <a href="https://airbnb.com" target="_blank" rel="noopener noreferrer">
              Book nå via Airbnb
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
