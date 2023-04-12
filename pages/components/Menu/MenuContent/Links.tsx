import Link from 'next/link'
import React from 'react'

type Props = {
  changeNavbarStatus: () => void
}

interface NavLinks {
  value: string
  link: string
}

const navLinks: NavLinks[] = [
  { value: 'About me', link: 'about' },
  { value: 'Projects', link: 'projects' },
  { value: 'Contact', link: 'contact' },
]

function Links({ changeNavbarStatus }: Props) {
  return (
    <>
      {navLinks.map((value, i) => (
        <Link
          key={i}
          className="text-2xl"
          href={`#${value.link}`}
          onClick={changeNavbarStatus}
        >
          <span className="p-5 border-b-4">{value.value}</span>
        </Link>
      ))}
    </>
  )
}

export default Links
