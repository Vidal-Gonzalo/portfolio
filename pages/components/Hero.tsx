import React from 'react'
import Image from 'next/image'
import statue from '../../public/statue.png'
import ArrowDownCircle from '@heroicons/react/20/solid/ArrowDownCircleIcon'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
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
            className="text-4xl md:text-6xl uppercase px-10 pb-6 tracking-[7px] text-shadow-lg"
          >
            Gonzalo Vidal
          </motion.h1>
          <motion.div
            className=" flex justify-center space-x-10"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <SocialIcon
              url="https://www.linkedin.com/in/vidal-gonzalo"
              fgColor="gray"
              bgColor="transparent"
              target={'_blank'}
              className="cursor-pointer"
            />{' '}
            <SocialIcon
              url="https://www.github.com/vidal-gonzalo"
              fgColor="gray"
              bgColor="transparent"
              target={'_blank'}
            />
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="gray"
              target={'_blank'}
              bgColor="transparent"
            />
          </motion.div>
          <button className="border-2 border-solid border-brown mt-5 p-3 w-[50%] md:w-[20%] ">
            Ver CV
          </button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Link href="#about">
          <ArrowDownCircle className="h-12 w-12 text-brown animate-bounce cursor-pointer" />
        </Link>
      </motion.div>
    </div>
  )
}

export default Hero
