import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { About } from '@/typings'

const query = groq`
*[_type == "about"][0] {
  title,
  description_one,
  description_two,
  image,
  technologies[]-> {
    title,
    image
  }
}
`

export const getAbout = async () => {
  const data: About = await sanityClient.fetch(query)

  return data
}
