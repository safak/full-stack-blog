import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between relative">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="inshavelogo.png" className="w-19 h-16" alt="Logo" />
        <span>Inshave</span>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
      </div>

      {/* MOBILE LINK LIST */}
      <div
        className={` h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
      >
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <button className="py-2 px-4 rounded-xl bg-blue-800 text-white">
          Login 👋
        </button>
      </div>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <button className="py-2 px-4 rounded-xl bg-blue-800 text-white">
          Login 👋
        </button>
      </div>
    </div>
  );
};

export default Navbar;
