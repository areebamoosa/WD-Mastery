import React from 'react'
import PremiumCard from './PremiumCard'

const premium = [
  { id: 1, plan: "Personal Plan", people: "For you", members: "Individual", pricing: "Starting at $9.35 /month", },
  { id: 2, plan: "Team Plan", people: "For your team", members: "2 to 50 people", pricing: "Starting at $30.00 a month per user" },
  { id: 3, plan: "Enterprise Plan", people: "For your whole organisation", members: "More than 50 people", pricing: "Contact sales for pricing" },
]

const Premium = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 sm:gap-6 lg:gap-6 mt-10 md:gap-6 gap-10'>
          {premium.map(premium => (
            <PremiumCard key={premium.id} {...premium} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Premium