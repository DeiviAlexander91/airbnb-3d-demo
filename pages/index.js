import Hero from "../components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <Image src="/img1.jpg" width={600} height={400} alt="bilde1" className="rounded-lg" />
          <Image src="/img2.jpg" width={600} height={400} alt="bilde2" className="rounded-lg" />
          <Image src="/img3.jpg" width={600} height={400} alt="bilde3" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
}
