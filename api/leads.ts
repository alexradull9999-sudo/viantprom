import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const leadData = req.body;

  try {
    const webhookUrl = 'https://hook.eu1.make.com/onyhfuai5sqn8iv6zcwpgju8u3ljwq4i';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...leadData,
        source: 'ВИАНТПРОМ Заявка'
      }),
    });

    if (!response.ok) {
      console.error("Webhook API Error:", response.status, response.statusText);
      return res.status(502).json({ error: `Webhook Error: Failed to send data` });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error processing lead:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
