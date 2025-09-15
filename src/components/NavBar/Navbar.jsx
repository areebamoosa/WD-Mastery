import React from 'react'
import { BrowserRouter, Routes, NavLink, Route } from 'react-router-dom'
import logo from '../../assets/logo.png';
import Button from '../Button/Button';


const Navbar = () => {
    return (
        <>
            <BrowserRouter>

                <div className='text-white flex items-center justify-between   text-xs font  black'>

                    <div className='mt-2 ml-20 mr-5 ' >
                        <NavLink ><img src={logo} alt="logo" className="h-20 w-auto brightness-200" /></NavLink>
                    </div>

                    <div className="flex space-x-6 font mt-2 ml-5 mr-5">
                        <NavLink>All courses</NavLink>
                        <NavLink>Learning Path</NavLink>
                        <NavLink><Button text={"Login to your account"} width="w-40" height="h-8" /></NavLink>
                    </div>

                </div>

                {/* <Routes>
                    <Route />
                    <Route />
                    <Route />
                </Routes> */}

            </BrowserRouter>
        </>
    )
}

export default Navbar