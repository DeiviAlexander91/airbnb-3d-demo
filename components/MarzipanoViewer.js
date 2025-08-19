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

        const scenes = [
          { id: "pano_1", title: "Kontor", image: "/pano_1.jpg" },
          { id: "pano_2", title: "Stue", image: "/pano_2.jpg" },
          { id: "pano_3", title: "Kjøkken", image: "/pano_3.jpg" },
        ];

        const sceneObjects = {};

        scenes.forEach((scene) => {
          // Bruk Equirect-kilde for panorama JPG
          const source = new window.Marzipano.SingleAssetSource({
            url: scene.image,
          });

          const geometry = new window.Marzipano.EquirectGeometry([{ width: 4000 }]);

          const limiter = window.Marzipano.util.compose(
            window.Marzipano.RectilinearView.limit.traditional(
              1024,
              (100 * Math.PI) / 180
            ),
            window.Marzipano.RectilinearView.limit.vfov(
              (30 * Math.PI) / 180,
              (100 * Math.PI) / 180
            )
          );

          const view = new window.Marzipano.RectilinearView(null, limiter);
          const sceneObj = viewer.createScene({ source, geometry, view });
          sceneObjects[scene.id] = sceneObj;
        });

        // Start i kontor
        sceneObjects["pano_1"].switchTo();

        // Navigation-knapper
        const nav = document.createElement("div");
        nav.style.position = "absolute";
        nav.style.top = "10px";
        nav.style.left = "10px";
        nav.style.zIndex = "999";
        nav.style.background = "rgba(255,255,255,0.85)";
        nav.style.padding = "6px 8px";
        nav.style.borderRadius = "8px";
        nav.style.fontSize = "14px";

        scenes.forEach((scene) => {
          const btn = document.createElement("button");
          btn.innerText = scene.title;
          btn.style.margin = "0 4px";
          btn.style.padding = "4px 8px";
          btn.style.border = "1px solid #ccc";
          btn.style.borderRadius = "4px";
          btn.style.cursor = "pointer";
          btn.style.background = "#fff";
          btn.onclick = () => sceneObjects[scene.id].switchTo();
          nav.appendChild(btn);
        });

        container.appendChild(nav);
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
