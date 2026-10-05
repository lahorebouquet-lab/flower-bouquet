async function testRoutes() {
  const routes = [
    'http://localhost:3000/',
    'http://localhost:3000/bouquets',
    'http://localhost:3000/roses',
    'http://localhost:3000/products/lahore-signature-royale-dutch-roses',
    'http://localhost:3000/studio'
  ];
  for (const url of routes) {
    try {
      const res = await fetch(url);
      console.log(`[${res.status}] ${url}`);
    } catch (e) {
      console.error(`Failed ${url}:`, e.message);
    }
  }
}
testRoutes();
