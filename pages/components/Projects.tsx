import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'
import athens from '../../public/athens.jpeg'
import owlet from '../../public/owlet.png'
import { motion } from 'framer-motion'

import react from '../../public/react.png'
import GlobeAlt from '@heroicons/react/20/solid/GlobeAltIcon'
import CodeBracket from '@heroicons/react/20/solid/CodeBracketIcon'

interface Projects {
  picUrl: string
  liveUrl?: string
  codeUrl: string
  alt: string
  title: string
  description: string
}

const projects: Projects[] = [
  {
    picUrl: 'adancreation',
    liveUrl: 'github.com',
    codeUrl: 'github.com',
    alt: 'iMaia',
    title: 'iMaia',
    description: 'Plataforma re piola pa que puedas escribir',
  },
]

type Props = {}

function Projects({}: Props) {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center lg:flex-row overflow-hidden mt-5">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center flex-col w-full h-1/2 md:h-full "
      >
        <div className="flex justify-center items-center">
          <h3 className="mt-5 mb-5 text-3xl text-center md:text-5xl md:w-full md:mt-0">
            Mis proyectos
          </h3>
        </div>

        <div className="relative z-10 w-1/2 flex justify-center items-center mt-5">
          <Swiper
            grabCursor={true}
            className="h-full w-full rounded-lg shadow-lg shadow-slate-800"
          >
            <SwiperSlide>
              <Image
                src={athens}
                alt="athens"
                className="h-full w-full object-cover object-center"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" w-full h-1/2 flex flex-col justify-start lg:justify-center lg:h-full items-center "
      >
        <div className="text-center space-y-5 lg:space-y-7 lg:mt-[10%] lg:mr-[5%]">
          <h4 className="text-3xl md:text-3xl">iMaia</h4>
          <div className="lg:w-full lg:flex lg:justify-center lg:items-center ">
            {' '}
            <p className="leading-5 text-sm pl-5 pr-5 md:text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              magnam ducimus consequuntur ratione, unde blanditiis quibusdam
              illum animi illo sequi a, molestias cumque nihil. Quod sequi
              nesciunt porro architecto corrupti. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Labore magnam ducimus
            </p>
          </div>

          <div className="flex justify-evenly mt-3">
            <Image width={60} src={react} alt={'React'} title={'React'} />
            <Image width={60} src={react} alt={'React'} title={'React'} />
            <Image width={60} src={react} alt={'React'} title={'React'} />
            <Image width={60} src={react} alt={'React'} title={'React'} />
            <Image width={60} src={react} alt={'React'} title={'React'} />
          </div>
          <div className="flex justify-evenly ">
            <button className="rounded-lg text-white bg-brown p-2 flex justify-between items-center">
              <span>
                <GlobeAlt className="h-8 w-8 mr-2" />
              </span>
              Live version
            </button>
            <button className="rounded-lg text-white bg-brown p-2 flex justify-between items-center">
              <span>
                <CodeBracket className="h-8 w-8 mr-2" />
              </span>
              Code version
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Projects

// before:absolute before:h-1/4 before:content-[''] before:z-50 before:bottom-0 before:left-0 before:right-0 before:bg-red-500]
