<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stort hus i ypperlig beliggenhet</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #fff9f7;
        color: #111;
      }
      .container {
        max-width: 900px;
        margin: auto;
        padding: 20px;
      }
      h1 {
        font-size: 2em;
        font-weight: bold;
        text-align: center;
      }
      h2 {
        font-size: 1.4em;
        text-align: center;
        margin-top: 0.2em;
      }
      p.description {
        text-align: center;
        font-size: 0.95em;
        margin: 0.5em auto 1.5em;
        max-width: 700px;
      }
      .cta-button {
        display: block;
        margin: 0 auto 1.5em;
        padding: 10px 25px;
        font-size: 1em;
        background-color: #ff4f9b;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
      }
      .hero img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 20px;
      }
      .amenities {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 15px;
        text-align: center;
        margin-bottom: 30px;
      }
      .amenity {
        font-size: 0.95em;
      }
      .gallery {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
      }
      .gallery img {
        width: calc(33% - 10px);
        height: auto;
        border-radius: 8px;
        object-fit: cover;
      }
      @media (max-width: 768px) {
        .gallery img {
          width: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Stort hus i ypperlig beliggenhet</h1>
      <h2><strong>Bright and modern house</strong> in Sandnes</h2>
      <p class="description">
        God plass, moderne båt-basse og nydelig utsikt! Perfekt for familier,
        par og mindre grupper – med badehygge, hjemmekino og moderne fasiliteter.
      </p>
      <button class="cta-button">Ve spø aupris</button>

      <div class="hero">
        <img src="/bilseng.jpg" alt="Bilrom" />
      </div>

      <div class="amenities">
        <div class="amenity">💬 Hemmekino</div>
        <div class="amenity">📶 Hiu speed internet</div>
        <div class="amenity">⚡️ Utsabt</div>
        <div class="amenity">💪 Hurrig Wifi</div>
        <div class="amenity">🍽 Fulti kjøkken</div>
        <div class="amenity">❌ Fultii kjøkken</div>
      </div>

      <h2>Galleri</h2>
      <div class="gallery">
        <img src="/utsikten1.jpg" alt="Galleri 1" />
        <img src="/utsikten2.jpg" alt="Galleri 2" />
        <img src="/utsikten3.jpg" alt="Galleri 3" />
      </div>
    </div>
  </body>
</html>

