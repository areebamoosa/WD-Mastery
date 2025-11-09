import React from 'react'
import Card from './Card'
import c1 from '../../assets/c1.png'
import c2 from '../../assets/c2.png'
import c3 from '../../assets/c3.png'
import c4 from '../../assets/c4.png'
import c5 from '../../assets/c5.png'
import c6 from '../../assets/c6.png'

const courses = [
  { id: 1, title: "Web Animations Full Course", img: c1, desc: "Learn JSAP animation with WD Mastery.Practical tutorials, real projects with" },
  { id: 2, title: "The Ultimate Next.js Course", img: c2, desc: "Learn Next.js from the ground up and build production-ready, fullstack React JS apps wit" },
  { id: 3, title: "Vanilla Three.js Course", img: c3, desc: "JavaScript-based Web engine that can run GPU powered games and other graphics" },
  { id: 4, title: "Build and launch your Saas in  7 Days", img: c4, desc: "A complete masterclass for quickly designing, developing, deploying and monetizing your  " },
  { id: 5, title: "Database Mystery : SQL to Prisma", img: c5, desc: "Learn to build and use Databases with SQL and Prisma" },
  { id: 6, title: "Complete Path to JavaScript Mastery", img: c6, desc: "Master JavaScript, the language of the web! Learn variable, datatypes, functions, DOM " },
];

const Courses = () => {
  return (
    <>
<div className="max-w-screen-xl mx-auto px-4">

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 gap-6  '>
        {courses.map(course => (
          <Card key={course.id} {...course} />
        ))}
      </div>
      </div>

    </>
  )
}

export default Courses