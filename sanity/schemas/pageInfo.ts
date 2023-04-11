import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInfo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string'
    }),
    defineField({
      name: 'heroImage',
      title: 'heroImage',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [{type: "reference", to: {type: "social"}}]
    }),
  ],
})
