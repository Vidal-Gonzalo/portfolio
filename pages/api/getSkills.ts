import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Skill } from '@/typings'

const query = groq`
*[_type == "skill"]
`

type Data = {
  skills?: Skill[]
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  try {
    const skills: Skill[] = await sanityClient.fetch(query)
    res.status(200).json({ skills })
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
