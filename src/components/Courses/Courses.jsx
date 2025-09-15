import React from 'react'
import Card from './Card'
import c1 from  '../../assets/c1.png'
import c2 from  '../../assets/c2.png'


const courses = [
  {id: 1, title: "Web Animations Full Course", img: c1, desc:"Learn JSAP animation with WD Mastery."},
  {id: 2, title: "Web Animations Full Course", img: c1, desc:"Learn JSAP animation with WD Mastery."},
  {id: 3, title: "Web Animations Full Course", img: c1, desc:"Learn JSAP animation with WD Mastery."},
  {id: 4, title: "Web Animations Full Course", img: c1, desc:"Learn JSAP animation with WD Mastery."},
  {id: 5, title: "Web Animations Full Course", img: c1, desc:"Learn JSAP animation with WD Mastery."},
  {id: 6, title: "Web Animations Full Course", img: c1, desc:"Learn JSAP animation with WD Mastery."},
];

const Courses = () => {
  return (
    <>
    <div className='grid grid-cols-3 gap-6 '>
      {courses.map(course => (
        <Card key={course.id} {...course}/>
      ))}
    </div>
    </>
  )
}

export default Courses