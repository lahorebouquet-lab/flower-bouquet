import { defineField, defineType } from 'sanity'

/**
 * Gift reminders — customers save birthdays/anniversaries so the owner
 * can send a WhatsApp reminder 2 days before (with a bouquet suggestion).
 * Dates recur annually (month/day).
 */
export const giftReminderType = defineType({
  name: 'giftReminder',
  title: 'Gift Reminders',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Customer WhatsApp',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'personName',
      title: 'Person Name',
      type: 'string',
      description: 'Whose birthday/anniversary is it?',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'occasion',
      title: 'Occasion',
      type: 'string',
      options: {
        list: [
          { title: 'Birthday', value: 'birthday' },
          { title: 'Anniversary', value: 'anniversary' },
          { title: "Mother's Day", value: 'mothers-day' },
          { title: "Father's Day", value: 'fathers-day' },
          { title: "Valentine's Day", value: 'valentines-day' },
          { title: 'Other', value: 'other' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'birthday',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'month',
      title: 'Month (1-12)',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(12),
    }),
    defineField({
      name: 'day',
      title: 'Day (1-31)',
      type: 'number',
      validation: (rule) => rule.required().min(1).max(31),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Paused', value: 'paused' },
        ],
        layout: 'dropdown',
      },
      initialValue: 'active',
    }),
    defineField({ name: 'adminNotes', title: 'Admin Notes', type: 'text', rows: 2 }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastRemindedAt',
      title: 'Last Reminded At',
      type: 'datetime',
      description: 'When the owner last sent the reminder for the most recent occurrence.',
    }),
  ],
  preview: {
    select: {
      title: 'personName',
      subtitle: 'occasion',
      month: 'month',
      day: 'day',
    },
    prepare({ title, subtitle, month, day }) {
      return {
        title: title || '(no name)',
        subtitle: `${subtitle || ''} — ${day}/${month}`,
      }
    },
  },
})
