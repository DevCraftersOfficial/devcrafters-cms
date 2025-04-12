import {defineType, defineArrayMember} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
          {title: 'Underline', value: 'underline'},
          {title: 'Strike-through', value: 'strike-through'},
          {title: 'Inline Code', value: 'code'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      type: 'code',
      title: 'Code Block',
      options: {
        language: 'javascript',
        languageAlternatives: [
          {title: 'HTML', value: 'html'},
          {title: 'CSS', value: 'css'},
          {title: 'JavaScript', value: 'javascript'},
          {title: 'React', value: 'jsx'},
          {title: 'Go', value: 'go'},
          {title: 'Python', value: 'python'},
          {title: 'Tailwind CSS', value: 'tailwindcss'},
          {title: 'Bash', value: 'bash'},
          {title: 'JSON', value: 'json'},
          {title: 'Markdown', value: 'markdown'},
        ],
        theme: 'github',
        withFilename: false,
      },
    }),

    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),

    // Custom content types
    defineArrayMember({ type: 'callout' }),
    defineArrayMember({ type: 'collapsible' }),
    defineArrayMember({ type: 'table' }),
  ],
})
