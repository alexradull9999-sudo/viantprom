import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const leadData = req.body;
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    const missing = !botToken ? 'TELEGRAM_BOT_TOKEN' : 'TELEGRAM_CHAT_ID';
    console.error(`Missing environment variable: ${missing}`);
    return res.status(500).json({ error: `Backend configuration error: Missing ${missing}. Please check your Secrets/Environment Variables.` });
  }

  try {
    const message = `
<b>🚀 Новая заявка ВИАНТПРОМ</b>

<b>📌 Данные:</b>
- Категория: ${leadData.category || 'Не указано'}
- Характеристики: ${leadData.option || 'Не указано'}
- Срочность: ${leadData.urgency || 'Не указано'}
- Продукт: ${leadData.productCategory || 'Не указано'}
- Бюджет: ${leadData.budget || 'Не указано'}
- Мессенджер: ${leadData.messenger || 'Не указано'}
- Сырье: ${leadData.rawMaterial || 'Не указано'}
- Упаковка: ${leadData.packagingType || 'Не указано'}
- Производительность: ${leadData.productivity || 'Не указано'}
- Покрытие: ${leadData.coatingType || 'Не указано'}

<b>👤 Контакты:</b>
- Имя: ${leadData.name || leadData.contactName || 'Не указано'}
- Телефон: ${leadData.phone || 'Не указано'}
    `;

    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Telegram API Error:", errorData);
      return res.status(502).json({ error: `Telegram Error: ${errorData.description || 'Unknown'}` });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error processing lead:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
