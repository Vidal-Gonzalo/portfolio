import React from 'react'
import Image from 'next/image'
import thinker from '../../public/thinker.png'
import { motion } from 'framer-motion'
import techs from '../../data/techs'
import TechsCarousel from './Carousels/TechsCarousel'

type Props = {}

function About({}: Props) {
  return (
    <div className=" w-screen flex flex-col justify-center items-center lg:h-screen lg:flex-row overflow-hidden">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center"
      >
        <Image src={thinker} alt="Thinker" />
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full m-5 lg:m-10 flex flex-col justify-center items-center"
      >
        <div className="w-full flex flex-col justify-center items-center">
          <h3 className="mt-2 text-md md:text-5xl md:text-center md:w-full">
            Un poco sobre mí
          </h3>
          <div className="w-full flex flex-col">
            {' '}
            <p className="p-5 md:leading-6 text-xs md:text-sm w-full lg:text-xl text-center">
              ¡Hola! Mi nombre es Gonzalo Vidal. Soy desarrollador front-end y
              estudiante de la Tecnicatura Superior en Sistemas en la
              Universidad Tecnológica Nacional desde principios de 2022. Me
              considero alguien apasionado por la{' '}
              <span className="italic">tecnología</span>, el{' '}
              <span className="italic">arte</span>, la{' '}
              <span className="italic">escritura</span> y la{' '}
              <span className="italic">filosofía</span>.
            </p>
            <p className="p-5 md:leading-6 text-xs md:text-sm w-full lg:text-xl text-center">
              Disfruto mucho trabajar del lado del cliente, pero mis proyectos y
              la universidad me llevaron a aprender también programación del
              lado del servidor.
            </p>
            <TechsCarousel techs={techs} slides={5} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
