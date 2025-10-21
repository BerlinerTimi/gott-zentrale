// tools/post-to-webhook.mjs
const HOOK_URL = process.env.HOOK_URL;
if (!HOOK_URL) {
  console.error("HOOK_URL env fehlt");
  process.exit(1);
}

const payload = {
  embeds: [{
    title: "📣 System-Info",
    description: "Post aus reinem Node.js (ohne ts-node)",
    color: 0x7289da,
    timestamp: new Date().toISOString()
  }]
};

const res = await fetch(HOOK_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
});
console.log("Discord HTTP:", res.status); // 204 = OK
