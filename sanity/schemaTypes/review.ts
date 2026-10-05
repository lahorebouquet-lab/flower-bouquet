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
  ],
  preview: {
    select: {
      title: 'name',
      rating: 'rating',
      location: 'location',
      bouquet: 'bouquet',
    },
    prepare({ title, rating, location, bouquet }) {
      const stars = '★'.repeat(rating || 5);
      const sub = [location, bouquet].filter(Boolean).join(' • ');
      return {
        title: `${title} (${stars})`,
        subtitle: sub,
      }
    },
  },
})
