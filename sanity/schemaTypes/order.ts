import { defineField, defineType } from 'sanity'

export const ORDER_STATUSES = [
  { title: 'Pending', value: 'pending' },
  { title: 'Confirmed', value: 'confirmed' },
  { title: 'Preparing', value: 'preparing' },
  { title: 'Out for Delivery', value: 'out-for-delivery' },
  { title: 'Delivered', value: 'delivered' },
  { title: 'Cancelled', value: 'cancelled' },
] as const

export type OrderStatus = (typeof ORDER_STATUSES)[number]['value']

export const orderType = defineType({
  name: 'order',
  title: 'Orders',
  type: 'document',
  fields: [
    defineField({
      name: 'orderId',
      title: 'Order ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ORDER_STATUSES.map((s) => ({ title: s.title, value: s.value })),
        layout: 'dropdown',
      },
      initialValue: 'pending',
      validation: (rule) => rule.required(),
    }),
    defineField({ name: 'senderName', title: 'Sender Name', type: 'string' }),
    defineField({ name: 'senderPhone', title: 'Sender WhatsApp', type: 'string' }),
    defineField({ name: 'recipientName', title: 'Recipient Name', type: 'string' }),
    defineField({ name: 'recipientPhone', title: 'Recipient Phone', type: 'string' }),
    defineField({ name: 'streetAddress', title: 'Street Address', type: 'text', rows: 2 }),
    defineField({ name: 'area', title: 'Delivery Area', type: 'string' }),
    defineField({ name: 'deliveryDate', title: 'Delivery Date', type: 'string' }),
    defineField({ name: 'deliveryTimeSlot', title: 'Time Slot', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Product', type: 'string' }),
            defineField({ name: 'slug', title: 'Slug', type: 'string' }),
            defineField({ name: 'price', title: 'Price (Rs)', type: 'number' }),
            defineField({ name: 'quantity', title: 'Qty', type: 'number' }),
            defineField({ name: 'deliveryDate', title: 'Item Delivery Date', type: 'string' }),
            defineField({ name: 'deliverySlot', title: 'Item Slot', type: 'string' }),
            defineField({ name: 'area', title: 'Item Area', type: 'string' }),
            defineField({ name: 'cardOccasion', title: 'Card Occasion', type: 'string' }),
            defineField({ name: 'recipientName', title: 'Card Recipient', type: 'string' }),
            defineField({ name: 'cardMessage', title: 'Card Message', type: 'text', rows: 2 }),
          ],
        },
      ],
    }),
    defineField({ name: 'cardOccasion', title: 'Card Occasion', type: 'string' }),
    defineField({ name: 'cardMessage', title: 'Card Message', type: 'text', rows: 2 }),
    defineField({ name: 'paymentMethod', title: 'Payment Method', type: 'string' }),
    defineField({ name: 'subtotal', title: 'Subtotal (Rs)', type: 'number' }),
    defineField({ name: 'deliveryFee', title: 'Delivery Fee (Rs)', type: 'number' }),
    defineField({ name: 'total', title: 'Total (Rs)', type: 'number' }),
    defineField({
      name: 'wantPhotoBeforeDispatch',
      title: 'Wants Photo Before Dispatch',
      type: 'boolean',
    }),
    defineField({ name: 'adminNotes', title: 'Admin Notes', type: 'text', rows: 2 }),
    defineField({ name: 'placedAt', title: 'Placed At', type: 'datetime' }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'newestFirst',
      by: [{ field: 'placedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'orderId',
      subtitle: 'senderName',
      status: 'status',
      total: 'total',
    },
    prepare({ title, subtitle, status, total }) {
      return {
        title: `#${title ?? '—'}`,
        subtitle: `${subtitle ?? ''}${total ? ` · Rs. ${Number(total).toLocaleString()}` : ''}`,
        description: status ? `Status: ${status}` : undefined,
      }
    },
  },
})
