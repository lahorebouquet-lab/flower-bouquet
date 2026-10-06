import { defineField, defineType } from 'sanity'

/**
 * Abandoned carts — visitors who added items to cart (and optionally
 * entered their phone at checkout) but never placed the order.
 * The owner follows up via WhatsApp with a 10% discount (WELCOME10).
 */
export const abandonedCartType = defineType({
  name: 'abandonedCart',
  title: 'Abandoned Carts',
  type: 'document',
  fields: [
    defineField({
      name: 'phone',
      title: 'Phone / WhatsApp',
      type: 'string',
      description: 'Sender phone captured at checkout (if provided).',
    }),
    defineField({ name: 'name', title: 'Name', type: 'string' }),
    defineField({
      name: 'itemsSummary',
      title: 'Cart Summary',
      type: 'string',
      description: 'e.g. "2x Red Rose Bouquet, 1x Chocolate Box"',
    }),
    defineField({ name: 'itemCount', title: 'Item Count', type: 'number' }),
    defineField({ name: 'cartValue', title: 'Cart Value (Rs)', type: 'number' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Recovered (ordered)', value: 'recovered' },
          { title: 'Ignored', value: 'ignored' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'new',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'abandonedAt',
      title: 'Abandoned At',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'adminNotes', title: 'Admin Notes', type: 'text', rows: 2 }),
  ],
  preview: {
    select: {
      title: 'phone',
      subtitle: 'itemsSummary',
      description: 'status',
    },
    prepare({ title, subtitle, description }) {
      return {
        title: title || '(no phone)',
        subtitle: subtitle || '',
        description: `Status: ${description || 'new'}`,
      }
    },
  },
})
