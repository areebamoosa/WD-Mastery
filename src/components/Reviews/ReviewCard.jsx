import React from 'react'

const ReviewCard = ({ img, name, review }) => {
  return (

    <div className="text-white lg:p-6 sm:p-3 p-2 card rounded-md lg:w-80 lg:h-45 sm:w-55 sm:h-40 transition-shadow duration-300 hover:shadow-[0_4px_15px_#33a7ff]">
      <div className='flex items-center lg:mb-3 card sm:mt-[-10px] '>
        <img
          src={img}
          alt="review-img"
          className=" w-10 h-10 lg:w-12 lg:h-12 sm:w-8 sm:h-8 rounded-full object-cover mr-3 mt-1"
        />
        <div>
          <h4 className='font-semibold text-xs lg:text-sm sm:text-xs card'>{name}</h4>
          <p className='text-xs light card'>Software Developer</p>
        </div>
      </div>

      <p className='text-xs text-gray-300 card'>{review}</p>

      <div className='flex blue-text sm:mt-2 card sm:text-xs lg:text-sm text-xs '>
        <i className="fa-solid fa-star card"></i>
        <i className="fa-solid fa-star card"></i>
        <i className="fa-solid fa-star card"></i>
        <i className="fa-solid fa-star card"></i>
        <i className="fa-solid fa-star card"></i>
      </div>

    </div>
  )
}

export default ReviewCard