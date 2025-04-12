import {defineType} from 'sanity'

export default defineType({
  name: 'collapsible',
  title: 'Collapsible Section',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({title}) {
      return {
        title: `Collapsible: ${title}`,
      }
    },
  },
})
