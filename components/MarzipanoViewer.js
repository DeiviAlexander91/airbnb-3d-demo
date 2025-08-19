import { useEffect } from "react";

export default function MarzipanoViewer() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Last inn Marzipano hvis den ikke finnes
    if (!window.Marzipano) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/marzipano@0.10.2/build/marzipano.js";
      script.async = true;
      script.onload = () => initMarzipano();
      document.body.appendChild(script);
    } else {
      initMarzipano();
    }

    function initMarzipano() {
      const container = document.getElementById("pano-container");
      if (!container) {
        console.error("Fant ikke #pano-container!");
        return;
      }

      console.log("✅ Lager viewer...");
      const viewer = new window.Marzipano.Viewer(container);

      // 👉 TEST først med ditt eget bilde
      const imageUrl = "/pano_1.jpg";

      console.log("📷 Laster bilde:", imageUrl);

      // Bruk equirectangular (full 360 panorama)
      const source = window.Marzipano.ImageUrlSource.fromString(imageUrl);
      const geometry = new window.Marzipano.EquirectGeometry([{ width: 4000 }]);
      const limiter = window.Marzipano.RectilinearView.limit.traditional(1024, Math.PI/2);
      const view = new window.Marzipano.RectilinearView(null, limiter);

      const scene = viewer.createScene({
        source,
        geometry,
        view,
      });

      scene.switchTo();
      console.log("🎉 Scene aktivert!");
    }
  }, []);

  return (
    <div
      id="pano-container"
      style={{
        width: "100%",
        height: "500px",
        background: "#222",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    ></div>
  );
}
