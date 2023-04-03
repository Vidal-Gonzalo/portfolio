import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'

type Props = {
  color: string
  background?: string
}

interface SocialNetworks {
  network: string
  url?: string
}

const socialNetworks: SocialNetworks[] = [
  {
    network: 'linkedin',
    url: 'https://www.linkedin.com/in/vidal-gonzalo',
  },
  {
    network: 'github',
    url: 'https://www.github.com/vidal-gonzalo',
  },
  { network: 'email' },
]

function NavbarIcons({ color, background }: Props) {
  return (
    <motion.div
      className="flex justify-center space-x-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {socialNetworks.map((value, index) =>
        value.network === 'email' ? (
          <Link href="#contact">
            <SocialIcon
              key={index}
              network={value.network}
              url={value.url ? value.url : undefined}
              fgColor={color}
              bgColor={background ? background : 'transparent'}
            />
          </Link>
        ) : (
          <SocialIcon
            key={index}
            network={value.network}
            url={value.url ? value.url : undefined}
            fgColor={color}
            bgColor={background ? background : 'transparent'}
            target={'_blank'}
          />
        ),
      )}
    </motion.div>
  )
}

export default NavbarIcons
