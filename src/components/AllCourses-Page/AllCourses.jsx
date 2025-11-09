import React from 'react'
import Courses from '../Courses/Courses'
import Premium from '../Premium/Premium'
import Footer from '../Footer/Footer'
import Credits from '../Footer/Credits'
import Button from '../Button/Button'
import js from '../../assets/js.svg'
import next from '../../assets/next.svg'
import native from '../../assets/react-native.svg'
import react from '../../assets/react.svg'
import tailwind from '../../assets/tailwind.svg'
import threejs from '../../assets/three-js.svg'

const AllCourses = () => {
    return (
        <>


            <div className="flex flex-col justify-center items-center mt-40 text-center">
                <div className="text-white font font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">
                    <h1>Courses That Take You</h1>
                    <div className="flex gap-3">
                        <h1>From</h1>
                        <h1 className="gold">Learning</h1>
                        <h1>to</h1>
                        <h1 className="green">Doing</h1>
                    </div>
                </div>
                <p className="light mt-5 text-sm sm:text-base md:text-lg ">Learn the skills. Build the portfolio. Get the job.</p>
            </div>

            <div className="flex justify-center items-center mt-8 gap-4 sm:gap-6 ">
                <img src={js} alt="js" className="w-10 h-10 sm:w-12 sm:h-12  object-contain " />
                <img src={next} alt="next" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <img src={react} alt="react" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <img src={tailwind} alt="tailwind" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <img src={threejs} alt="threejs" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                <img src={native} alt="native" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>

            <h1 className="text-3xl text-white mt-20 text-center">Courses</h1>


            <div className="flex justify-center items-center flex-col mt-10 m-2 ">
                <Courses />
            </div>


            <div className=" sm:text-xl md:text-2xl lg:text-3xl font text-white font-semibold flex gap-1 justify-center items-center mt-25">
                <h3 className="gold">Wait... </h3>
                <h3>But what if I want to learn</h3>
                <h3 className="green">EVERYTHING</h3>
                <h3>?</h3>
            </div>

            <div className="text-xl sm:text-xl md:text-2xl lg:text-3xl text-white font font-semibold flex gap-2 justify-center items-center mt-15">
                <h1>Become a </h1>
                <h1 className="blue-text">Member</h1>
            </div>

            <Premium />

            <div className="flex  flex-col justify-center items-center mt-10">
                <Button text="Become a Member" width="w-70" height="h-10" />
            </div>

            <hr className="blue-text mt-15" />

            <div className='flex justify-center items-center'>
            <Footer />

            </div>

            {/* <Credits /> */}



        </>
    )
}

export default AllCourses