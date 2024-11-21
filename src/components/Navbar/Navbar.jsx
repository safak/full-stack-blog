import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>AreaBlog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {/* MOBILE BUTTON */}
          {isOpen ? (
            <svg
              viewBox="0 0 100 100"
              width="20px"
              height="20px"
              className="transform -rotate-90 transition-all duration-300"
            >
              <line
                x1="10"
                y1="10"
                x2="90"
                y2="90"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
              <line
                x1="90"
                y1="10"
                x2="10"
                y2="90"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                className="transition-all duration-300"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 100 80"
              width="20px"
              height="20px"
              className="transition-all duration-300"
            >
              <rect width="100" height="15" rx="8"></rect>
              <rect y="30" width="100" height="15" rx="8"></rect>
              <rect y="60" width="100" height="15" rx="8"></rect>
            </svg>
          )}
        </div>
        {/* MOBO LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center bg-white absolute top-16 transition-all duration-300 ease-in-out ${
            isOpen ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="px-4 py-2 bg-blue-800 rounded-3xl text-white">
              Login
            </button>
          </a>
        </div>
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="px-4 py-2 bg-blue-800 rounded-3xl text-white">
            Login
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
