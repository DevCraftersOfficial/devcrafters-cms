import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'table',
  title: 'Table',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Table Caption',
      type: 'string',
      description: 'A short description shown above or below the table',
    }),
    defineField({
      name: 'hasHeader',
      title: 'First Row as Header',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      of: [
        defineType({
          type: 'object',
          name: 'tableRow',
          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [
                defineType({
                  name: 'cellContent',
                  title: 'Cell Content',
                  type: 'array',
                  of: [
                    {type: 'block'},
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
      validation: Rule => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      caption: 'caption',
    },
    prepare({caption}) {
      return {
        title: caption ? `Table: ${caption}` : 'Table',
      }
    },
  },
})
