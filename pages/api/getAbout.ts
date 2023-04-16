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

type Data = {
  about?: About
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const about: About = await sanityClient.fetch(query)
    res.status(200).json({ about })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
