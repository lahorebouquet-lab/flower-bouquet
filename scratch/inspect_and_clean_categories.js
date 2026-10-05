import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'hgqfqfmw',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function main() {
  const cats = await client.fetch('*[_type == "category"]{_id, title, department, slug, href}');
  console.log(`Total: ${cats.length}`);
  for (const c of cats) {
    console.log(`ID: ${c._id} | Title: "${c.title}" | Dept: ${c.department} | Href: ${c.href}`);
  }
}

main().catch(console.error);
