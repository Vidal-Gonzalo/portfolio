import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TechsCarousel from './Carousels/TechsCarousel'
import { About } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  about: About
}

function AboutMe({ about }: Props) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center lg:flex-row overflow-hidden">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center"
      >
        {about ? (
          <Image
            src={urlFor(about?.image).url()}
            alt="Thinker"
            width={1500}
            height={1500}
          />
        ) : null}
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/2 m-5 lg:m-10 flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="mt-2 text-2xl md:text-5xl md:text-center md:w-full">
            {about?.title}
          </h3>
          <div className="w-full flex flex-col">
            {' '}
            <p className="p-5 md:leading-6 text-xs md:text-sm w-full lg:text-xl 2xl:text-2xl">
              {about?.description_one}
            </p>
            <p className="p-5 md:leading-6 text-xs md:text-sm w-full lg:text-xl 2xl:text-2xl">
              {about?.description_two}
            </p>
            <TechsCarousel techs={about?.technologies} slides={5} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
