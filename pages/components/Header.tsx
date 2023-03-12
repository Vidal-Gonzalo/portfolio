import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Bars from '@heroicons/react/20/solid/Bars3Icon'
import Logo from './Logo'
import Link from 'next/link'
import { Livvic } from 'next/font/google'
import { SocialIcon } from 'react-social-icons'
import ParticlesBackground from './Particles/ParticlesBackground'
import LogoBackground from './WhiteLogo'

type Props = {}

const livvic = Livvic({
  subsets: ['latin'],
  weight: ['500'],
  style: 'normal',
})

export default function Header({}: Props) {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)

  return (
    <>
      <header
        className={`fixed p-5 flex justify-between w-screen xl:items-center z-10`}
      >
        <motion.div className="pl-5 flex flex-row items-center">
          {/* Social icons */}
          <Logo />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="pr-10 flex flex-row items-center text-gray-300 cursor-pointer "
        >
          <Bars
            className="h-8 w-8 text-brown"
            onClick={() => setNavbarOpen(!navbarOpen)}
          />
        </motion.div>
      </header>
      <motion.div
        id="overlayNav"
        initial={{ height: 0 }}
        animate={navbarOpen ? { height: '100%' } : { height: 0 }}
        transition={{ duration: 0.6 }}
        className={`w-screen backdrop-blur-sm fixed z-50 top-0 right-0 overflow-y-hidden bg-[rgba(0,0,0,0.9)]`}
      >
        <ParticlesBackground />
        <p
          className="cursor-pointer absolute top-5 right-10 z-50 text-6xl text-white"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          &times;
        </p>
        <motion.div
          animate={navbarOpen ? { opacity: 1 } : { opacity: 0, y: -200 }}
          transition={{ duration: 1 }}
          className={`${livvic.className} relative uppercase flex flex-col items-center justify-between h-[90%] top-[5%] text-center p-5 text-white`}
        >
          {navbarOpen ? <LogoBackground /> : null}
          <Link
            className="text-2xl"
            href="#about"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="p-5 border-b-4">Sobre mí</span>
          </Link>
          <Link
            className="text-2xl"
            href="#experience"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="p-5 border-b-4">Experiencia</span>
          </Link>
          <Link
            className="text-2xl"
            href="#projects"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="p-5 border-b-4">Habilidades</span>
          </Link>
          <Link
            className="text-2xl"
            href="#skills"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <span className="p-5 border-b-4">Contacto</span>
          </Link>
          <motion.div
            className="flex justify-center space-x-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <SocialIcon
              url="https://www.linkedin.com/in/vidal-gonzalo"
              fgColor="white"
              bgColor="transparent"
              target={'_blank'}
              className="cursor-pointer"
              style={{ fontSize: '2rem' }}
            />{' '}
            <SocialIcon
              url="https://www.github.com/vidal-gonzalo"
              fgColor="white"
              bgColor="transparent"
              target={'_blank'}
            />
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="white"
              target={'_blank'}
              bgColor="transparent"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}
