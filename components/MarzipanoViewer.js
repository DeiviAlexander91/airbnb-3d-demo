import { useEffect } from "react";

export default function MarzipanoViewer() {
  useEffect(() => {
    const loadMarzipano = async () => {
      if (typeof window === "undefined") return;

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
        if (!container) return;

        const viewer = new window.Marzipano.Viewer(container);

        // 🔹 Bruk et DEMO-panorama fra Marzipano for å teste
        const demoImage =
          "https://www.marzipano.net/demos/sample-1/tiles/0/0/0.jpg";

        const source = window.Marzipano.ImageUrlSource.fromString(demoImage);
        const geometry = new window.Marzipano.EquirectGeometry([{ width: 4000 }]);
        const view = new window.Marzipano.RectilinearView();

        const scene = viewer.createScene({ source, geometry, view });
        scene.switchTo();
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
    ></div>
  );
}

