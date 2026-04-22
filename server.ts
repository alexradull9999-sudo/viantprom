import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(cors());

  // API endpoint for leads
  app.post("/api/leads", async (req, res) => {
    const leadData = req.body;
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID");
      return res.status(500).json({ error: "Backend configuration error" });
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

      console.log("Successfully sent lead to Telegram");
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error processing lead:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
