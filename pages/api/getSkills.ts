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


export const getSkills = async () => {
  const data: Skill[] = await sanityClient.fetch(query)

  return data
}
