import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas/schema'
import {visionTool} from '@sanity/vision'

export default defineConfig({
  name: 'edl-portfolio',
  title: 'edl-portfolio',
  projectId: 'wydp43aa',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
