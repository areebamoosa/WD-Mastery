import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png';
import Button from '../Button/Button';

const Navbar = () => {

    return (
        <>
            <div className="text-white flex items-center justify-between fixed top-0 left-0 w-full z-50 px-4 sm:px-6 md:px-10 py-2 text-xs md:text-sm lg:text-base shadow-md">
                <NavLink to="/"><img src={logo} alt="logo" className='w-14 h-20  sm:w-auto  brightness-200' /></NavLink>
                <div className="flex space-x-6 font whitespace-nowrap">
                    <NavLink to="/courses" >All courses</NavLink>
                    <NavLink to="/path">Learning Path</NavLink>
                    <div className='mt-[-4px]'>
                        <NavLink to="/login" ><Button text={"Login "} width="sm:w-30 w-30" height="h-8 " /></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar