  import DarkModeToggle from "./DarkMode";
  import { useState } from "react";
  import MobileNavbar from "./MobileNavbar";
  export default function Navbar() {
    const [toggelNav , setToggelNav] = useState<boolean>(false)
    return (
      <nav className="flex  items-center z-10 fixed y w-screen md:justify-center p-3  backdrop-blur-lg bg-gray-50 drop-shadow-sm  dark:bg-[#010B13] dark:bg-opacity-0 " id="about">
        <div className="flex w-1/3 items-center justify-center md:gap-3 gap-2 pl-8 md:pl-0">
          <img
            src="/authentic_leather__1_-removebg-preview.png"
            alt="My Logo"
            className="h-12 w-12"
          />
          <h1 className="text-3xl font-semibold tracking-wider text-purple-700 dark:text-white">
            Codev
          </h1>
        </div>
        <div className="md:flex hidden w-full items-center md:justify-end gap-8 py-2 lg:justify-around">
          <ul className="flex items-center gap-6 text-xl hover:cursor-pointer text-purple-700 dark:text-white ">
            <li className="font-medium tracking-wide hover:transition-colors dark:hover:text-gray-400 ">
              <a href="#aboutme">About me</a>
            </li>
            <li className="font-medium tracking-wide hover:transition-colors dark:hover:text-gray-400">
              <a href="#skills">Skills</a>
            </li>
            <li className="font-medium tracking-wide hover:transition-colors dark:hover:text-gray-400">
              <a href="#projects">Projects</a>
            </li>
            <li className="font-medium tracking-wide hover:transition-colors dark:hover:text-gray-400">
              <a href="#contactme">Contact me</a>
            </li>
          </ul>
          <DarkModeToggle />
        </div>
        <div className="md:hidden w-full flex items-center justify-end">
        <MobileNavbar toggelNav={toggelNav} setToggelNav={setToggelNav} />

        </div>
        
      </nav>
    );
  }
