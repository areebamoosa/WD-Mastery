import React from 'react'
import heroImage from '../../assets/hero-img.jpg';
import ReviewCard from '../Reviews/ReviewCard';
import reviews from '../Reviews/reviews';

const Hero = () => {
  return (
    <div className=" mt-[-150px] sm:mt-[-130px] lg:mt-[-100px] grid grid-cols-3 items-center justify-center h-screen lg:gap-8 lg:m-20 sm:gap-4 sm:mb-8 sm:mr-2 sm:ml-2 group mr-1 ml-1 ">

      {/* Left side 2 reviews */}
      <div className="flex flex-col lg:gap-6  sm:gap-3 gap-12 justify-center transition-all duration-300 ease-in-out group-hover:translate-x-10 group-hover:translate-y-5">
        {reviews.slice(0, 2).map((review, idx) => (
          <div key={review.id} className={idx === 0 ? "ml-1  sm:ml-1 lg:ml-12" : "ml-1  lg:ml-4 sm:ml-1"}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>

      {/* Center image */}
      <div className="flex justify-center">
        <img
          src={heroImage}
          alt="heroimage"
          className=" max-w-[180px]  md:w-[240px] lg:max-w-[490px] w-full h-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-90"
        />
      </div>

      {/* Right side 2 reviews */}
      <div className="flex flex-col lg:gap-6  sm:gap-3 gap-12 justify-center items-end transition-all duration-300 ease-in-out group-hover:-translate-x-10 group-hover:translate-y-5">
        {reviews.slice(2, 4).map((review, idx) => (
          <div key={review.id} className={idx === 0 ? "ml-1 sm:ml-1 lg:mr-12" : "ml-1 lg:ml-4 sm:ml-1"}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero