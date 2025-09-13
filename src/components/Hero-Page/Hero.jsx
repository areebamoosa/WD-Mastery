import React from 'react'
import heroImage from '../../assets/hero-img.jpg';

const Hero = () => {
  return (
    <>
      <div className="relative flex items-center justify-center h-screen black ">
        <img
          src={heroImage} alt="heroimage" className="max-w-[490px] w-full h-auto object-contain mt-[-180px]"/>
      </div>
    </>
  )
}

export default Hero