// pages/api/chat.js

export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const hfRes = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputs: message }),
    });

    const data = await hfRes.json();

    if (Array.isArray(data) && data[0]?.generated_text) {
      res.status(200).json({ reply: data[0].generated_text });
    } else {
      console.error("Hugging Face-feil:", data);
      res.status(500).json({ error: "Ingen gyldig respons fra Hugging Face" });
    }
  } catch (error) {
    console.error("Serverfeil:", error);
    res.status(500).json({ error: "Feil i API-kall" });
  }
}

