import React from 'react'
import Button from '../Button/Button'

const PremiumCard = ({ plan, people, members, pricing }) => {
  return (
    <>
      <div className='text-white card font w-85 h-100  p-4 flex flex-col gap-6 rounded-lg'>

        <div className='flex flex-col gap-2 card'>

          <h1 className='card text-base font-medium'>{plan}</h1>
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