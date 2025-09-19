import React from 'react'
import { BrowserRouter, Routes, NavLink, Route } from 'react-router-dom'
import logo from '../../assets/logo.png';
import Button from '../Button/Button';



// Importing the pages 
import Path from '../Learning-Page/Path';


const Navbar = () => {
    return (
        <>
                <div className='text-white flex items-center justify-between   text-xs font  black'>

                    <div className='mt-2 ml-20 mr-5 ' >
                        <NavLink to = "/"><img src={logo} alt="logo" className="h-20 w-auto brightness-200" /></NavLink>
                    </div>

                    <div className="flex space-x-6 font mt-2 ml-5 mr-5">
                        <NavLink>All courses</NavLink>
                        <NavLink to="/path">Learning Path</NavLink>
                        <NavLink to="/login"><Button text={"Login to your account"} width="w-40" height="h-8"  /></NavLink>
                    </div>

                </div>



        </>
    )
}

export default Navbar