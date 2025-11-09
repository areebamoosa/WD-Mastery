import React from 'react'
import FaqCard from './FaqCard'

const faqs = [
  { id: 1, question: "What should I know before I join the platform?", answer: " You can be an experienced programmer, or just starting out - your learning path will lead you from where you are now to the WD Mastery." },
  { id: 2, question: "I'm already an experienced programmer. What can you offer me?", answer: "Even if you mastered web development already, you’ll find a ton of learning materials. Additionally, we keep our materials up to date." },
  { id: 3, question: "How is this different than your YouTube videos?", answer: "Our YouTube videos are included on the platform, but as Workshops - they are split to a smaller lessons and include additional insights into each part of the project." },
  { id: 4, question: "Will I acrually learn something, or is it just copy-pasting code?", answer: "Our courses and workshops include integrated code sandboxes and after-lesson quizzes, so your learning experience will be very hands-on." },
  { id: 5, question: "The available payment plans are too expensive for me.", answer: "We are offering a Starter Tier - it's completely free, and you still can find a lot of learning materials there." },
]

const Faq = () => {
  return (
    <>
      <div className='flex flex-col gap-4 '>
        {faqs.map((faq) => (
          <FaqCard key={faq.id}{...faq} />
        ))}
      </div>

    </>
  )
}

export default Faq