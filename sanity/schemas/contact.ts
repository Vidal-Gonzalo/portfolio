import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: "description_one",
      title: "Description One",
      type: "text"
    }),
    defineField({
        name: "description_two",
        title: "Description Two",
        type: "text"
    }),
    defineField({
        name: 'techs',
        title: 'Techs',
        type: 'array',
        of: [{type: "reference", to: {type: "skill"}}]
    }),
  ],
})
