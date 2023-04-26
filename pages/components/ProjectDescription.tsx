import React from 'react'
import TechsCarousel from './Carousels/TechsCarousel'
import GlobeAltIcon from '@heroicons/react/20/solid/GlobeAltIcon'
import CodeBracketIcon from '@heroicons/react/20/solid/CodeBracketIcon'
import { Project } from '@/typings'
import Link from 'next/link'

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
        <Link
          href={project?.linkToSite || '#'}
          target="_blank"
          className={`w-24 h-10 2xl:w-32 border flex items-center justify-center ${
            project?.linkToSite
              ? 'text-brown border-brown'
              : 'border-gray-400 text-gray-400 cursor-not-allowed'
          }`}
          onClick={(e) => {
            if (!project?.linkToSite) {
              e.preventDefault()
            }
          }}
        >
          <GlobeAltIcon className="h-6 w-6 mr-2" /> Live
        </Link>

        <Link
          href={project?.linkToBuild || '#'}
          target="_blank"
          className={`w-24 h-10 2xl:w-32 border flex items-center justify-center ${
            project?.linkToBuild
              ? 'text-brown border-brown'
              : 'border-gray-400 text-gray-400 cursor-not-allowed'
          }`}
          onClick={(e) => {
            if (!project?.linkToBuild) {
              e.preventDefault()
            }
          }}
        >
          <CodeBracketIcon className="h-6 w-6 mr-2" /> Code
        </Link>
      </div>
    </div>
  )
}

export default ProjectDescription
