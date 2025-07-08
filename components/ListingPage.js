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
    <div class="container">-
<h1 className="text-4xl font-bold text-center">
  Velkommen til ditt drømmehjem i Sandnes
</h1>
<p className="text-center text-gray-800 mt-4 text-base">
  Nyt utsikten, bålkos og grillkvelder i en romslig og moderne enebolig – perfekt for familier, par og venner.
</p>

{/* Engelske linjer – sekundær, men elegant */}
<h2 className="text-xl font-medium text-center text-gray-700 mt-8">
  Grill nights, firelight and views – make yourself at home
</h2>
<p className="text-center text-gray-600 mt-2 text-sm italic">
  Cozy fire nights, scenic views and room to relax – everything you need for a memorable stay.
</p>
<div style={{ textAlign: 'center', marginTop: '30px' }}>
  <a
  href="https://www.airbnb.no/rooms/1282008856141933433"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 bg-pink-500 text-white text-base rounded-full hover:bg-pink-600 transition">
  Start ferien din her
</a>
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
        <img src="/utsikt1.jpg" alt="utsikt 1" />
        <img src="/utsikt2.jpg" alt="utsikt 2" />
        <img src="/utsikt3.jpg" alt="utsikt 3" />
      </div> {/* Galleri-slutt */}
 </div>
  </body>
</html>
