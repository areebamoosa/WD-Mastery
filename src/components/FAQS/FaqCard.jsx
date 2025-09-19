import React, { useState } from 'react'

const FaqCard = ({ id, question, answer, onClick }) => {

    const [faq, setFaq] = useState(false)

    return (
        <>
            <div className={`text-white w-140  text-nowrap  card  cursor-pointer   ${faq ? "border-0" : " rounded-md"} mt-10 `} onClick={() => setFaq(!faq)} >

                <div className={`flex justify-between card p-4  font ${faq ? "border-0" : " rounded-md"}`}>

                    <h4 className='blue-text card text-sm  font-medium '>{question}</h4>
                    <span className={`card  ${faq ? "rotate-180" : "rotate-0"}`} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                            className="w-4 h-4 card"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </span>

                </div>

                <div className={`${faq ? "block" : "hidden"} w-140 h-5`}>
                    <p className='light card font  cursor-pointer whitespace-normal break-words text-xs p-2 '>{answer}</p>
                </div>

            </div>

        </>
    )
}

export default FaqCard