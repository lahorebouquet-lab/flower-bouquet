import { defineField, defineType } from 'sanity'

export const areaPageType = defineType({
  name: 'areaPage',
  title: 'Area Delivery Pages',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'e.g. Flower Delivery in Lake City Lahore',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      description: 'Must match the page folder, e.g. lake-city for /delivery-areas/lake-city',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'areaName',
      title: 'Area Display Name',
      type: 'string',
      description: 'e.g. Lake City',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'deliveryFee',
      title: 'Delivery Fee',
      type: 'string',
      description: 'e.g. Rs. 500 (or Free)',
      initialValue: 'Rs. 300',
    }),
    defineField({
      name: 'deliveryTime',
      title: 'Delivery Time',
      type: 'string',
      description: 'e.g. 3–4 hours',
      initialValue: '2–3 hours',
    }),
    defineField({
      name: 'intro',
      title: 'Intro Paragraph',
      type: 'text',
      rows: 4,
      description: 'Hero intro shown under the H1. Shown on the live page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'landmarks',
      title: 'Coverage / Landmarks',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Sectors, blocks, markets, mosques, schools the page mentions.',
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3, validation: (Rule) => Rule.required() },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
      description: 'Shown as FAQ accordion + FAQPage schema for Google.',
      validation: (Rule) => Rule.min(3),
    }),
    defineField({
      name: 'nearbyAreas',
      title: 'Nearby Areas (cross-links)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Area Name', type: 'string' },
            { name: 'slug', title: 'Page Slug', type: 'string', description: 'e.g. dha (links to /delivery-areas/dha)' },
          ],
          preview: { select: { title: 'name', subtitle: 'slug' } },
        },
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title (meta)',
      type: 'string',
      description: 'Shown in Google results. Keep under 60 characters.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description (meta)',
      type: 'text',
      rows: 2,
      description: 'Shown in Google results. Keep under 160 characters.',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'deliveryFee' },
  },
})
