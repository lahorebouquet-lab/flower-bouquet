import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'hgqfqfmw',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function main() {
  const p = await client.fetch('count(*[_type == "product"])');
  const c = await client.fetch('count(*[_type == "category"])');
  const r = await client.fetch('count(*[_type == "review"])');
  const b = await client.fetch('count(*[_type == "blog"])');
  console.log('Sanity Document Counts:', {
    'Products': p,
    'Categories': c,
    'Reviews': r,
    'Blog Posts': b,
  });
}

main().catch(console.error);
