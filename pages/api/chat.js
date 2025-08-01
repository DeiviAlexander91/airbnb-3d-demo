// pages/api/chat.js

export default async function handler(req, res) {
  const { messages } = req.body; // [{ role, content }, ...]

  // 1) System-prompt
  const systemPrompt =
    "Du er DeiviBot, en vennlig og hjelpsom AI-vert for et feriehus i Sandnes. " +
    "Svar kort, på norsk, gi tips om fasiliteter, lokale attraksjoner og reiseveier.";

  // 2) Flatten samtalen til én streng
  const conversation = messages
    .map((m) => `${m.role === "user" ? "Bruker" : "AI"}: ${m.content.trim()}`)
    .join("\n");

  const prompt = `${systemPrompt}\n\n${conversation}\nAI:`;

  try {
    const hfRes = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: prompt }),
      }
    );

    // Les rå respons
    const text = await hfRes.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (parseErr) {
      console.error("Ikke-JSON respons fra HF:", text);
      return res
        .status(500)
        .json({ error: "Non-JSON response from HF", details: text });
    }

    console.log("HF-status:", hfRes.status, "HF-data:", data);

    // Håndter feilstatus
    if (!hfRes.ok) {
      return res
        .status(500)
        .json({ error: "HF API error", status: hfRes.status, details: data });
    }

    // Finn generert tekst
    const reply =
      data.generated_text ??
      (Array.isArray(data) && data[0]?.generated_text) ??
      null;

    if (!reply) {
      console.error("Ingen generated_text funnet i respons:", data);
      return res
        .status(500)
        .json({ error: "Ingen generated_text i HF-respons", details: data });
    }

    return res.status(200).json({ reply: reply.trim() });
  } catch (err) {
    console.error("Uventet feil i API-ruta:", err);
    return res.status(500).json({ error: "Unexpected error", details: err.message });
  }
}

