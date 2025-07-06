<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Stor enebolig i Sandnes</title>
    <style>
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #fff9f7;
        color: #111;
      }
      .container {
        max-width: 1000px;
        margin: auto;
        padding: 20px;
      }
      h1 {
        font-size: 2.5em;
        font-weight: bold;
        text-align: center;
      }
      h2 {
        font-size: 1.6em;
        text-align: center;
        margin-top: 0.2em;
      }
      p.description {
        text-align: center;
        font-size: 1em;
        margin: 0.5em auto 2em;
        max-width: 700px;
      }
      .cta-button {
        display: block;
        margin: 0 auto 2em;
        padding: 12px 30px;
        font-size: 1em;
        background-color: #ff4f9b;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        text-decoration: none;
        text-align: center;
      }
      .hero img {
        width: 100%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 30px;
      }
      .amenities {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 15px;
        text-align: center;
        margin-bottom: 40px;
      }
      .amenity {
        font-size: 1em;
      }
      .gallery {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
      }
      .gallery img {
        width: calc(33.33% - 10px);
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
      <h1>Stor enebolig i Sandnes</h1>
      <h2>Utforsk boligen i 3D!</h2>
      <p class="description">
        Opplev komfort og moderne fasiliteter – med hjemmekino, treningsrom og solrik uteplass. Perfekt for familier, par og små grupper!
      </p>
      <a class="cta-button" href="https://matterport-link-her" target="_blank">
        Gå til 3D-visning
      </a>

      <div class="hero">
        <img src="/bil-rom.jpg" alt="Bilrom" />
      </div>

      <div class="amenities">
        <div class="amenity">🎬 Hjemmekino</div>
        <div class="amenity">💪 Fullt utstyrt treningsrom</div>
        <div class="amenity">🌞 Utsikt og solrik uteplass</div>
        <div class="amenity">🍽 Moderne kjøkken</div>
        <div class="amenity">📶 Høyhastighetsinternett</div>
        <div class="amenity">🛏 Komfortable sengeplasser</div>
      </div>

      <h2>Galleri</h2>
      <div class="gallery">
        <img src="/1.avif" alt="Galleri 1" />
        <img src="/2.avif" alt="Galleri 2" />
        <img src="/3.avif" alt="Galleri 3" />
      </div>
    </div>
  </body>
</html>


