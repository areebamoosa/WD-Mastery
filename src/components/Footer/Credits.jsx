import React from 'react'
import instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedinsvg.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';
import Github from '../../assets/github.svg';

const Credits = () => {
  return (
    <>
      <div className='flex justify-evenly  items-center'>
        <div className='text-white grid grid-cols-1 gap-10 sm:grid-cols-3 lg:gap-80 sm:gap-20 text-sm mb-4 mt-6  '>
          <p className='whitespace-nowrap'>© Copyright 2025 WD Mastery </p>
          <p className='whitespace-nowrap'>Developed with <i className="fa-regular fa-heart "></i> by A.M</p>
          <div className='flex gap-4 cursor-pointer '>
            <img src={Github} alt="insta" />
            <img src={Linkedin} alt="insta" />
            <img src={Twitter} alt="insta" />
            <img src={Youtube} alt="insta" />
            <img src={instagram} alt="insta" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Credits