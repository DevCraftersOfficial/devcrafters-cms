import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'code',
  title: 'Code Block',
  type: 'object',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          {title: 'JavaScript', value: 'javascript'},
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'React (JSX)', value: 'jsx'},
          {title: 'Go', value: 'go'},
          {title: 'Python', value: 'python'},
          {title: 'Shell', value: 'bash'},
          {title: 'Tailwind CSS', value: 'tailwind'},
          {title: 'Markdown', value: 'markdown'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'code',
      title: 'Code',
      type: 'text',
      rows: 10,
    }),
    defineField({
      name: 'filename',
      title: 'Filename (optional)',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      language: 'language',
      filename: 'filename',
    },
    prepare({language, filename}) {
      return {
        title: filename || 'Code Block',
        subtitle: language || 'Unknown language',
      }
    },
  },
})
