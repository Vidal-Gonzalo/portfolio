import Image from 'next/image'
import React from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import { Tech } from '@/models'

type Props = {
  techs: Tech[]
  slides?: number
}

function TechsCarousel({ techs, slides }: Props) {
  let loopEnabled = false
  if (slides) {
    loopEnabled = techs.length >= slides * 2
  }

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={slides ? slides : techs.length}
      loop={loopEnabled}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      speed={3000}
      className="w-1/2 h-1/2"
    >
      {techs.map((tech, index) => (
        <SwiperSlide
          key={index}
          className="flex flex-col justify-center items-center"
        >
          <Image
            width={tech.width}
            src={tech.image}
            alt={tech.title}
            title={tech.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default TechsCarousel
