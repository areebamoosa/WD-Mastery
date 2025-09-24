import React from "react";
import Hero from "./components/Hero-Page/Hero";
import Navbar from "./components/NavBar/Navbar";
import Courses from "./components/Courses/Courses";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Review from "./components/Reviews/Review";
import Premium from "./components/Premium/Premium";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Credits from "./components/Footer/Credits";
import EmailCard from "./components/Footer/EmailCard";
import Faq from "./components/FAQS/Faq";
import Path from "./components/Learning-Page/Path";
import Login from "./components/Login-Page/Login";
import yt from './assets/youtube.svg'
import inst from './assets/instagram.svg'
import linkedin from './assets/linkedinsvg.svg'
import qoma from './assets/quote.svg'
import adidas from './assets/adidas.svg'
import adobe from './assets/adobe.svg'
import amazon from './assets/amazon.svg'
import linear from './assets/linear.svg'
import loom from './assets/loom.svg'
import microsoft from './assets/microsoft.svg'
import nike from './assets/nike.svg'
import nvidia from './assets/nvidia.svg'
import shopify from './assets/shopify.svg'

const App = () => {
  return (
    <>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path="/" element={<>

            {/* Hero Page */}

            {/* Main Hero Section Header */}

            <div className="text-white black flex flex-col  items-center gap-3  font ">
              <div>
                <h1 className="text-white text-4xl font-bold">Go From</h1>
              </div>
              <div className="flex justify-center content-center gap-2 text-3xl font-bold">
                <h1 className="orange font-bold ">I Know This </h1>
                <h1 className="font-bold">to</h1>
                <h1 className="green font-bold">I Built This</h1>
              </div>
              <div className="text-base light">
                <p>
                  Stop consuming. Start creating. Build real projects that get you
                  hired.
                </p>
              </div>
            </div>

            {/* Hero section component */}

            <Hero />

            {/* Customer's job places section */}

            <div className="flex flex-col justify-center items-center ">
              <div>
                <p className="light font">They Started Like You. Now They Work Here</p>
              </div>
              <div className="gap-8 mt-8 relative w-[500px] ">
                <div className="flex gap-8 animate-slide justify-center items-center ">
                  <img src={microsoft} alt="microsoft" />
                  <img src={shopify} alt="shopify" />
                  <img src={amazon} alt="amazon" />
                  <img src={nike} alt="nike" />
                  <img src={adidas} alt="adidas" />
                  <img src={nvidia} alt="nvidia" />
                  <img src={loom} alt="loom" />
                  <img src={adobe} alt="adobe" />
                  <img src={linear} alt="linear" />
                  <img src={microsoft} alt="microsoft" />
                  <img src={shopify} alt="shopify" />
                  <img src={amazon} alt="amazon" />
                  <img src={nike} alt="nike" />
                </div >
              </div>
            </div>

            {/* Courses Section */}

            {/* Courses Header */}

            <div className="text-white flex flex-col items-center font gap-4 mt-30">
              <h1 className="text-4xl font-bold">Stop Watching. Start Building.</h1>
              <p className="light text-base">
                Full stack courses focused on outcomes, not watch time.
              </p>
            </div>

            {/* Courses Card Component */}

            <div className="m-15">
              <Courses />
            </div>

            <div className="flex justify-center items-center">

              <Button text="View All Courses" width="w-100" height="h-10" />
            </div>

            {/* Reviews Section */}

            {/* Review Header */}
            <div className="text-white  text-4xl font flex justify-center items-center gap-3 mt-20 ">
              <h1 className="font-bold">What Devs Say About</h1>
              <h1 className="font-bold light-blue">WD Mastery</h1>
            </div>

            {/* Review Card component */}
            <Review />

            {/* Popularity Section */}

            <div className="text-white flex flex-col justify-center items-center font m-15">
              <h3 className="text-lg light">Developers love our content and we think you will, too.</h3>
              <div className="flex justify-center items-center gap-10 mt-10 ">
                <div className=" card px-4 py-5 gap-2  rounded-md ">
                  <p className="card flex gap-2 justify-center items-center ">2,244 reviews on<i className="fa-solid fa-star card blue-text"></i>Trustpilot</p>
                </div>
                <div className="flex justify-center items-center  card px-15 py-5 gap-2 rounded-md">
                  <img src={inst} alt="yt" className="card " />
                  <p className="card">300K+ followers </p>
                </div>
                <div className="flex justify-center items-center  card px-15 py-5 gap-2 rounded-md">
                  <img src={yt} alt="yt" className="card " />
                  <p className="card">1.1M subscribers</p>
                </div>
                <div className="flex justify-center items-center  card px-15 py-5 gap-2 rounded-md">
                  <img src={linkedin} alt="yt" className="card" />
                  <p className="card">200K followers</p>
                </div>
              </div>
            </div>

            {/* Quote Section */}

            <div className="flex justify-center items-center mt-20" >
              <img src={qoma} alt="qoma" className="mb-30 " />
              <div className="flex flex-col justify-center items-center text-2xl font-bold font email-card rounded-xl w-250 p-8">
                <div className="light flex gap-1 email-card">
                  <p className="blue-text email-card">Every developer</p>
                  <p className="email-card">hits</p>
                  <p className="gold email-card">roadblocks</p>
                  <p className="email-card">.The kind that makes you want to</p>
                </div>
                <div className="light flex gap-1 email-card">
                  <p className="email-card">throw your laptop out the window. </p>
                  <p className="red email-card">You're not alone</p>
                  <p className="email-card">.</p>
                </div>
              </div>
              <img src={qoma} alt="qoma" style={{ transform: "rotate(180deg)" }} className="mt-30" />
            </div>

            {/* Premium Section */}

            {/* Premium Header */}

            <div className="text-white mt-25">
              <div className="text-4xl  flex gap-2 justify-center items-center ">
                <h1 className="font font-bold ">Join the</h1>
                <h1 className="font font-bold light-blue">Pro Circle</h1>
                <h1 className="font font-medium ">-</h1>
                <h1 className="font font-medium text-3xl">
                  for you or your organization
                </h1>
              </div>
              <p className="flex justify-center items-center mt-4 text-sm">
                Reach goals faster with one of our plans or programs. Try one free
                today or contact sales to learn more
              </p>
            </div>

            {/* Premium Card Component */}

            <Premium />

            <div className="flex justify-center items-center mt-[-100px]">
              <Button text="Subscribe to WD Mastery" width="w-100" height="h-10" />
            </div>

            {/* FAQS Section */}

            {/* Faqs Heading */}

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
              <p className="text-base text-white">My questions are answered, and I'm ready to... </p>
              <Button text="Become a Pro Member Now" width="w-70" height="h-10" />
            </div>

            {/* Footer Component */}

            <hr className="blue-text mt-15" />
            <Footer />
            <Credits />
          </>
          } />

          <Route path="/path" element={<Path />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/reviews" element={<Review />} />
          <Route path="/premium" element={<Premium />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;