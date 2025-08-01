// pages/api/chat.js

export default async function handler(req, res) {
  const { messages } = req.body; // array av { role, content }

  // System-prompt + flatten samtale
  const systemPrompt =
    "Du er DeiviBot, en vennlig og hjelpsom AI-vert for et feriehus i Sandnes. " +
    "Svar kort, på norsk, gi tips om fasiliteter, lokale attraksjoner og reiseveier.";

  const conversation = messages
    .map(m => `${m.role === "user" ? "Bruker" : "AI"}: ${m.content.trim()}`)
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
    const data = await hfRes.json();

    // Håndter begge tilfeller: objekt eller liste
    let reply;
    if (data.generated_text) {
      reply = data.generated_text;
    } else if (Array.isArray(data) && data[0]?.generated_text) {
      reply = data[0].generated_text;
    } else {
      console.error("Uventet HF-respons:", data);
      return res.status(500).json({ error: "Ingen gyldig respons fra AI" });
    }

    return res.status(200).json({ reply: reply.trim() });
  } catch (err) {
    console.error("API-error:", err);
    return res.status(500).json({ error: "Feil i chat-API" });
  }
}
