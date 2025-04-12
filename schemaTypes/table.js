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
      description: 'Optional short description of the table',
    }),
    defineField({
      name: 'hasHeader',
      title: 'First Row is Header',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'rows',
      title: 'Table Rows',
      type: 'array',
      of: [
        defineType({
          name: 'tableRow',
          title: 'Row',
          type: 'object',
          fields: [
            defineField({
              name: 'cells',
              title: 'Cells',
              type: 'array',
              of: [
                defineType({
                  name: 'tableCell',
                  title: 'Cell',
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'content',
                      title: 'Content',
                      type: 'array',
                      of: [{type: 'block'}],
                    }),
                  ],
                  preview: {
                    prepare() {
                      return {
                        title: 'Cell',
                      }
                    },
                  },
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
