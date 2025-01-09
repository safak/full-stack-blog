import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <Image src="logo.png" className="w-8 h-8" alt="BVLog" w={32} h={32}/>
                <span>VSBLog</span>
            </Link>
            <div className="md:hidden">
                <div 
                    className="cursor-pointer text-4xl" 
                    onClick={() => setOpen((prev) => !prev)}
                >
                    {open ? "X" : "≡"}
                </div>
                <div 
                    className={`w-full h-screen flex flex-col items-center jusitfy-center gap-8 font-medium text-lg absolute top-16 background-color: #e6e6ff transition-all ease-in-out ${
                        open ? "-right-0" : "-right-[100%]"
                    }`}
                >
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/">
                        <button className="py-2 px-2 rounded-3xl bg-blue-800 text-white">Log In</button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-2 rounded-3xl bg-blue-800 text-white">Log In</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    );
};

export default NavBar;