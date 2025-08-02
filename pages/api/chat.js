// pages/api/chat.js

export default async function handler(req, res) {
  const { messages } = req.body;  

  // Bygg chat-historikken for OpenRouter
  const chatMessages = [
    {
      role: "system",
      content:
        "Du er DeiviBot, en hjelpsom AI-vert for et feriehus i Sandnes. " +
        "Svar kort, på norsk, gi tips om fasiliteter og lokale attraksjoner."
    },
    ...messages.map((m) => ({
      role: m.from === "bot" ? "assistant" : "user",
      content: m.text
    }))
  ];

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: chatMessages,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("OpenRouter feilet:", response.status, body);
      return res.status(500).json({ error: "OpenRouter API-feil", details: body });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) throw new Error("Ingen melding fra OpenRouter");

    return res.status(200).json({ reply });
  } catch (err) {
    console.error("chat.js error:", err);
    return res.status(500).json({ error: err.message });
  }
}
