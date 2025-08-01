// pages/api/chat.js

export default async function handler(req, res) {
  const { messages } = req.body;   // [{ role, content }, ...]

  // Start alltid med en tydelig system-prompt
  const payload = [
    {
      role: "system",
      content:
        "Du er DeiviBot, en vennlig og hjelpsom AI-vert for et feriehus i Sandnes. " +
        "Svar kort, på norsk, gi tips om fasiliteter, lokale attraksjoner og reiseveier."
    },
    ...messages
  ];

  try {
    const hfRes = await fetch(
      "https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ inputs: payload }),
      }
    );

    const data = await hfRes.json();

    if (Array.isArray(data) && data[0]?.generated_text) {
      res.status(200).json({ reply: data[0].generated_text });
    } else {
      console.error("Ingen gyldig respons fra HF:", data);
      res.status(500).json({ error: "Ingen gyldig respons fra AI" });
    }
  } catch (err) {
    console.error("API-error:", err);
    res.status(500).json({ error: "Feil i chat-API" });
  }
}
