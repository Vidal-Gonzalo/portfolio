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

export const getContact = async () => {
  const data: Contact = await sanityClient.fetch(query)

  return data
}
