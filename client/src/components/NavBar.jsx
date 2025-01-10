import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const NavBar = () => {
    const [select, setSelect] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-primary-color p-4 h-16 w-full md:h-20 flex items-center justify-between md:px-8 lg:px-16 lx:px-32 2xl:px-64">
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <Image src="/btechlogs.png" alt="BTechBlogs" className="w-40" w={900} h={214}/>
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
                    <Link to="/" onClick={() => setSelect("home")} className={`${select === "home" ? "underline" : ""} text-white`}>Home</Link>
                    <Link to="/posts" onClick={() => setSelect("posts")} className={`${select === "posts" ? "underline" : ""} text-white`}>Explore</Link>
                    <Link to="/write" onClick={() => setSelect("write")} className={`${select === "write" ? "underline" : ""} text-white`}>Share</Link>
                    <Link to="/">
                        <button className="py-2 px-2 rounded-3xl bg-blue-800 text-white">Log In</button>
                    </Link>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                    <Link to="/" onClick={() => setSelect("home")} className={`${select === "home" ? "text-white underline" : "text-white"}`}>Home</Link>
                    <Link to="/posts" onClick={() => setSelect("posts")} className={`${select === "posts" ? "text-white underline" : "text-white"}`}>Explore</Link>
                    <Link to="/write" onClick={() => setSelect("write")} className={`${select === "write" ? "text-white underline" : "text-white"}`}>Share</Link>
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