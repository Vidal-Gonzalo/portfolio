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

export const getHeader = async () => {
  const data: HeaderInfo = await sanityClient.fetch(query)

  return data
}
