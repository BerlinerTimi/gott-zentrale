import express from "express";
const app = express();
app.get("/", (_req, res) => res.send("🪽 Gott-Zentrale online"));
app.listen(3000, () => console.log("Server läuft auf Port 3000"));
