import { createClient } from 'next-sanity';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
});

async function main() {
  console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
  console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET);
  
  const allDocTypes = await client.fetch(`*[]{ _type, _id, title, "slug": slug.current }`);
  console.log('All documents count:', allDocTypes.length);
  
  const blogs = allDocTypes.filter(d => d._type === 'blog' || d._type?.toLowerCase().includes('post') || d._type?.toLowerCase().includes('blog'));
  console.log('Blog documents:', JSON.stringify(blogs, null, 2));

  const drafts = allDocTypes.filter(d => d._id?.startsWith('drafts.'));
  console.log('Draft documents:', JSON.stringify(drafts, null, 2));
}

main().catch(console.error);
