import { defineField, defineType } from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category & Department',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department / Section',
      type: 'string',
      options: {
        list: [
          { title: 'Bouquets & Florals', value: 'bouquets' },
          { title: 'Special Occasions', value: 'occasions' },
          { title: 'Cakes, Gifts & Accessories', value: 'gifts' },
          { title: 'Scents & Perfumes', value: 'scents' },
          { title: 'Wedding & Event Décor', value: 'decor' },
          { title: 'Delivery Areas (Lahore)', value: 'delivery' },
        ],
      },
      initialValue: 'bouquets',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline / Subtitle',
      type: 'string',
      placeholder: 'e.g. Fresh seasonal florals tied daily',
    }),
    defineField({
      name: 'itemCount',
      title: 'Item Count or Styles Info',
      type: 'string',
      placeholder: 'e.g. 24+ Styles, 15+ Varieties',
    }),
    defineField({
      name: 'badge',
      title: 'Highlight Badge',
      type: 'string',
      placeholder: 'e.g. Hot, Bestseller, Trending, Midnight, Special',
    }),
    defineField({
      name: 'href',
      title: 'Website Link / Route',
      type: 'string',
      placeholder: 'e.g. /bouquets, /roses, /occasions/birthday',
    }),
    defineField({
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      subtitle: 'tagline',
      media: 'image',
    },
    prepare({ title, department, subtitle, media }) {
      const deptLabel = department ? `[${department.toUpperCase()}] ` : ''
      return {
        title: `${deptLabel}${title}`.trim(),
        subtitle: subtitle || 'Active Category',
        media,
      }
    },
  },
})
