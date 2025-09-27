import React from 'react'
import Button from '../Button/Button'
import arrow from '../components/arrow.svg'

const Course = ({heading, desc, img}) => {
    return (
        <>
            <div>
                <div>
                    <h1>{heading}</h1>
                    <p>{desc}</p>
                    <Button text="Start Learning" width="w-70" height="h-10"/>
                    <button>Preview Lectures</button>
                </div>

                <div>
                    <img src={img} alt="img" />
                </div>
            </div>

            {/*  */}

            <div>
                <h1>Learn by <h1>Doing</h1>. Experiment in Real Time.</h1>
                <p>Inside each lesson, you'll find more than just videos.</p>

                <p>You'll get hands-on interaction with live components built directly into the course, powered by MDX.</p>

                <div>

                    <div>
                    <img src={arrow} alt="" />
                    <p>Built-in interactive playgrounds</p>
                    </div>

                    <div>
                    <img src={arrow} alt="" />
                    <p>Visual easing demos + live sliders</p>
                    </div>

                    <div>
                    <img src={arrow} alt="" />
                    <p>Edit GSAP animations and see the result instantly</p>
                    </div>

                </div>
            </div>

            {/* Certicate Section */}

            <div>

                <div>

                    <h1>Not Just Certified.</h1>
                    <h1>Backed by Mastery.</h1>
                    <p>This isn't a “watched a few videos” certificate.</p>
                    <p>It's your signal that you can animate like the top 1% of developers.</p>

                    <Button text="Join, 1000+ Devs" />

                </div>

                <div>
                    <img src="" alt="" />
                </div>

            </div>

            {/*  */}

            <div className="text-white  text-4xl font flex justify-center items-center gap-3 mt-20 ">
                <h1 className="font-bold">What Devs Say About</h1>
                <h1 className="font-bold light-blue">WD Mastery</h1>
            </div>

            <Review />

            {/*  */}

            {/* Popularity Section */}

            <div className="text-white flex flex-col justify-center items-center font m-15 mt-[-45px]">
                <h3 className="text-lg light">Developers love our content and we think you will, too.</h3>
                <div className="flex justify-center items-center gap-3 mt-10 ">
                    <div className=" card px-4 py-5 gap-2  rounded-md  transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <p className="card flex gap-2 justify-center items-center ">2,244 reviews on<i className="fa-solid fa-star card blue-text"></i>Trustpilot</p>
                    </div>
                    <div className="flex justify-center items-center  card px-15 py-5 gap-2 rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <img src={inst} alt="yt" className="card " />
                        <p className="card">300K+ followers </p>
                    </div>
                    <div className="flex justify-center items-center  card px-15 py-5 gap-2 rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <img src={yt} alt="yt" className="card " />
                        <p className="card">1.1M subscribers</p>
                    </div>
                    <div className="flex justify-center items-center  card px-15 py-5 gap-2 rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-2">
                        <img src={linkedin} alt="yt" className="card" />
                        <p className="card">200K followers</p>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className="flex justify-center gap-20 items-center mt-20 ">

                <div className="flex flex-col gap-2 mt-[-270px]">
                    <h1 className="text-4xl text-white font-bold font ">Frequently</h1>
                    <h1 className="text-4xl text-white font-bold font ">Asked Questions</h1>
                    <p className="text-base light font ">Your path to clarity and understanding</p>
                </div>

                {/* FAQ's Component */}
                <div>
                    <Faq />
                </div>
            </div>

            <div className="flex gap-6 flex-col justify-center items-center mt-25">
                <p className="text-base text-white">My question is answered! Take me to the pricing section!</p>
                <Button text="Become a Pro Member Now" width="w-70" height="h-10" />
            </div>

        </>
    )
}

export default Course