import { useState } from 'react';
import Image from 'next/image';

export default function ListingPage() {
  const [modalImage, setModalImage] = useState(null);

  const equipment = [
    {
      label: 'TV-stue / TV lounge',
      icon: '🛋️',
      image: '/tvstue1.jpg',
    },
    {
      label: 'Utsikt / Scenic view',
      icon: '🌍',
      image: '/utsikt4.jpg',
    },
    {
      label: 'Komfortable senger / Cozy beds',
      icon: '🛏️',
      image: '/soverom1.jpg',
    },
    {
      label: 'Kjøkken / Kitchen equipped',
      icon: '🍽️',
      image: '/kjokken.jpg',
    },
    {
      label: 'WiFi / Free WiFi',
      icon: '📶',
    },
    {
      label: 'Elbillader / EV charger',
      icon: '🔋',
      image: '/lader1.jpg',
    },
    {
      label: 'Vaskemaskin / Washing machine',
      icon: '💊',
      image: '/vaskemaskin.jpg',
    },
    {
      label: 'Bålpanne / Fire pit',
      icon: '🔥',
      image: '/balpanne.jpg',
    },
  ];

  return (
    <div className="bg-pink-50 min-h-screen py-8 text-center text-gray-900">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">
        Velkommen til ditt drømmehjem i Sandnes
      </h1>
      <p className="text-sm md:text-base text-gray-800 mb-1">
        Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
      </p>
      <p className="text-sm italic text-gray-600 mb-4">
        Enjoy sunsets, firelight and comfort in a modern family-friendly home
      </p>

      <div className="max-w-3xl mx-auto">
        <Image
          src="/utsikt1.jpg"
          alt="Hero image"
          width={1200}
          height={700}
          className="rounded-xl mb-6 w-full object-cover"
        />

        <p className="text-xs italic text-gray-500 mb-4">
          Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-base mb-6">
          {equipment.map((item, index) => (
            <button
              key={index}
              onClick={() => item.image && setModalImage(item.image)}
              className={`flex items-center gap-1 justify-center hover:underline focus:outline-none transition ${
                item.image ? 'cursor-pointer' : 'cursor-default opacity-70'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        <a
          href="https://www.airbnb.no/rooms/1282008856141933433"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-pink-600 text-white text-base rounded-full hover:bg-pink-700 transition"
        >
          Start ferien din her
        </a>
      </div>

      <h2 className="text-lg font-semibold mt-10 mb-3">Galleri</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-5xl mx-auto">
        <Image src="/bilseng.jpg" alt="bilseng" width={500} height={300} className="rounded-md object-cover" />
        <Image src="/utsikt2.jpg" alt="utsikt 2" width={500} height={300} className="rounded-md object-cover" />
        <Image src="/treningsrom1.jpg" alt="treningsrom" width={500} height={300} className="rounded-md object-cover" />
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="utstyr"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

