import React from 'react'
import Hero from './components/Hero-Page/Hero'
import Navbar from './components/NavBar/Navbar'
import Courses from './components/Courses/Courses'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <>
      {/* Hero Page */}
      <Navbar />

      {/* Main Hero Section Header */}

      <div className='text-white black flex flex-col  items-center gap-3  font '>
        <div>
          <h1 className='text-white text-4xl font-bold'>Go From</h1>
        </div>
        <div className='flex justify-center content-center gap-2 text-3xl font-bold'>
          <h1 className='orange font-bold '>I Know This </h1>
          <h1 className='font-bold'>to</h1>
          <h1 className='green font-bold'>I Built This</h1>
        </div>
        <div className='text-base light'>
          <p>Stop consuming. Start creating. Build real projects that get you hired.</p>
        </div>
      </div>

      <Hero />

      {/* Courses Section */}

      {/* Courses Header */}

      <div className='text-white flex flex-col items-center font gap-4'>
        <h1 className='text-4xl font-bold'>Stop Watching. Start Building.</h1>
        <p className='light text-base'>Full stack courses focused on outcomes, not watch time.</p>
      </div>

      {/* Courses Card Component */}

      <div className='m-15'>

        <Router>
          <Routes>
            <Route path="/" element={<Courses />} />
          </Routes>
        </Router>


      </div>

    </>
  )
}

export default App