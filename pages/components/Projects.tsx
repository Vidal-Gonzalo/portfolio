import Image from 'next/image'
import React, { useState } from 'react'
import projects from '../../data/projects'
import { motion } from 'framer-motion'
import ProjectDescription from './ProjectDescription'
import ArrowPath from '@heroicons/react/24/solid/ArrowPathIcon'
import Minus from '@heroicons/react/24/solid/MinusIcon'

type Props = {}

function ProjectsExample({}: Props) {
  const [projectsToShow, setProjectsToShow] = useState<number>(4)

  return (
    <div className="w-screen flex flex-col justify-center items-center space-y-14 pb-[10%]">
      <div className="w-full flex justify-center md:justify-center">
        <h3 className="text-2xl md:text-5xl md:text-center ">Mis proyectos</h3>
      </div>
      {projects.slice(0, projectsToShow).map((project, index) => (
        <div className="w-full" key={index}>
          {project?.position === 'right' ? (
            <div
              key={index}
              className="w-full lg:h-screen 2xl:h-[80vh] flex flex-col lg:flex-row-reverse lg:justify-evenly items-center overflow-hidden"
            >
              {project?.image ? (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-1/2 lg:w-[80%] 2xl:w-[25%] lg:mr-[10%] 2xl:mr-[3%]"
                >
                  <Image src={project?.image} alt={project?.alt} />
                </motion.div>
              ) : null}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="mt-5 lg:mt-0 2xl:w-[40%] 2xl:text-2xl"
              >
                <ProjectDescription project={project} />
              </motion.div>
            </div>
          ) : project?.position === 'left' ? (
            <div
              key={index}
              className="w-full flex flex-col lg:flex-row justify-around items-center 2xl:h-[80vh]"
            >
              {' '}
              {project?.image ? (
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="w-1/2 ml-0 lg:w-[80%] 2xl:w-[25%] lg:ml-[15%] 2xl:ml-[12%]"
                >
                  <Image src={project?.image} alt={project?.alt} />
                </motion.div>
              ) : null}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="mt-5 lg:mt-0 2xl:w-[40%] 2xl:text-2xl"
              >
                <ProjectDescription project={project} />
              </motion.div>
            </div>
          ) : null}
        </div>
      ))}
      {projectsToShow < projects.length ? (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-14 bg-brown border border-brown flex items-center justify-center text-white"
          onClick={() => setProjectsToShow(projectsToShow + 4)}
        >
          <ArrowPath className="h-6 w-6 mr-3" /> Mostrar más
        </motion.button>
      ) : (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-40 h-14 border border-brown flex items-center justify-center text-brown"
          onClick={() => setProjectsToShow(projectsToShow - 4)}
        >
          <Minus className="h-6 w-6 mr-3" /> Mostrar menos
        </motion.button>
      )}
    </div>
  )
}

export default ProjectsExample
