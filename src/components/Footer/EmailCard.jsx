import React from 'react'
import email from '../../assets/email.jpg';

const EmailCard = () => {
  return (
    <>
      <div className='text-white font w-80 h-80 p-10 md:w-60 md:h-70   lg:w-80 lg:h-80 sm:px-4 sm:py-2 lg:p-10 flex flex-col items-start gap-3 border rounded-lg'>
        <img src={email} alt="email" className="w-15 h-15 " />
        <p className=' text-sm font-semibold'>Level Up Your Dev Game: Weekly!</p>
        <p className=' text-xs'>Join 200,000+ developers getting free tips, tutorials & project ideas every week.</p>
        <input type="text" placeholder='Enter your email' className='input sm:w-40  w-60 h-20 lg:w-60 lg:h-20 px-1 py-1 rounded-md text-xs mt-2 cursor-pointer' />
        <button className='sub-btn text-black text-sm  px-1 py-1 rounded-md font-medium sm:w-40 lg:w-60 lg:h-20  w-60 h-20 font cursor-pointer'>Subscribe</button>
      </div>
    </>
  )
}

export default EmailCard