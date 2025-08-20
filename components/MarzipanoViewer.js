"use client";
import { useEffect } from "react";
import Marzipano from "marzipano";

export default function MarzipanoViewer() {
  useEffect(() => {
    const viewerElement = document.getElementById("pano");

    if (!viewerElement) return;

    // Opprett viewer
    const viewer = new Marzipano.Viewer(viewerElement);

    // Sett opp kilde (panorama-bildet ligger i /public/)
    const source = Marzipano.ImageUrlSource.fromString("/pano_1.jpg");

    // Geometri (equirectangular panorama)
    const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

    // Begrensninger på view
    const limiter = Marzipano.RectilinearView.limit.traditional(
      1024,
      (100 * Math.PI) / 180
    );

    // Start-posisjon
    const view = new Marzipano.RectilinearView({ yaw: Math.PI }, limiter);

    // Lag scene
    const scene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
    });

    // Vis panorama
    scene.switchTo();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        🚀 Test: Marzipano 3D Viewer
      </h2>
      <div
        id="pano"
        style={{
          width: "100%",
          height: "500px",
          background: "#000",
        }}
      />
    </div>
  );
}
