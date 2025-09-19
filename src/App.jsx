import React from "react";
import Hero from "./components/Hero-Page/Hero";
import Navbar from "./components/NavBar/Navbar";
import Courses from "./components/Courses/Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./components/Reviews/Review";
import Premium from "./components/Premium/Premium";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Credits from "./components/Footer/Credits";
import EmailCard from "./components/Footer/EmailCard";
import Faq from "./components/FAQS/Faq";

const App = () => {
  return (
    <>
      {/* Hero Page */}
      <Navbar />

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

      <Hero />

      {/* Courses Section */}

      {/* Courses Header */}

      <div className="text-white flex flex-col items-center font gap-4">
        <h1 className="text-4xl font-bold">Stop Watching. Start Building.</h1>
        <p className="light text-base">
          Full stack courses focused on outcomes, not watch time.
        </p>
      </div>

      {/* Courses Card Component */}

      <div className="m-15">
        <Router>
          <Routes>
            <Route path="/" element={<Courses />} />
          </Routes>
        </Router>
      </div>

      {/* Reviews Section */}

      {/* Review Header */}
      <div className="text-white  text-4xl font flex justify-center items-center gap-3 ">
        <h1 className="font-bold">What Devs Say About</h1>
        <h1 className="font-bold light-blue">WD Mastery</h1>
      </div>

      {/* Review Card component */}

      <Router>
        <Routes>
          <Route path="/" element={<Review />} />
        </Routes>
      </Router>

      {/* Premium Section */}

      {/* Premium Header */}

      <div className="text-white">
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

      <Router>
        <Routes>
          <Route path="/" element={<Premium />} />
        </Routes>
      </Router>

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
  );
};

export default App;