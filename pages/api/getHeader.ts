import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { HeaderInfo } from '@/typings'

const query = groq`
*[_type == "header"][0]{
  links[]->{
    value,
    to
  },
  socials[]->{
    title,
    url
  }
}
`

type Data = {
  header?: HeaderInfo
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const header: HeaderInfo = await sanityClient.fetch(query)
    res.status(200).json({ header })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
