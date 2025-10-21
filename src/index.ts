import express from "express";
const app = express();

app.get("/", (_req, res) => res.send("🪽 Gott-Zentrale online"));
app.get("/health", (_req, res) => res.json({ status: "ok", time: Date.now() }));

const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

