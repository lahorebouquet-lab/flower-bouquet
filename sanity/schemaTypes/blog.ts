import { defineField, defineType } from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog & Floral Guides',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL path)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Excerpt / Summary',
      type: 'text',
      rows: 3,
      description: 'Displayed on blog cards and used for Google SEO meta description.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Category / Tag',
      type: 'string',
      options: {
        list: [
          { title: 'Flower Care & Freshness', value: 'Flower Care' },
          { title: 'Occasions & Gifting Guide', value: 'Occasions Guide' },
          { title: 'Gifting Trends & Money Bouquets', value: 'Gifting Trends' },
          { title: 'Wedding & Bridal Décor', value: 'Wedding & Bridal' },
          { title: 'Roses & Flower Meanings', value: 'Flower Meaning' },
          { title: 'Lahore Floristry & Culture', value: 'Lahore Floristry' },
          { title: 'Price Guide', value: 'Price Guide' },
        ],
      },
      initialValue: 'Flower Care',
    }),
    defineField({
      name: 'mainImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'readTime',
      title: 'Estimated Read Time',
      type: 'string',
      placeholder: 'e.g. 4 min read',
      initialValue: '4 min read',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'date',
      initialValue: () => new Date().toISOString().split('T')[0],
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      initialValue: 'Lahore Bouquet Master Florist',
    }),
    defineField({
      name: 'body',
      title: 'Article Content (Rich Text)',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 2', value: 'h2' },
            { title: 'Heading 3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet List', value: 'bullet' },
            { title: 'Numbered List', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong / Bold', value: 'strong' },
              { title: 'Emphasis / Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text (for SEO)',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs (shown with Google FAQ schema)',
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
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on top of Blog Page?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tag: 'tag',
      date: 'publishedAt',
      media: 'mainImage',
    },
    prepare({ title, tag, date, media }) {
      const tagLabel = tag ? `[${tag}] ` : ''
      return {
        title: `${tagLabel}${title}`,
        subtitle: date ? `Published: ${date}` : 'Draft',
        media,
      }
    },
  },
})
