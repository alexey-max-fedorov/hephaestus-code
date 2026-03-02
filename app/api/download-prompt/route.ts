export async function GET() {
  const res = await fetch(
    "https://raw.githubusercontent.com/alexey-max-fedorov/perplexity-code/main/SYSTEM_PROMPT.md"
  );
  const content = await res.text();

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="SYSTEM_PROMPT.md"',
    },
  });
}
