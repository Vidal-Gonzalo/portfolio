import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Contact } from '@/typings'

const query = groq`
*[_type == "contact"][0]{
  title,
  image,
  description[],
  socials[]->{
    title,
    url
  },
  inputs[]->{
    label,
    type,
    placeholder
  }
}
`

type Data = {
  contact?: Contact
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const contact: Contact = await sanityClient.fetch(query)
    res.status(200).json({ contact })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
