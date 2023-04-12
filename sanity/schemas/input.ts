import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'input',
    title: 'Input',
    type: 'document',
    fields: [
      defineField({
        name: 'label',
        title: 'Label',
        type: 'string',
      }),
      defineField({
        name: 'type',
        title: 'Type',
        type: 'string',
        options: {
          list: ['text', 'email', 'textarea', 'checkbox', 'radio'],
        },
      }),
      defineField({
        name: 'placeholder',
        title: 'Placeholder',
        type: 'string',
      }),
    ],
  })
