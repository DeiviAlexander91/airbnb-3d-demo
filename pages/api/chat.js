// pages/api/chat.js

export default async function handler(req, res) {
  const { messages } = req.body;  // Array av { role: 'user'|'assistant', content }

  // Flat ut til prompt
  const prompt = messages
    .map((m) => `${m.role === "user" ? "Bruker" : "AI"}: ${m.content}`)
    .join("\n") + "\nAI:";

  try {
    const hfRes = await fetch(
      "https://api-inference.huggingface.co/models/facebook/blenderbot-small-90M",
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
    if (!hfRes.ok || !data.generated_text) {
      console.error("HF-feil:", data);
      return res.status(500).json({ error: "HuggingFace API-feil", details: data });
    }
    return res.status(200).json({ reply: data.generated_text.trim() });
  } catch (err) {
    console.error("Server-error:", err);
    return res.status(500).json({ error: err.message });
  }
}
