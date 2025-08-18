import { useState } from "react";

const equipment = [
  {
    label: "Utsikt / View",
    icon: "🌅",
    images: ["/images/panoramautsikt.jpg", "/images/panoramautsikt2.jpg"],
  },
  {
    label: "Hage / Garden",
    icon: "🌳",
    images: ["/images/hage.jpg"],
  },
  {
    label: "Komfortable senger / Cozy beds",
    icon: "🛏️",
    images: ["/images/seng.jpg"],
  },
  {
    label: "Kjøkken / Kitchen equipped",
    icon: "🍴",
    images: [
      "/images/kjøkkenutstyr1.jpg",
      "/images/innegrill.jpg",
      "/images/vannkoker.jpg",
      "/images/kaffemaskin.jpg",
    ],
  },
  {
    label: "TV-stue / TV lounge",
    icon: "📺",
    images: ["/images/tvstue.jpg"],
  },
  {
    label: "Treningsrom / Gym",
    icon: "💪",
    images: ["/images/treningsrom.jpg"],
  },
  {
    label: "Bålpanne / Fire pit",
    icon: "🔥",
    images: ["/images/bålute.jpg"],
  },
  {
    label: "WiFi",
    icon: "📶",
    images: ["/images/wifi.jpg"],
  },
  {
    label: "Elbillader / EV charger",
    icon: "⚡",
    images: ["/images/elbillader.jpg"],
  },
  {
    label: "Vaskemaskin / Washing machine",
    icon: "🧺",
    images: ["/images/vaskemaskin.jpg"],
  },
];

export default function Listing() {
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSelect = (item) => {
    setSelectedEquipment(item);
    setCurrentImageIndex(0); // start alltid på første bilde
  };

  const handleNext = () => {
    if (selectedEquipment) {
      setCurrentImageIndex(
        (prev) => (prev + 1) % selectedEquipment.images.length
      );
    }
  };

  const handlePrev = () => {
    if (selectedEquipment) {
      setCurrentImageIndex(
        (prev) =>
          (prev - 1 + selectedEquipment.images.length) %
          selectedEquipment.images.length
      );
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-lg mb-4 italic">
        Trykk på ikonene for å se bilder av utstyret / Click on the icons to view equipment
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center">
        {equipment.map((item, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(item)}
            className="flex flex-col items-center hover:scale-110 transition-transform"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="text-sm mt-1">{item.label}</span>
          </button>
        ))}
      </div>

      {selectedEquipment && (
        <div className="mt-6 text-center">
          <h3 className="font-bold text-xl">{selectedEquipment.label}</h3>
          <div className="relative flex items-center justify-center mt-4">
            {selectedEquipment.images.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 bg-white/70 px-3 py-1 rounded-full shadow hover:bg-white"
              >
                ◀
              </button>
            )}
            <img
              src={selectedEquipment.images[currentImageIndex]}
              alt={selectedEquipment.label}
              className="mx-auto rounded-lg shadow-md max-h-96"
            />
            {selectedEquipment.images.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 bg-white/70 px-3 py-1 rounded-full shadow hover:bg-white"
              >
                ▶
              </button>
            )}
          </div>
          {selectedEquipment.images.length > 1 && (
            <p className="mt-2 text-sm text-gray-600">
              {currentImageIndex + 1} / {selectedEquipment.images.length}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
