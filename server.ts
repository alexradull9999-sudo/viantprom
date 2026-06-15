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

      console.log("Successfully sent lead to Webhook");
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
