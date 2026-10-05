import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'hgqfqfmw',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function main() {
  const cats = await client.fetch('*[_type == "category"] | order(order asc) {_id, title, department, slug, href}');
  console.log('Total categories in Sanity:', cats.length);
  cats.forEach((c, i) => console.log(`${i+1}. [${c.department}] ${c.title} -> ${c.href || c.slug?.current}`));
}

main().catch(console.error);
