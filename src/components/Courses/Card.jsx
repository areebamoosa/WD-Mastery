import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../../assets/arrow.svg'

const Card = ({ id, title, img, desc }) => {
  return (
    <>
      <Link to="#" >
        <div className="rounded-2xl p-4 border border-yellow-400 bg-[#0b0b2a] shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] hover:scale-[1.02] transition-all duration-300flex flex-col gap-2 items-start justify-start w-90 h-75 card">
          <img src={img} alt="course-img" className='h-30 object-left object-contain card' />
          <h2 className='text-white font-bold text-lg card mt-2'>{title}</h2>
          <p className='light text-sm card mt-3'>{desc}...</p>
          <div className='flex gap-2 card mt-6'>
            <p className='light-blue card text-xs font-bold'>Check it now </p>
            <img src={arrow} alt="arrow" className='w-3 card  ' />
          </div>
        </div>
      </Link>
    </>
  )
}

export default Card