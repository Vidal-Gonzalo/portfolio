import React from 'react'
import { motion } from 'framer-motion'
import TechsCarousel from './Carousels/TechsCarousel'
import GlobeAltIcon from '@heroicons/react/20/solid/GlobeAltIcon'
import CodeBracketIcon from '@heroicons/react/20/solid/CodeBracketIcon'
import { Project } from '@/typings'

type Props = {
  project: Project
}

function ProjectDescription({ project }: Props) {
  return (
    <div className="flex flex-col justify-center items-center space-y-10 text-center">
      <h5 className="text-4xl">{project?.title}</h5>
      <div className="w-full flex items-center justify-center">
        <p className="text-md w-3/4">{project?.description}</p>
      </div>

      {project?.technologies ? (
        <TechsCarousel techs={project?.technologies} />
      ) : null}
      <div className="space-x-5 text-center flex justify-center">
        <button className="w-24 h-10 2xl:w-32 border border-brown flex items-center justify-center text-brown">
          <GlobeAltIcon className="h-6 w-6 mr-2" /> Live
        </button>
        <button className="w-24 h-10 2xl:w-32 border border-brown flex items-center justify-center text-brown">
          <CodeBracketIcon className="h-6 w-6 mr-2" /> Code
        </button>
      </div>
    </div>
  )
}

export default ProjectDescription
