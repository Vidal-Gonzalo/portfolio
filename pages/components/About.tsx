import React from 'react'
import Image from 'next/image'
import thinker from '../../public/thinker.png'
import react from '../../public/react.png'
import typescript from '../../public/typescript.png'
import next from '../../public/next.png'
import node from '../../public/node.png'
import mongo from '../../public/mongo.png'
import { motion } from 'framer-motion'

interface Techs {
  url: string
  name: string
}

type Props = {}

const techs: Techs[] = [{ url: '', name: '' }]

function About({}: Props) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center lg:flex-row overflow-hidden">
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
          <div className="flex flex-col">
            {' '}
            <p className="p-5 md:leading-6 text-xs md:text-sm w-full lg:text-xl text-center">
              ¡Hola! Mi nombre es Gonzalo Vidal. Soy desarrollador front-end y
              estudiante de la Tecnicatura Superior en Sistemas en la
              Universidad Tecnológica Nacional desde principios de 2022. Me
              considero alguien apasionado por la{' '}
              <span className="underline">tecnología</span>, el{' '}
              <span className="underline">arte</span>, la{' '}
              <span className="underline">escritura</span> y la{' '}
              <span className="underline">filosofía</span>.
            </p>
            <p className="p-5 md:leading-6 text-xs md:text-sm w-full lg:text-xl text-center">
              Disfruto mucho trabajar del lado del cliente, pero mis proyectos y
              la universidad me llevaron a aprender también programación del
              lado del servidor.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="flex p-5 items-center md:space-x-10">
            {/* On device get lower image's width */}
            <Image
              width={60}
              src={react}
              alt={'React'}
              title={'React'}
              className="space-x-5"
            />
            <Image
              width={60}
              src={typescript}
              alt={'Typescript'}
              title={'Typescript'}
            />
            <Image width={60} src={next} alt={'Next.js'} title={'Next.js'} />
            <Image width={60} src={node} alt={'Node.js'} title={'Node.js'} />
            <Image width={60} src={mongo} alt={'MongoDB'} title={'MongoDB'} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
