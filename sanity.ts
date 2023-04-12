import {createClient} from 'next-sanity'
import createImageBuilder from '@sanity/image-url'

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2022-02-03",
  useCdn: true
}


export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageBuilder(config).image(source)