<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stort hus i Sandnes</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        background-color: #fffaf7;
        margin: 0;
        padding: 0;
        color: #1a1a1a;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
      }
      h1 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }
      h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
        color: #333;
      }
      p {
        font-size: 1rem;
        color: #444;
        margin-bottom: 1.5rem;
      }
      .cta-button {
        background-color: #ff4081;
        color: white;
        border: none;
        padding: 12px 24px;
        font-size: 1rem;
        border-radius: 10px;
        cursor: pointer;
      }
      .hero-image {
        width: 100%;
        border-radius: 10px;
        margin: 20px 0;
      }
      .amenities {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        text-align: left;
        margin-top: 30px;
        font-size: 1.1rem;
      }
      .amenities i {
        margin-right: 10px;
      }
      .gallery {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 30px;
      }
      .gallery img {
        width: 32%;
        border-radius: 10px;
        object-fit: cover;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Stort hus i ypperlig beliggenhet</h1>
      <h2>Bright and modern house in Sandnes</h2>
      <p>
        God plass, moderne båt basse og nydelig utsikt. Perfekt for familier, par og mindre grupper — strid pass typ..
      </p>
      <button class="cta-button">Ve søg aupris</button>
      <img src="/public/bil-rom.jpg" alt="Hjemmekino bilrom" class="hero-image" />

      <div class="amenities">
        <div><i>💬</i> Hjemmekino</div>
        <div><i>📶</i> Hiu speed internet</div>
        <div><i>⛰️</i> Utsabt</div>
        <div><i>🎛️</i> Hurrig Wifi</div>
        <div><i>🍴</i> Fulti kjøkken</div>
        <div><i>❌</i> Fultii kjøkken</div>
      </div>

      <h2>Galleri</h2>
      <div class="gallery">
        <img src="/public/1.avif" alt="Galleri bilde 1" />
        <img src="/public/2.avif" alt="Galleri bilde 2" />
        <img src="/public/3.avif" alt="Galleri bilde 3" />
      </div>
    </div>
  </body>
</html>
