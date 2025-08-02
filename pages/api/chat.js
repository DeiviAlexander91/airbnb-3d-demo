// pages/api/chat.js

export default async function handler(req, res) {
  const { messages } = req.body;  // Array av { role, content }

  // Flat ut historikken til én streng
  const prompt =
    messages
      .map((m) => `${m.role === "user" ? "Bruker" : "AI"}: ${m.content}`)
      .join("\n") +
    "\nAI:";

  try {
    const modelUrl = "https://api-inference.huggingface.co/models/gpt2";

    const hfRes = await fetch(modelUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_length: 100 },
      }),
    });

    const text = await hfRes.text();

    if (!hfRes.ok) {
      console.error("HF-feil:", hfRes.status, text);
      return res.status(hfRes.status).json({ error: text.trim() });
    }

    // Parse JSON, fallback til tom tekst hvis ikke parsebar
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Ugyldig JSON fra HF:", text);
      return res.status(500).json({ reply: text.trim() });
    }

    // data kan enten være en array eller objekt
    const generated =
      Array.isArray(data) && data[0]?.generated_text
        ? data[0].generated_text
        : data.generated_text || "";

    return res.status(200).json({ reply: generated.trim() });
  } catch (err) {
    console.error("Server-error:", err);
    return res.status(500).json({ error: err.message });
  }
}
