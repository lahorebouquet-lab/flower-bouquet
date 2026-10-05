import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Bouquet & Product',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
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
      name: 'price',
      title: 'Price (PKR)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'oldPrice',
      title: 'Original / Old Price (PKR)',
      type: 'number',
    }),
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      placeholder: 'e.g. Signature, Best Seller, New, Save 20%',
    }),
    defineField({
      name: 'badgeType',
      title: 'Badge Style / Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hot / Signature (Red/Burgundy)', value: 'hot' },
          { title: 'Best Seller (Amber/Gold)', value: 'bestseller' },
          { title: 'Save / Discount (Emerald)', value: 'save' },
          { title: 'New Arrival (Indigo/Blue)', value: 'new' },
          { title: 'Customer Favorite (Pink/Rose)', value: 'favorite' },
          { title: 'Promotion / Special (Purple)', value: 'promotion' },
        ],
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Bouquets (Hand-Tied Bouquets)', value: 'Bouquets' },
          { title: 'Roses (Imported Dutch Roses)', value: 'Roses' },
          { title: 'Velvet Red Roses', value: 'Velvet Red Roses' },
          { title: 'Pure White Roses', value: 'Pure White Roses' },
          { title: 'Sunflowers & Mixed Blooms', value: 'Sunflowers' },
          { title: 'Money Bouquets (Custom Cash)', value: 'Money Bouquets' },
          { title: 'Crochet (Handmade Eternal)', value: 'Crochet' },
          { title: 'Dried (Everlasting Florals)', value: 'Dried' },
          { title: 'Flower Boxes & Baskets', value: 'Flower Boxes' },
          { title: 'Chocolate Bouquets', value: 'Chocolate Bouquets' },
          { title: 'Wedding Décor (Car & Room Decor)', value: 'Wedding Décor' },
          { title: 'Gifts & Cakes (Bakery & Combos)', value: 'Gifts & Cakes' },
          { title: 'Birthday Cakes', value: 'Birthday Cakes' },
          { title: 'Scents & Perfumes (Attar & Fragrance)', value: 'Scents & Perfumes' },
          { title: 'Fresh Flower Gajray (Mehndi Jewellery)', value: 'Fresh Flower Gajray' },
          { title: 'Corporate Florals', value: 'Corporate' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryRef',
      title: 'Linked Category Document (Optional)',
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'image',
      title: 'Main Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Additional Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'desc',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'stems',
      title: 'Stems / Flower Details',
      type: 'string',
      placeholder: 'e.g. 24 Imported Dutch Red Roses & Baby\'s Breath',
    }),
    defineField({
      name: 'occasion',
      title: 'Occasions (Select all that apply)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Birthday', value: 'Birthday' },
          { title: 'Anniversary', value: 'Anniversary' },
          { title: 'Romance', value: 'Romance' },
          { title: 'Wedding', value: 'Wedding' },
          { title: 'Congratulations', value: 'Congratulations' },
          { title: 'Get Well Soon', value: 'Get Well Soon' },
          { title: 'Sympathy', value: 'Sympathy' },
          { title: 'Mother\'s Day', value: 'Mother\'s Day' },
          { title: 'Valentine\'s Day', value: 'Valentine\'s Day' },
        ],
      },
    }),
    defineField({
      name: 'rating',
      title: 'Customer Rating (e.g. 4.9)',
      type: 'number',
      initialValue: 5.0,
      validation: (Rule) => Rule.min(1).max(5),
    }),
    defineField({
      name: 'reviewCount',
      title: 'Total Reviews Count',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'inStock',
      title: 'In Stock for Same-day Lahore Delivery?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `PKR ${subtitle.toLocaleString()}` : '',
        media,
      }
    },
  },
})
