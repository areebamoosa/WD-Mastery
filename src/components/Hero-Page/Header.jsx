import React from 'react'

const Header = () => {
    return (
        <>
            <div className='text-white black flex flex-col  items-center gap-3  font '>

                <div>
                    <h1 className='text-white text-4xl font-bold'>Go From</h1>
                </div>

                <div className='flex justify-center content-center gap-2 text-3xl font-bold'>
                    <h1 className='orange'>I Know This </h1>
                    <h1>to</h1>
                    <h1 className='green'>I Built This</h1>
                </div>

                <div className='text-base light'>
                    <p>Stop consuming. Start creating. Build real projects that get you hired.</p>
                </div>

            </div>
        </>
    )
}

export default Header