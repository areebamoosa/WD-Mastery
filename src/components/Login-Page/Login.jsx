import React from 'react'
import Button from "../Button/Button";
import Github from "../../assets/github.svg";
import Mail from "../../assets/mail.svg";

const Login = () => {
    return (
        <>
            <div className='text-white flex flex-col justify-center items-center mt-10 pt-24  '>
                <h1 className='text-2xl font font-semibold '>Log in to your account</h1>
                <div className="flex flex-col items-start sm:w-120 mt-15">
                    <label htmlFor="email" className="light font mt-5 text-xs text-left mb-2">Email address</label>
                    <input type="text" id="email" placeholder="Your email address" className="font card w-80 sm:w-120 p-3 rounded-md text-xs" />
                </div>
                <br />
                <Button text={"Log in"} width="w-60 sm:w-120" height="h-8" />
            </div>

            <div className='flex mt-10 justify-center items-center'>
                <hr className='w-58 text-gray-600' />
                <p className=' mr-2 ml-2 font text-xs light'>or</p>
                <hr className='text-gray-600 w-58' />
            </div>

            <div className="text-white flex gap-6 sm:gap-10 justify-center items-center mt-10">
                <button className="font card w-45 sm:w-55 h-10 flex items-center justify-center gap-3 px-3 rounded-md cursor-pointer">
                    <img src={Github} alt="git" className="w-5 h-5 card " />
                    <span className="card text-xs">Access with Github</span>
                </button>

                <button className="font card w-45 sm:w-55 h-10 flex items-center justify-center gap-3 px-3 rounded-md cursor-pointer">
                    <img src={Mail} alt="mail" className="w-5 h-5 card" />
                    <span className="card text-xs">Contact with Mail</span>
                </button>
            </div>
        </>
    )
}

export default Login