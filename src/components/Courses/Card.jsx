import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ id, title, img, desc }) => {
  return (
    <>

      <Link to={`/course/${id}`} >

        <div className=' rounded-2xl p-4 shadow-lg border border-yellow-500 hover:scale-105 transition flex flex-col gap-2 items-start justify-start w-90 h-80 card'>

          <img src={img} alt="course-img" className='h-40 object-left object-contain card' />
          <h2 className='text-white font-bold text-lg card'>{title}</h2>
          <p className='light text-sm card'>{desc}...</p>

          <div>
            <p className='light-blue card'>Check it now </p>
            {/* <p><i className="fa-solid fa-arrow-up"></i></p> */}
          </div>

        </div>

      </Link>

    </>
  )
}

export default Card