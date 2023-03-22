import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectsCarousel from './Carousels/ProjectsCarousel'
import ProjectDescription from './ProjectDescription'
import projects from '../../data/projects'

type Props = {}

function Projects({}: Props) {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

  const handleSlideChange = (swiper: any): void => {
    setActiveSlideIndex(swiper.activeIndex)
  }

  const projectImages = projects.map((project) => ({
    image: project.image,
    alt: project.alt,
  }))

  const activeProject = projects[activeSlideIndex]

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center lg:flex-row overflow-hidden lg:mt-5">
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

        <div className="w-1/2 h-1/2 flex justify-between items-center mt-5 z-0">
          <ProjectsCarousel
            handleSlideChange={handleSlideChange}
            projectsImages={projectImages}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className=" w-full h-1/2 flex flex-col justify-start lg:justify-center lg:h-full items-center "
      >
        <ProjectDescription activeProject={activeProject} />
      </motion.div>
    </div>
  )
}

export default Projects
