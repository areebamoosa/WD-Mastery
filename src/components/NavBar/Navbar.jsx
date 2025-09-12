import React from 'react'
import { BrowserRouter, Routes, NavLink, Route } from 'react-router-dom'
import logo from '../../assets/logo.png';


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
                        <NavLink className="blue text-blue-800 border px-3 py-1.5 rounded-md font-medium mt-[-8px]">Login to your account</NavLink>
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