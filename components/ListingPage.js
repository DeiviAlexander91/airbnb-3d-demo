import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      <Image
        src="/hero-car.jpg"
        alt="Høydepunkt fra huset"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">
          Utforsk boligen i 3D
        </h1>
        <p className="text-xl md:text-2xl mb-6 drop-shadow-sm">
          Gå en virtuell visning – akkurat som om du var der!
        </p>
        <Button className="text-lg px-6 py-3" onClick={() => window.open("https://matterport-link-her", "_blank")}>Se i 3D</Button>
      </div>
    </div>
  );
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

      {/* Høydepunkter */}
      <section className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {highlights.map((item) => (
          <Card key={item.title}>
            <CardContent>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
