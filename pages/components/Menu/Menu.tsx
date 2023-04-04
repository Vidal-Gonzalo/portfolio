import React from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from '../Particles/ParticlesBackground'
import WhiteLogo from '../Logo/WhiteLogo'
import Icons from '../Icons'
import { Livvic } from 'next/font/google'
import Links from './MenuContent/Links'
import Link from 'next/link'

type Props = {
  navbarOpen: boolean
  changeNavbarStatus: () => void
}

const livvic = Livvic({
  subsets: ['latin'],
  weight: ['500'],
  style: 'normal',
})

function Menu({ navbarOpen, changeNavbarStatus }: Props) {
  return (
    <motion.nav
      id="overlayNav"
      initial={{ height: 0 }}
      animate={navbarOpen ? { height: '100%' } : { height: 0 }}
      transition={{ duration: 0.6 }}
      className={`w-screen backdrop-blur-sm fixed z-50 top-0 right-0 overflow-y-hidden bg-[rgba(0,0,0,0.9)]`}
    >
      <ParticlesBackground />
      <p
        className="cursor-pointer absolute top-5 right-10 z-50 text-6xl text-white"
        onClick={changeNavbarStatus}
      >
        &times;
      </p>
      <motion.div
        animate={navbarOpen ? { opacity: 1 } : { opacity: 0, y: -200 }}
        transition={{ duration: 1 }}
        className={`${livvic.className} relative uppercase flex flex-col items-center justify-between h-[90%] top-[5%] text-center p-5 text-white`}
      >
        {navbarOpen ? (
          <Link href="#hero" onClick={changeNavbarStatus}>
            <WhiteLogo width={120} height={120} />{' '}
          </Link>
        ) : null}
        <Links changeNavbarStatus={changeNavbarStatus} />
        <Icons color={'white'} changeNavbarStatus={changeNavbarStatus} />
      </motion.div>
    </motion.nav>
  )
}

export default Menu
