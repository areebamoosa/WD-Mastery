import React from 'react'
import ReviewCard from './ReviewCard'
import j from '../../assets/jeremy.png'

const reviews = [
    { id: 1, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 2, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 3, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 4, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 5, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 6, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 7, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 8, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 9, img: j, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
]

const Review = () => {
    return (
        <>
            <div className='grid grid-cols-3 gap-3 mt-10 m-[145px]'>
                {reviews.map(review => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </div>
        </>
    )
}

export default Review