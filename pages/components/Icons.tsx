import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import { Social } from '@/typings'

type Props = {
  socials: Social[]
  color: string
  background?: string
  changeNavbarStatus?: () => void
}

function NavbarIcons({
  socials,
  color,
  background,
  changeNavbarStatus,
}: Props) {
  return (
    <motion.div
      className="flex justify-center space-x-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {socials?.map((value, index) =>
        value.title === 'email' ? (
          <SocialIcon
            key={index}
            network={value.title}
            url={'/#contact'}
            fgColor={color}
            bgColor={background ? background : 'transparent'}
            onClick={changeNavbarStatus && changeNavbarStatus}
          />
        ) : (
          <SocialIcon
            key={index}
            network={value.title}
            url={value.url}
            fgColor={color}
            bgColor={background ? background : 'transparent'}
            target={'_blank'}
            onClick={changeNavbarStatus && changeNavbarStatus}
          />
        ),
      )}
    </motion.div>
  )
}

export default NavbarIcons
