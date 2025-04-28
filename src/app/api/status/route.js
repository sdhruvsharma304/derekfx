export async function GET() {
  return new Response(JSON.stringify({
    status: 'success',
    message: 'API is working correctly',
    timestamp: new Date().toISOString()
  }), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
