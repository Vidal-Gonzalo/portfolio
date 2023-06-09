import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'portfolio',
  projectId: '2vuu1b7g',
  dataset: 'production',
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
