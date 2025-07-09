<!DOCTYPE html>
<html lang="no">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Eksklusiv enebolig med panoramautsikt i Sandnes</title>
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
      .cta-link {
        display: inline-block;
        margin: 30px auto;
        padding: 12px 30px;
        font-size: 1em;
        background-color: #ff4f9b;
        color: white;
        border-radius: 25px;
        text-decoration: none;
        text-align: center;
        transition: background-color 0.3s ease;
      }
      .cta-link:hover {
        background-color: #e8438b;
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
      <h1>Velkommen til ditt drømmehjem i Sandnes</h1>
      <p class="description">
        Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig –
        perfekt for familier, par og venner.
      </p>

      <h2>Grill nights, firelight and views – make yourself at home</h2>
      <p class="description" style="font-style: italic; color: #666;">
        Cozy fire nights, scenic views and room to relax – everything you need
        for a memorable stay.
      </p>

      <!-- CTA-knapp -->
      <div style="text-align: center;">
        <a
          href="https://www.airbnb.no/rooms/1282008856141933433"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-link"
        >
          Start ferien din her
        </a>
      </div>

      <!-- Bilde (hvis ønsket) -->
      <div class="hero">
        <img src="/bilseng.jpg" alt="bilseng" />
      </div>

      <div class="amenities">
        <div class="amenity">🎬 Hjemmekino</div>
        <div class="amenity">📶 High speed internet</div>
        <div class="amenity">⚡️ Utsikt</div>
        <div class="amenity">💪 Hurtig Wifi</div>
        <div class="amenity">🍽 Fullt kjøkken</div>
        <div class="amenity">🛏 Komfortable senger</div>
      </div>

      <h2>Galleri</h2>
      <div class="gallery">
        <img src="/utsikt1.jpg" alt="utsikt 1" />
        <img src="/utsikt2.jpg" alt="utsikt 2" />
        <img src="/utsikt3.jpg" alt="utsikt 3" />
      </div>
    </div>
  </body>
</html>
