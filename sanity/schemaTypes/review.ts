import { defineField, defineType } from 'sanity'

export const reviewType = defineType({
  name: 'review',
  title: 'Customer Review',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location (e.g. DHA Phase 5, Gulberg III)',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (Stars)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
    defineField({
      name: 'comment',
      title: 'Review Comment',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bouquet',
      title: 'Bouquet Ordered (e.g. 36 Velvet Roses)',
      type: 'string',
    }),
    defineField({
      name: 'verified',
      title: 'Verified Buyer?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      description:
        'Only "Approved" reviews appear on the website. Website form submissions arrive as "Pending" — check them, then approve to publish.',
      type: 'string',
      options: {
        list: [
          { title: 'Pending (not on website)', value: 'pending' },
          { title: 'Approved (shown on website)', value: 'approved' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'source',
      title: 'Source',
      description: 'Where this review came from (website form, Google, added manually).',
      type: 'string',
      options: {
        list: [
          { title: 'Website form', value: 'website' },
          { title: 'Google', value: 'google' },
          { title: 'Added manually', value: 'manual' },
        ],
      },
    }),
    defineField({
      name: 'reviewDate',
      title: 'Review Date (optional, shown on website)',
      type: 'date',
    }),
    defineField({
      name: 'photo',
      title: 'Customer Photo (optional)',
      type: 'image',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      rating: 'rating',
      location: 'location',
      bouquet: 'bouquet',
      status: 'status',
    },
    prepare({ title, rating, location, bouquet, status }) {
      const stars = '★'.repeat(rating || 5);
      const state = status === 'approved' ? '✅ Approved' : '⏳ Pending';
      const sub = [state, location, bouquet].filter(Boolean).join(' • ');
      return {
        title: `${title} (${stars})`,
        subtitle: sub,
      }
    },
  },
})
