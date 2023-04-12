import { LinkTo } from '@/typings'
import Link from 'next/link'
import React from 'react'

type Props = {
  links: LinkTo[]
  changeNavbarStatus: () => void
}

function Links({ links, changeNavbarStatus }: Props) {
  console.log(links)
  return (
    <>
      {links?.map((value, i) => (
        <Link
          key={i}
          className="text-2xl"
          href={`#${value.to}`}
          onClick={changeNavbarStatus}
        >
          <span className="p-5 border-b-4">{value.value}</span>
        </Link>
      ))}
    </>
  )
}

export default Links
