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
  header: HeaderInfo
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const header: HeaderInfo = await sanityClient.fetch(query)

  res.status(200).json({ header })
}
