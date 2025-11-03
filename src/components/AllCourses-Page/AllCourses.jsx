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
            <div className="flex flex-col justify-center items-center mt-20 pt-24">
                <div className="text-white text-5xl font font-bold  ">
                    <h1>Courses That Take You</h1>
                    <div className="flex gap-3">
                        <h1>From</h1>
                        <h1 className="gold">Learning</h1>
                        <h1>to</h1>
                        <h1 className="green">Doing</h1>
                    </div>
                </div>
                <p className="light mt-5 text-lg">Learn the skills. Build the portfolio. Get the job.</p>
            </div>

            <div className="flex justify-center items-center mt-8 gap-6">
                <img src={js} alt="js" className="w-12 h-12 object-contain " />
                <img src={next} alt="next" className="w-12 h-12 object-contain" />
                <img src={react} alt="react" className="w-12 h-12 object-contain" />
                <img src={tailwind} alt="tailwind" className="w-12 h-12 object-contain" />
                <img src={threejs} alt="threejs" className="w-12 h-12 object-contain" />
                <img src={native} alt="native" className="w-12 h-12 object-contain" />
            </div>


            <div className="m-15">

                <h1 className="text-2xl text-white ml-15 mt-20 ">Courses</h1>
                <Courses />
            </div>


            <div className="text-3xl font text-white font-semibold flex gap-1 justify-center items-center mt-25">
                <h3 className="gold">Wait... </h3>
                <h3>But what if I want to learn</h3>
                <h3 className="green">EVERYTHING</h3>
                <h3>?</h3>
            </div>

            <div className="text-4xl text-white font font-semibold flex gap-2 justify-center items-center mt-15">
                <h1>Become a </h1>
                <h1 className="blue-text">Member</h1>
            </div>

            <Premium />

            <div className="flex gap-6 flex-col justify-center items-center mt-[-40px]">
                <Button text="Become a Member" width="w-70" height="h-10" />
            </div>

            <hr className="blue-text mt-15" />

            <Footer />
            <Credits />
        </>
    )
}

export default AllCourses