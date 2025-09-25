import React from 'react'
import email from '../../assets/email.jpg';

const EmailCard = () => {
  return (
    <>
      <div className='text-white  font w-80 h-80 p-10 flex flex-col items-start gap-3 border rounded-lg'>
        <img src={email} alt="email" className="w-15 h-15 " />
        <p className=' text-sm font-semibold'>Level Up Your Dev Game: Weekly!</p>
        <p className=' text-xs'>Join 200,000+ developers getting free tips, tutorials & project ideas every week.</p>
        <input type="text" placeholder='Enter your email' className='input  w-60 h-20 px-1 py-1 rounded-md text-xs mt-2 cursor-pointer' />
        <button className='sub-btn text-black text-sm  px-1 py-1 rounded-md font-medium  w-60 h-20  font cursor-pointer'>Subscribe</button>
      </div>
    </>
  )
}

export default EmailCard