import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="relative md:absolute md:bottom-0 h-[10vh] text-white w-full flex justify-center items-center text-sm bg-[rgba(0,0,0,0.4)]">
      <span className="">© Gonzalo Vidal 2023</span>
    </footer>
  )
}

export default Footer
