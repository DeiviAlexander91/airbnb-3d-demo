// pages/api/chat.js

export default async function handler(req, res) {
  const { messages } = req.body; // array av { role: "user"|"assistant", content: string }

  // 1) System-prompt
  const systemPrompt = 
    "Du er DeiviBot, en vennlig og hjelpsom AI-vert for et feriehus i Sandnes. " +
    "Svar kort, på norsk, gi tips om fasiliteter, lokale attraksjoner og reiseveier.";

  // 2) Flatten samtalen til én streng
  const conversation = messages
    .map((m) => {
      const speaker = m.role === "user" ? "Bruker" : "AI";
      return `${speaker}: ${m.content.trim()}`;
    })
    .join("\n");

  // 3) Legg på en avsluttende AI-indikator
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

    if (Array.isArray(data) && data[0]?.generated_text) {
      // Hugging Face response ligger i data[0].generated_text
      const reply = data[0].generated_text.trim();
      return res.status(200).json({ reply });
    } else {
      console.error("Uventet HF-svar:", data);
      return res.status(500).json({ error: "Ingen gyldig respons fra AI" });
    }
  } catch (err) {
    console.error("API-error:", err);
    return res.status(500).json({ error: "Feil i chat-API" });
  }
}
