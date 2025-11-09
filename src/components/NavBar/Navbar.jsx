import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png';
import Button from '../Button/Button';

const Navbar = () => {

    return (
        <>
            <div className="text-white flex items-center justify-between fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-10 py-2 text-xs md:text-sm lg:text-base shadow-md">
                <div className='mt-2  ' >
                    <NavLink to="/"><img src={logo} alt="logo" className="h-20 w-auto brightness-200" /></NavLink>
                </div>

                <div className="flex space-x-6 font ">
                    <NavLink to="/courses" >All courses</NavLink>
                    <NavLink to="/path">Learning Path</NavLink>
                    <NavLink to="/login" className="mt-[-8px]"><Button text={"Login to your account"} width="w-40" height="h-8" /></NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar