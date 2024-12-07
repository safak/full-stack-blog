import React, { useState } from 'react'
import logo from '../../public/logo.png'

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full h-16 md:20 flex items-center justify-between'>
            {/* <Logo /> */}
            <div className="flex items-center gap-4 text-2xl font-bold">
                <img src={logo} className="w-8 h-8" alt="" />
                <span>lamalog</span>
            </div>
            {/* <MobileMenu /> */}
            <div className="md:hidden">
                <div className="cursor-pointer text-4xl" onClick={() => setOpen(prev => !prev)}>
                    {open ? "x" : "☰"}
                </div>
                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium absolute top-16 text-lg transition-all ease-out bg-[#e6e6ff] ${open ? "-right-0" : "-right-[100%]"}`}>
                    <a href="">Home</a>
                    <a href="">Trending</a>
                    <a href="">Most popular</a>
                    <a href="">About</a>
                    <a href="">
                        <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login</button>
                    </a>
                </div>
            </div>
            {/* <Desktop /> */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <a href="">Home</a>
                <a href="">Trending</a>
                <a href="">Most popular</a>
                <a href="">About</a>
                <a href="">
                    <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login</button>
                </a>
            </div>

        </div>
    )
}

export default NavBar