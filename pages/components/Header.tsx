import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Bars from '@heroicons/react/20/solid/Bars3Icon'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import Link from 'next/link'

type Props = {}

export default function Header({}: Props) {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false)
  const changeNavbarStatus = () => {
    setNavbarOpen(!navbarOpen)
  }

  return (
    <>
      <header
        className={`fixed md:p-5 flex justify-between w-screen xl:items-center z-10`}
      >
        <motion.div className="pl-2 md:pl-5 flex flex-row items-center justify-start">
          {/* Social icons */}
          <Link href="#hero">
            <Logo />
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="pr-5 md:pr-8 flex flex-row items-center text-gray-300 cursor-pointer "
        >
          <Bars
            className="text-brown w-8 md:w-10"
            onClick={changeNavbarStatus}
          />
        </motion.div>
      </header>
      <Menu navbarOpen={navbarOpen} changeNavbarStatus={changeNavbarStatus} />
    </>
  )
}
