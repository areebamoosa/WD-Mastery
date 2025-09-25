import React from 'react'
import heroImage from '../../assets/hero-img.jpg';
import ReviewCard from '../Reviews/ReviewCard';
import reviews from '../Reviews/reviews';

const Hero = () => {
  return (
    <div className="mt-[-100px] grid grid-cols-3 items-center justify-center h-screen gap-8 m-20 group">

      {/* Left side 2 reviews */}
      <div className="flex flex-col gap-6 justify-center transition-all duration-300 ease-in-out group-hover:translate-x-10 group-hover:translate-y-5">
        {reviews.slice(0, 2).map((review, idx) => (
          <div key={review.id} className={idx === 0 ? "ml-12" : "ml-4"}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>

      {/* Center image */}
      <div className="flex justify-center">
        <img
          src={heroImage}
          alt="heroimage"
          className="max-w-[490px] w-full h-auto object-contain transition-all duration-300 ease-in-out group-hover:scale-90"
        />
      </div>

      {/* Right side 2 reviews */}
      <div className="flex flex-col gap-6 justify-center items-end transition-all duration-300 ease-in-out group-hover:-translate-x-10 group-hover:translate-y-5">
        {reviews.slice(2, 4).map((review, idx) => (
          <div key={review.id} className={idx === 0 ? "mr-12" : "mr-4"}>
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero