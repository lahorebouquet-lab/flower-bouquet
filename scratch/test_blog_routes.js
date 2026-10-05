async function test() {
  const urls = [
    'http://localhost:3000/blog',
    'http://localhost:3000/blog/how-to-keep-flowers-fresh-in-lahore',
    'http://localhost:3000/blog/birthday-gift-ideas-for-her-lahore',
    'http://localhost:3000/blog/imported-dutch-roses-vs-local-roses-lahore',
    'http://localhost:3000/studio',
  ];
  for (const url of urls) {
    try {
      const res = await fetch(url);
      console.log(`[${res.status}] ${url}`);
    } catch (e) {
      console.error(`Failed ${url}: ${e.message}`);
    }
  }
}
test();
