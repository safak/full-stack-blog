import { useState } from 'react'
import Logo from '../../public/logo.svg'
import { MdMenuOpen, MdOutlineClear } from "react-icons/md";



const Navbar = () => {

    const [open, setopen] = useState(false)
    return (
        <>
            <div className='w-full h-16 md:h-20 flex items-center justify-between'>

                <div className='flex items-center gap-2'>
                    <img className='w-10 h-10 ' src={Logo} alt="logo" />
                    <span>SAM</span>
                </div>

                {/*menu mobile */}
                <div className='md:hidden'>
                    <div className='cursor-pointer text-4xl' onClick={() => setopen((prev) => !prev)}>
                        {open ? <MdOutlineClear /> : <MdMenuOpen />}
                    </div>
                    {/*menu list*/}
                    <div className={`w-full h-screen flex flex-col items-center absolute justify-center opacity-60 delay-150
                         ${open ? "right-0" : "right-[-100%]"}`}>
                        <div className=''>
                            <ul>
                                <li>home </li>
                            </ul>

                        </div>
                    </div>
                </div>
                {/*menu desktop*/}
                <div className='hidden md:flex'>
                    <button className='bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800'>login</button>
                </div>

            </div>
        </>
    )
}

export default Navbar
