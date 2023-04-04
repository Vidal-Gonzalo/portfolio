import React from 'react'
import ShootingStars from './ShootingStars/ShootingStars'
import Icons from './Icons'
import Form from './Form'
import { motion } from 'framer-motion'
import Footer from './Footer'

type Props = {}

function Contact({}: Props) {
  return (
    <div className="relative flex-col w-screen md:h-screen overflow-hidden before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:height-full before:bg-[rgba(0,0,0,0.6)] bg-[url('/athens.jpeg')] bg-cover object-cover bg-center flex justify-center items-center z-0 ">
      <ShootingStars />
      <div className="relative h-full w-3/4 text-white z-10 md:h-2/4 lg:h-3/4 flex flex-col md:flex-row items-center ">
        <motion.div
          className="relative w-full p-5 md:w-3/4 h-full md:h-full flex items-center justify-end md:justify-center flex-col md:pl-16 md:items-start mt-10"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-xl md:text-4xl 2xl:text-6xl">¡Hablemos!</h3>
          <p className="text-xs mt-2 text-center w-[85%] md:mt-5 lg:text-lg lg:text-left 2xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            id tempora perferendis facilis adipisci molestiae cum hic blanditiis
            natus assumenda, velit,
          </p>
          <p className="text-xs mt-2 text-center w-[85%] md:mt-5 lg:text-lg lg:text-left 2xl:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            id tempora perferendis facilis adipisci molestiae cum hic blanditiis
            natus assumenda, velit,
          </p>
          <div className="mt-2 md:mt-5">
            <Icons color={'white'} />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative h-0.5 w-3/4 md:h-3/4 md:w-0.5 border border-slate-200 shadow-lg"
        ></motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center p-10 md:w-3/4 md:h-1/2 md:mt-0 md:flex md:items-start md:justify-evenly md:flex-col xl:items-center"
        >
          <Form />
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact
