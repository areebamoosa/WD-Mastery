import React from 'react'
import EmailCard from './EmailCard'

const Footer = () => {
    return (
        <>


            <div className="grid grid-cols-1 sm:grid-cols-6 px-16  mt-20 sm:gap-18 m-10 gap-10">

                <div className="sm:col-span-2 ">
                    <EmailCard />
                </div>

                <div>
                    <ul className="light text-xs font flex flex-col gap-4 whitespace-nowrap text-center sm:text-left ">

                        <li className="blue-text font-medium"><a href="#" onClick={(e) => e.preventDefault()}>COURSES</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}> Next.Js Course </a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>React.Js Course</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Backend Course</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Three.Js Course</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}> GSAP Course</a></li>
                    </ul>
                </div>

                <div>
                    <ul className="light text-xs font flex flex-col gap-4 whitespace-nowrap text-center sm:text-left">
                        <li className="blue-text font-medium"><a href="#" onClick={(e) => e.preventDefault()}>YOUR JOURNEY</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>All Courses</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Your Path</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Join Pro Circle</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()}>Start Your Streak</a></li>
                    </ul>
                </div>

                <div>
                    <ul className="light text-xs font flex flex-col gap-4 whitespace-nowrap text-center sm:text-left">
                        <li className="blue-text font-medium" onClick={(e) => e.preventDefault()}><a href="#">RESOURCES</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} >Blogs</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} >Youtube</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} >Github</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} >FAQs</a></li>
                    </ul>
                </div>

                <div>
                    <ul className="light text-xs font flex flex-col gap-4 whitespace-nowrap text-center sm:text-left">
                        <li className="blue-text font-medium"><a href="#" onClick={(e) => e.preventDefault()}>COMPANY</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} >Contact</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} >Terms Of Service</a></li>
                        <li><a href="#" onClick={(e) => e.preventDefault()} >Privacy Policy</a></li>
                    </ul>
                </div>
            </div>


        </>
    )
}

export default Footer