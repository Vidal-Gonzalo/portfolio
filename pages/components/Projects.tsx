import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectDescription from './ProjectDescription'
import ArrowPath from '@heroicons/react/24/solid/ArrowPathIcon'
import Minus from '@heroicons/react/24/solid/MinusIcon'
import { Project } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
  const [projectsToShow, setProjectsToShow] = useState<number>(3)

  return (
    <div className="w-screen flex flex-col justify-center items-center space-y-14 pb-[10%]">
      <div className="w-full flex justify-center md:justify-center">
        <h3 className="text-2xl md:text-5xl md:text-center ">My projects</h3>
      </div>
      {projects
        ?.sort((a, b) => a.id - b.id)
        .slice(0, projectsToShow)
        .map((project, index) => {
          const isEvenIndex = index % 2 === 0
          return (
            <div className="w-full" key={index}>
              <div
                className={`w-full lg:h-screen 2xl:h-[80vh] flex flex-col lg:flex-row ${
                  isEvenIndex ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } lg:justify-evenly items-center overflow-hidden`}
              >
                {project?.image ? (
                  <motion.div
                    initial={{ opacity: 0, x: isEvenIndex ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="w-1/2 lg:w-[80%] 2xl:w-[25%] lg:mr-[10%] 2xl:mr-[3%] lg:ml-[15%] 2xl:ml-[12%]"
                  >
                    <Image
                      src={urlFor(project?.image).url()}
                      alt={'Project'}
                      width={2500}
                      height={2500}
                    />
                  </motion.div>
                ) : null}
                <motion.div
                  initial={{ opacity: 0, x: isEvenIndex ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="mt-5 lg:mt-0 2xl:w-[40%] 2xl:text-2xl"
                >
                  <ProjectDescription project={project} />
                </motion.div>
              </div>
            </div>
          )
        })}
      {projectsToShow < projects?.length ? (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-14 bg-brown border border-brown flex items-center justify-center text-white"
          onClick={() => setProjectsToShow(projectsToShow + 4)}
        >
          <ArrowPath className="h-6 w-6 mr-3" /> Show more
        </motion.button>
      ) : (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-14 border border-brown flex items-center justify-center text-brown"
          onClick={() => setProjectsToShow(projectsToShow - 4)}
        >
          <Minus className="h-6 w-6 mr-3" /> Show less
        </motion.button>
      )}
    </div>
  )
}

export default Projects
