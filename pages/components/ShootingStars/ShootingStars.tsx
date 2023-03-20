import React from 'react'

type Props = {}

function ShootingStars({}: Props) {
  return (
    <>
      <span className="absolute top-20 left-0 right-0  w-1 h-1 bg-slate-100 rounded-[50%] shadow-custom animate-move3 before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-72 before:h-[1px] before:bg-gradient-to-r before:from-slate-400"></span>
      <span className="absolute top-0 right-44 left-auto w-1 h-1 bg-slate-100 rounded-[50%] shadow-custom animate-move4 before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-72 before:h-[1px] before:bg-gradient-to-r before:from-slate-400"></span>
      <span className="absolute top-0 right-96 left-auto w-1 h-1 bg-slate-100 rounded-[50%] shadow-custom animate-move5 before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-72 before:h-[1px] before:bg-gradient-to-r before:from-slate-400"></span>
      <span className="absolute top-0 right-[600px] left-auto  w-1 h-1 bg-slate-100 rounded-[50%] shadow-custom animate-move6 before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-72 before:h-[1px] before:bg-gradient-to-r before:from-slate-400"></span>
      <span className="absolute top-72 right-0 left-auto  w-1 h-1 bg-slate-100 rounded-[50%] shadow-custom animate-move7 before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:w-72 before:h-[1px] before:bg-gradient-to-r before:from-slate-400"></span>
    </>
  )
}

export default ShootingStars
