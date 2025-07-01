export async function GET() {
  const data = {
    name: "NextJS Task 02",
    description: "Aula NextJS do zero!",
    version: "1.0.0",
  };
  return new Response(JSON.stringify(data, null, 2), {
    headers: { "Content-Type": "application/json" },
  });
}
