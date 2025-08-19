import { useState, useEffect } from "react";
import Image from "next/image";
import ChatBot from "../components/ChatBot";

export default function Listing() {
  const [modalImages, setModalImages] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://www.marzipano.net/demos/vendor/marzipano.js";
      script.onload = () => {
        initMarzipano();
      };
      document.body.appendChild(script);
    }
  }, []);

  const initMarzipano = () => {
    const viewer = new window.Marzipano.Viewer(
      document.getElementById("pano-container")
    );

    const scenes = [
      { id: "pano_1", title: "Kontor", image: "/pano_1.jpg", target: "pano_2" },
      { id: "pano_2", title: "Stue", image: "/pano_2.jpg", target: ["pano_1", "pano_3"] },
      { id: "pano_3", title: "Kjøkken", image: "/pano_3.jpg", target: "pano_2" },
    ];

    const sceneObjects = {};

    scenes.forEach((data) => {
      const source = window.Marzipano.ImageUrlSource.fromString(data.image);
      const geometry = new window.Marzipano.EquirectGeometry([{ width: 4000 }]);
      const view = new window.Marzipano.RectilinearView();

      const scene = viewer.createScene({
        source,
        geometry,
        view,
        pinFirstLevel: true,
      });

      sceneObjects[data.id] = { scene, data };
    });

    function switchScene(id) {
      sceneObjects[id].scene.switchTo();
      addHotspots(id);
    }

    function addHotspots(id) {
      const data = sceneObjects[id].data;
      let container = document.querySelector("#pano-container .hotspots");
      if (container) container.remove();

      container = document.createElement("div");
      container.classList.add("hotspots");
      document.getElementById("pano-container").appendChild(container);

      const targets = Array.isArray(data.target) ? data.target : [data.target];
      targets.forEach((targetId, i) => {
        const button = document.createElement("button");
        button.innerText = "Gå til " + sceneObjects[targetId].data.title;
        button.style.position = "absolute";
        button.style.top = "20px";
        button.style.left = 20 + 120 * i + "px";
        button.style.zIndex = 9999;
        button.onclick = () => switchScene(targetId);
        container.appendChild(button);
      });
    }

    switchScene("pano_1");
  };

  const equipment = [
    {
      label: "Huset / The house",
      icon: "🏠",
      images: ["/Kontor1.jpg", "/kontor2.jpg", "/barnerom.jpg"],
    },
    {
      label: "Utsikt / View",
      icon: "🌅",
      images: ["/panaromautsikt.jpg", "/panoromautsikt2.jpg"],
    },
    {
      label: "Hage / Garden",
      icon: "🌳",
      images: ["/hage.jpg"],
    },
    {
      label: "Komfortable senger / Cozy beds",
      icon: "🛏️",
      images: ["/soverom1.jpg"],
    },
    {
      label: "Kjøkken / Kitchen equipped",
      icon: "🍴",
      images: [
        "/innegrill.jpg",
        "/kaffemaskin.jpg",
        "/kjøkkenutstyr1.jpg",
        "/vannkoker.jpg",
      ],
    },
    {
      label: "TV-stue / TV lounge",
      icon: "📺",
      images: ["/tvstue1.jpg"],
    },
    {
      label: "Treningsrom / Gym",
      icon: "💪",
      images: ["/treningsrom1.jpg"],
    },
    {
      label: "Bålpanne / Fire pit",
      icon: "🔥",
      images: ["/bålute.jpg"],
    },
    {
      label: "WiFi",
      icon: "📶",
      images: [],
    },
    {
      label: "Elbillader / EV charger",
      icon: "🔌",
      images: ["/lader1.jpg"],
    },
    {
      label: "Vaskemaskin / Washing machine",
      icon: "🧺",
      images: ["/vaskemaskin.jpg"],
    },
  ];

  const galleryImages = [
    { src: "/forsidelayout.jpg", alt: "Hovedbilde" },
    { src: "/barnerom.jpg", alt: "Barnerom" },
    { src: "/treningsrom1.jpg", alt: "Treningsrom" },
  ];

  return (
    <div className="bg-pink-50 min-h-screen text-center text-gray-900 px-4">
      <div className="max-w-4xl mx-auto py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2">
          Velkommen til ditt drømmehjem i Sandnes
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-1">
          Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for
          familier, par og venner.
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
            priority
          />
        </div>

        {/* 3D-seksjon */}
        <div className="bg-pink-100 p-6 rounded-2xl shadow-lg mb-8">
          <h3 className="text-xl font-bold mb-2">
            👀 Opplev huset i 3D / Explore the house in 3D
          </h3>
          <p className="text-gray-700 mb-4">
            Virtuell visning – gå fra kontor → stue → kjøkken
          </p>
          <div
            id="pano-container"
            style={{ width: "100%", height: "500px", background: "black" }}
          ></div>
        </div>

        <p className="text-sm italic mb-4">
          Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          {equipment.map((item, index) => (
            <div
              key={index}
              onClick={() => item.images.length > 0 && setModalImages(item.images)}
              className={`cursor-pointer text-sm hover:underline flex flex-col items-center ${
                item.images.length > 0
                  ? "text-blue-800 hover:text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-4">Galleri</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, index) => (
            <div
              key={`gallery-${index}`}
              className="relative aspect-[4/3] overflow-hidden rounded-xl shadow hover:shadow-lg transition-shadow bg-gray-100"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      <ChatBot />

      {modalImages.length > 0 && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setModalImages([])}
        >
          <div className="bg-white p-4 rounded-xl max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modalImages.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt="Utstyrsdetalj"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                unoptimized
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
