import React from 'react'
import heroImage from '../../assets/hero-img.jpg';

const Hero = () => {
  return (
    <>
      <div className='black min-h-screen mt-100'>
        <img src={heroImage} alt="heroimage" className='absolute inset-0 m-auto object-contain mt-[220px] w-108 h-auto' />
      </div>
    </>
  )
}

export default Hero