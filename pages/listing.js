import dynamic from "next/dynamic";

// Importer MarzipanoViewer dynamisk (unngår SSR-feil)
const MarzipanoViewer = dynamic(() => import("../components/MarzipanoViewer"), {
  ssr: false,
});

export default function Listing() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-6">
        🚀 Test: Marzipano 3D Viewer
      </h1>

      {/* Marzipano 3D container */}
      <div className="w-full max-w-4xl h-[500px] rounded-xl overflow-hidden shadow-lg border border-gray-300">
        <MarzipanoViewer />
      </div>

      <p className="mt-4 text-gray-600 text-sm">
        Hvis du ser svart skjerm her, er problemet i MarzipanoViewer.js eller bildene (pano_1.jpg osv).
      </p>
    </div>
  );
}
