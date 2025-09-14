import React from 'react'

const ReviewCard = ({ img, name, review }) => {
  return (
    <div className='text-white p-6 rounded-md shadow-md card w-80 h-40 '>
      <div className='flex items-center mb-3 card mt-[-10px]'>
        <img
          src={img}
          alt="review-img"
          className="w-12 h-12 rounded-full object-cover mr-3"
        />
        <div>
          <h4 className='font-semibold text-sm card'>{name}</h4>
          <p className='text-xs light card'>Software Developer</p>
        </div>
      </div>

      <p className='text-xs text-gray-300 card'>{review}</p>

      <div className='flex text-yellow-400 mt-2'>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>

    </div>
  )
}

export default ReviewCard