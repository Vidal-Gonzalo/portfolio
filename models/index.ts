import { StaticImageData } from "next/image"

export interface Tech {
    title: string
    image: StaticImageData
    width: number
} 

export interface Project {
    image: StaticImageData | string
    alt: string
    delay: number
    liveUrl?: string
    codeUrl?: string
    title: string
    description: string
    techs: Array<Tech>
  }