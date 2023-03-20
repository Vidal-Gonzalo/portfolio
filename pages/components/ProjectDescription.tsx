import React from 'react'
import { motion } from 'framer-motion'
import GlobeAlt from '@heroicons/react/20/solid/GlobeAltIcon'
import CodeBracket from '@heroicons/react/20/solid/CodeBracketIcon'
import { Project } from '@/models'
import TechsCarousel from './Carousels/TechsCarousel'

type Props = {
  activeProject: Project
}

function ProjectDescription({ activeProject }: Props) {
  return (
    <div className="text-center space-y-5 lg:space-y-7 lg:mt-[10%] lg:mr-[5%]">
      <motion.h4
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        key={activeProject.title}
        className="text-3xl md:text-3xl"
      >
        {activeProject.title}
      </motion.h4>
      <div className="lg:w-full lg:flex lg:justify-center lg:items-center ">
        {' '}
        <p className="leading-5 text-sm pl-5 pr-5 md:text-lg lg:text-xl">
          {activeProject.description}
        </p>
      </div>

      <div className="flex justify-evenly mt-3">
        <TechsCarousel techs={activeProject.techs} slides={4} />
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
  )
}

export default ProjectDescription
