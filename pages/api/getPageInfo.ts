import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { PageInfo } from '@/typings'

const query = groq`
*[_type == "pageInfo"][0]{
  name,
    role,
    heroImage,
    socials[]-> {
      title,
      url
    }
}
`

export const getPageInfo = async () => {
  const data: PageInfo = await sanityClient.fetch(query)

  return data
}
