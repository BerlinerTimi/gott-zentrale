// Node 18+ hat global fetch
const HOOK_URL = process.env.HOOK_URL!;
if (!HOOK_URL) {
  console.error("HOOK_URL env fehlt");
  process.exit(0);
}

type Field = { name: string; value: string; inline?: boolean };

async function postEmbed(title: string, description: string, color: number, fields: Field[] = []) {
  const payload = { embeds: [{ title, description, color, fields, timestamp: new Date().toISOString() }] };
  const res = await fetch(HOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
  console.log("Discord HTTP:", res.status); // 204 = OK
}

async function main() {
  const repo = "BerlinerTimi/gott-zentrale";
  const commit = "HEAD"; // ersetze bei Bedarf
  const commitUrl = `https://github.com/${repo}/commit/${commit}`;
  const runUrl = `https://github.com/${repo}/actions`;

  await postEmbed(
    "📣 System-Info",
    "Eigenes Embed aus TypeScript",
    0x7289da, // blau
    [
      { name: "Repo", value: `[${repo}](https://github.com/${repo})`, inline: true },
      { name: "Commit", value: `[${commit}](${commitUrl})`, inline: true },
      { name: "Actions", value: `[Runs](${runUrl})`, inline: true },
    ]
  );
}

main().catch(console.error);
