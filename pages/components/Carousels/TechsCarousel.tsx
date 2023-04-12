import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Skill } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
  techs: Skill[]
  slides?: number
}

function TechsCarousel({ techs, slides }: Props) {
  let loopEnabled = false
  if (slides && techs) {
    loopEnabled = techs.length <= slides * 2
  }

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={slides ? slides : techs ? techs.length : 0}
      loop={loopEnabled}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={3000}
      className="w-1/2 h-1/2"
    >
      {techs?.map((tech, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col justify-center items-center relative z-[-1]"
        >
          <Image
            src={urlFor(tech.image).url()}
            width={slides ? (slides < 4 ? 50 : 60) : 60}
            height={slides ? (slides < 4 ? 50 : 60) : 60}
            alt={tech.title}
            className="w-auto h-auto"
            title={tech.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TechsCarousel
