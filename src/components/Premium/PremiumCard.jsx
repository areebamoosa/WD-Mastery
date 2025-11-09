import React from 'react'
import Button from '../Button/Button'

const PremiumCard = ({ plan, people, members, pricing }) => {
  return (
    <>
      <div className='text-white card font w-85 h-80 md:w-65 lg:w-85 lg:h-80 p-4 flex flex-col gap-10 rounded-lg transition-shadow duration-300 hover:shadow-[0_4px_15px_#33a7ff]'>

        <div className='flex flex-col gap-2 card'>

          <div className='flex gap-3 card  items-center'>

            <i className="fa-solid fa-user card"></i>
            <h1 className='card text-base font-medium'>{plan}</h1>
          </div>

          <p className='card text-xs light'>{people}</p>
          <p className='card text-sm light'>{members}</p>

        </div>

        <div>
          <p className='card font-medium text-base'>{pricing}</p>
          <p className='card text-xs light'>Billed monthly or annually. Cancel anytime</p>
        </div>

        <div className='card flex justify-center items-center mt-5'>
          <Button text="Try it free" width="w-50" height="h-8" />
        </div>

      </div>
    </>
  )
}

export default PremiumCard