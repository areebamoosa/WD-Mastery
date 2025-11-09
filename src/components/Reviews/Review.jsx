import React from 'react'
import ReviewCard from './ReviewCard'
import r1 from '../../assets/r1.png'
import r2 from '../../assets/r2.png'
import r3 from '../../assets/r3.png'
import r4 from '../../assets/r4.png'
import r5 from '../../assets/r5.png'
import r6 from '../../assets/r6.jpg'
import r7 from '../../assets/r7.png'
import r8 from '../../assets/r8.png'

const reviews = [
    { id: 1, img: r1, name: "Jeremy Mc Cabe", review: "The focus on core concepts made everything click. After watching Adrian's free content, I knew I had to invest in the full course." },
    { id: 2, img: r2, name: "Alex Kair", review: "Ayra breaks down complex topics effortlessly. Learning about runtime environments and writing code like a senior developer was a game-changer for me." },
    { id: 3, img: r3, name: "Jeremy Mc Cabe", review: "I got a job using your 3D portfolio tutorial. You literally changed my life thank you! Always rooting for you." },
    { id: 4, img: r4, name: "Community Member", review: "I gained production-level skills I never learned on the job, like optimizing function flow and server actions. This course filled gaps my work experience couldn't." },
    { id: 5, img: r5, name: "Alvin Kulsumo", review: "WD's tutorials are clear, modern, and practical. They helped me build real projects that impressed employers. If you want to learn web dev the right way, this is it." },
    { id: 6, img: r6, name: "Lucas Sousa", review: "Starting out can feel overwhelming, even after a bootcamp, but this program is unique in its strong mentor support, hands-on projects and help with side projects." },
    { id: 7, img: r7, name: "Santiago Laight", review: "File-based routing, dynamic routes, API creation—Adrian made it all simple. JSM Pro has transformed how I understand web development." },
    { id: 8, img: r8, name: "Anyars Yussif", review: "Ayra is the best tutor! I finally understand backend architecture, especially Next.js, which always confused me. Now, I can confidently tackle any project." },
    { id: 9, img: r1, name: "Musawir Raaji", review: "I've been following WD Mastery since 2024, and no other resource compares. The content is always up to date, detailed, and incredibly well-explained." },
]

const Review = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='grid  grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12 mt-10 '>
                    {reviews.map(review => (
                        <ReviewCard key={review.id} {...review} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Review