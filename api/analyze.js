export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { conversation, apiKey } = req.body;
  if (!conversation || !apiKey) return res.status(400).json({ error: 'Faltan datos' });

  const prompt = `Eres el motor de análisis de AgenteCRM. Analiza esta conversación de ventas y responde SOLO en JSON válido, sin texto extra ni markdown:
{
  "status": "hot|warm|cold",
  "status_razon": "frase corta",
  "resumen": "1-2 oraciones sobre la situación",
  "intencion": "qué quiere realmente el prospecto",
  "objeciones": ["objeción 1", "objeción 2"],
  "siguiente": "acción concreta para HOY",
  "mensaje": "mensaje de WhatsApp listo para enviar"
}

Conversación:
${conversation}`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1000,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await response.json();
    if (data.error) return res.status(400).json({ error: data.error.message });

    const raw = data.content[0].text.replace(/```json|```/g, '').trim();
    const parsed = JSON.parse(raw);
    return res.status(200).json(parsed);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
