import { useEffect } from "react";

export default function MarzipanoViewer() {
  useEffect(() => {
    const loadMarzipano = async () => {
      if (typeof window === "undefined") return;

      if (!window.Marzipano) {
        console.log("🔄 Laster Marzipano-script...");
        const script = document.createElement("script");
        script.src =
          "https://cdn.jsdelivr.net/npm/marzipano@0.10.2/build/marzipano.js";
        script.async = true;
        script.onload = () => {
          console.log("✅ Marzipano lastet inn!");
          initMarzipano();
        };
        script.onerror = () => {
          console.error("❌ Klarte ikke laste Marzipano-scriptet!");
        };
        document.body.appendChild(script);
      } else {
        console.log("ℹ️ Marzipano var allerede lastet inn.");
        initMarzipano();
      }

      function initMarzipano() {
        const container = document.getElementById("pano-container");
        if (!container) {
          console.error("❌ Fant ikke #pano-container i DOM.");
          return;
        }

        console.log("✅ Fant container, lager viewer...");
        const viewer = new window.Marzipano.Viewer(container);

        // Bruk DEMO-bilde først
        const demoImage =
          "https://www.marzipano.net/demos/sample-1/tiles/0/0/0.jpg";

        console.log("📷 Laster inn testbilde:", demoImage);

        try {
          const source = window.Marzipano.ImageUrlSource.fromString(demoImage);
          const geometry = new window.Marzipano.EquirectGeometry([{ width: 4000 }]);
          const view = new window.Marzipano.RectilinearView();

          const scene = viewer.createScene({ source, geometry, view });
          console.log("✅ Scene opprettet:", scene);
          scene.switchTo();
          console.log("🎉 Byttet til scene!");
        } catch (err) {
          console.error("💥 FEIL under initMarzipano:", err);
        }
      }
    };

    loadMarzipano();
  }, []);

  return (
    <div
      id="pano-container"
      style={{
        width: "100%",
        height: "500px",
        background: "#000",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <p style={{ color: "#fff", textAlign: "center", paddingTop: "200px" }}>
        Laster panorama...
      </p>
    </div>
  );
}
