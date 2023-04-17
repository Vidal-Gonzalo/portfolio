import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Social } from '@/typings'

const query = groq`
*[_type == "social"]
`


export const getSocials = async () => {
  const data: Social[] = await sanityClient.fetch(query)

  return data
}

