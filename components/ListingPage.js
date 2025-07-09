import { useState } from "react";
import Image from "next/image";

export default function ListingPage() {
  const [modalImage, setModalImage] = useState(null);

  const equipment = [
    { label: "TV-stue / TV lounge", icon: "📺", image: "/tvstue1.jpg" },
    { label: "Utsikt / view", icon: "🌅", image: "/utsikt4.jpg" },
    { label: "Komfortable senger / Cozy beds", icon: "🛏️", image: "/soverom1.jpg" },
    { label: "Kjøkken / Kitchen equipped", icon: "🍴", image: "/utstyr1.jpg" },
    { label: "WiFi", icon: "📶", image: "/wifi.jpg" },
    { label: "Elbillader / EV charger", icon: "🔌", image: "/lader1.jpg" },
    { label: "Vaskemaskin / Washing machine", icon: "🧺", image: "/treningsrom1.jpg" },
    { label: "Bålpanne / Fire pit", icon: "🔥", image: "/balplass.jpg" },
  ];

  const gallery = [
    "/barnerom.jpg",
    "/utsikt1.jpg",
    "/utsikt2.jpg",
    "/utsikt3.jpg",
    "/treningsrom1.jpg",
  ];

  return (
    <div className="bg-pink-50 min-h-screen text-center text-gray-900 px-4">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Velkommen til ditt drømmehjem i Sandnes
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-1">
          Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
        </p>
        <h2 className="text-xl font-semibold mt-4">
          Grill nights, firelight and views – make yourself at home
        </h2>
        <p className="italic text-sm text-gray-600 mb-6">
          Cozy fire nights, scenic views and room to relax – everything you need for a memorable stay.
        </p>

        <div className="rounded-xl overflow-hidden shadow-lg mb-4">
          <Image
            src="/forsidelayout.jpg"
            alt="Hovedbilde"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
        </div>

        <p className="text-sm italic mb-4">
          Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              onClick={() => item.image && setModalImage(item.image)}
              className={`cursor-pointer text-sm hover:underline flex flex-col items-center ${
                item.image ? "text-blue-800 hover:text-blue-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <a
          href="https://www.airbnb.no/rooms/1282008856141933433"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow hover:bg-pink-700 transition mb-8"
        >
          Start ferien din her
        </a>

        <h3 className="text-lg font-semibold mb-4">Galleri</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={img}
                alt={`Galleri ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <div className="bg-white p-4 rounded-xl max-w-xl">
            <Image src={modalImage} alt="Utstyrsdetalj" width={800} height={600} />
          </div>
            {/* Chat-avatar */}
<div
  className="fixed bottom-6 right-6 cursor-pointer z-50 hover:scale-105 transition-transform duration-300"
  onClick={() => alert("Hei! Har du spørsmål? 😄 Chat kommer snart...")}
>
  <Image
    src={AvatarImage}
    alt="Chat med Deivi"
    width={80}
    height={80}
    className="rounded-full shadow-xl"
  />
</div>

        </div>
      )}
    </div>
  );
}
