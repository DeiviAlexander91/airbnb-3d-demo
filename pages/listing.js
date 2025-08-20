"use client";
import MarzipanoViewer from "../components/MarzipanoViewer";

export default function ListingPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🏡 Velkommen til boligvisningen
      </h1>
      <p style={{ textAlign: "center", marginBottom: "20px" }}>
        Bla deg rundt i panoramaet under 👇
      </p>

      <MarzipanoViewer />
    </div>
  );
}
