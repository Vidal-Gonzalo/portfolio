import React from 'react'
import Image from 'next/image'
import statue from '../../public/statue.png'
import ArrowDownCircle from '@heroicons/react/20/solid/ArrowDownCircleIcon'
import { motion } from 'framer-motion'
import Icons from './Icons'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
  return (
    <div className="relative w-screen h-screen font-sans ">
      <div className="flex-justify-center items-center">
        <Image
          src={statue}
          alt={'Statue'}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-3/4 md:h-full object-cover"
          priority
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full flex flex-col text-center items-center justify-center text-brown">
          <motion.h2
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-sm tracking-[2px] uppercase pb-6 md:text-md md:tracking-[15px]"
          >
            Desarrollador front-end
          </motion.h2>
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl uppercase px-10 pb-6 tracking-[7px]"
          >
            Gonzalo Vidal
          </motion.h1>
          <motion.div
            className=" flex justify-center space-x-10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Icons color={'#5D4739'} />
          </motion.div>
          <a
            href="/CV-Gonzalo-Vidal.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-solid border-brown mt-5 p-3 w-[50%] md:w-[20%] "
          >
            Ver CV
          </a>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-[4%] lg:bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Link href="#about">
          <ArrowDownCircle className="h-12 w-12 text-brown animate-bounce cursor-pointer" />
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero
