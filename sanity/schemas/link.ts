import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      description: 'Title of link',
      type: 'string',
    }),
    defineField({
      name: 'to',
      title: 'To',
      description: 'Title of href',
      type: 'string',
    }),
  ],
})
