import React from 'react'
import ShootingStars from './ShootingStars/ShootingStars'
import Icons from './Icons'
import Form from './Form'

type Props = {}

function Contact({}: Props) {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[url('/mountains.jpg')] bg-cover object-cover bg-top flex justify-center items-center z-0 ">
      <ShootingStars />
      <div className="bg-gray-800 rounded-md overflow-scroll md:overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-sm md:backdrop-blur-md bg-opacity-20 shadow-xl shadow-black text-white z-10 w-3/4 h-3/4 md:h-2/4 lg:h-3/4 flex flex-col md:flex-row items-center ">
        <div className="w-full p-5 md:w-3/4 h-full md:h-full flex items-center justify-center flex-col md:pl-16 md:items-start">
          <h3 className="text-xl md:text-4xl">¡Hablemos!</h3>
          <p className="text-sm mt-2 text-center lg:text-lg lg:text-left md:w-[85%] md:mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            id tempora perferendis facilis adipisci molestiae cum hic blanditiis
            natus assumenda, velit,
          </p>
          <p className="text-sm mt-2 text-center lg:text-lg lg:text-left md:w-[85%] md:mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            id tempora perferendis facilis adipisci molestiae cum hic blanditiis
            natus assumenda, velit,
          </p>
          <div className="mt-2 md:mt-5">
            <Icons />
          </div>
        </div>
        <div className="h-0.5 w-3/4 md:h-3/4 md:w-0.5 border border-slate-200 shadow-lg"></div>
        <div className="flex justify-center p-10 md:w-3/4 md:h-1/2 md:mt-0 md:flex md:items-start md:justify-evenly md:flex-col md:pl-10">
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Contact
