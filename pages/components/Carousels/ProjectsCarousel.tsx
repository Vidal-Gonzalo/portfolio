import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

type Props = {
  handleSlideChange: (swiper: any) => void
  projectsImages: { image: StaticImageData | string; alt: string }[]
}

function ProjectsCarousel({ handleSlideChange, projectsImages }: Props) {
  return (
    <Swiper
      grabCursor={true}
      className="relative h-full rounded-lg shadow-lg shadow-slate-800 bg-slate-800"
      pagination={true}
      modules={[Pagination]}
      onSlideChange={handleSlideChange}
    >
      {projectsImages?.map((project, index) => (
        <SwiperSlide
          key={index}
          className="relative after:absolute after:bottom-0 after:right-0 after:left-0 after:h-[20%] lg:after:h-[10%] after:bg-[rgba(0,0,0,0.7)]"
        >
          <Image
            src={project.image}
            alt={project.alt}
            className="relative h-full w-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ProjectsCarousel
