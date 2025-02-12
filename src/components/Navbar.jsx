import React, { useState } from "react"; // import useState

const Navbar = () => {
  const [open, setOpen] = useState(false); // create a state variable open and setOpen function

  return (
    <div className="flex justify-between items-center py-4">
      {/* logo */}
      <div className="text-4xl font-bold flex items-center gap-4">
        <img src="/logo.jpeg" alt="logo" className="h-10 w-10 rounded-md" />
        <span className="text-blue-500">BLOGGER</span>
      </div>
      {/* nav links MOBILE MENU*/}
      <div className="md:hidden">
        <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
          {open ? "X" : "☰"}
        </div>
        <div>
          {open && (
            <div className="flex flex-col gap-8 absolute top-16 right-0 p-4 rounded-md w-full h-screen justify-center items-center transition-all ease-in-out duration-1000 bg-blue-100">
              <a href="/" className="mx-4 text-2xl">
                Home
              </a>
              <a href="/" className="mx-4 text-2xl">
                Trending
              </a>
              <a href="/" className="mx-4 text-2xl">
                Most Popular
              </a>
              <a href="/" className="mx-4 text-2xl">
                About
              </a>
              <a href="" className="mx-6 text-2xl">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl">
                  Login 🙋
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
      {/* nav links DESKTOP MENU*/}
      <div className="hidden md:flex gap-8 lg:gap-16 font-semiboldbold justify-center items-center ">
        <a href="/" >
          Home
        </a>
        <a href="/" >
          Trending
        </a>
        <a href="/">
          Most Popular
        </a>
        <a href="/" >
          About
        </a>
        <a href="">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-3xl">
            Login 🙋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
