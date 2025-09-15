import React from 'react'
import PremiumCard from './PremiumCard'

const premium = [
  { id: 1, plan: "Personal Plan", people: "For you", members: "Individual", pricing: "Starting at $9.35 /month" },
  { id: 2, plan: "Personal Plan", people: "For you", members: "Individual", pricing: "Starting at $9.35 /month" },
  { id: 3, plan: "Personal Plan", people: "For you", members: "Individual", pricing: "Starting at $9.35 /month" },
]

const Premium = () => {
  return (
    <>
      <div className='grid grid-cols-3 gap-10 m-40 mt-[50px]  '>
        {premium.map(premium => (
          <PremiumCard key={premium.id} {...premium} />
        ))}
      </div>
    </>
  )
}

export default Premium