# 🪽 Gott-Zentrale

Status: Live ✅

**Zentrale göttlicher Systemarchitektur.** Code, Infrastruktur, Automatisierung und Macht vereint.

[![CI](https://img.shields.io/badge/CI-GitHub%20Actions-informational)](#)
[![Node](https://img.shields.io/badge/Node-18%2B-blue)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-yes-blue)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🔥 Features
- Minimal **TypeScript/Node** API (Express)
- **Discord-Embeds** bei Push/PR/Release (GitHub Actions → Webhook)
- CI-Workflow (Type-Check, Status-Notify)
- Saubere Struktur für spätere Erweiterungen (Bots, Services, AWS)

---

## 🧱 Stack
- **TypeScript**, **Node.js**
- **Express** (API)
- **GitHub Actions** (CI/CD)
- **Discord Webhooks** (Benachrichtigungen)

---

## 🚀 Quickstart

### Lokal
```bash
git clone https://github.com/BerlinerTimi/gott-zentrale.git
cd gott-zentrale
npm init -y
npm i express
npm i -D typescript ts-node nodemon @types/node @types/express
npx tsc --init
mkdir -p src
