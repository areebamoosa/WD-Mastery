import React from 'react'
import instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedinsvg.svg';
import Twitter from '../../assets/twitter.svg';
import Youtube from '../../assets/youtube.svg';
import Github from '../../assets/github.svg';


const Credits = () => {
  return (
    <>
      <div className='text-white flex justify-evenly items-center text-sm mb-10 '>

        <p className='ml-[-160px]'>©Copyright 2025 WD Mastery Pro</p>

        <p>Designed with by A.M</p>

        <div className='flex gap-4'>
          <img src={Github} alt="insta" />
          <img src={Linkedin} alt="insta" />
          <img src={Twitter} alt="insta" />
          <img src={Youtube} alt="insta" />
          <img src={instagram} alt="insta" />

        </div>

      </div>

    </>
  )
}

export default Credits