import {defineType} from 'sanity'

export default defineType({
  name: 'callout',
  title: 'Callout',
  type: 'object',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Info', value: 'info'},
          {title: 'Warning', value: 'warning'},
          {title: 'Tip', value: 'tip'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'body',
      title: 'Callout Content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      type: 'type',
    },
    prepare({type}) {
      return {
        title: `Callout - ${type}`,
      }
    },
  },
})
