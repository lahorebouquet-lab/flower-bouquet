import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
});

async function main() {
  const doc = await client.getDocument('6ad8a4e9-5741-49ac-9217-3527e23b48f0');
  console.log('Doc details:', JSON.stringify(doc, null, 2));
}

main().catch(console.error);
