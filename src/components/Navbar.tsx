  
  import { useState } from "react";
  import MobileNavbar from "./MobileNavbar";
  export default function Navbar() {
    const [toggelNav , setToggelNav] = useState<boolean>(false)
    return (
      <nav className="flex  items-center z-10 fixed  w-screen md:justify-center p-3  backdrop-blur-lg  bg-[#262727] bg-opacity-30 " id="about">
        <div className="flex w-1/3 items-center justify-center md:gap-3 gap-2 pl-8 md:pl-0">
          <img
            src="/authentic_leather__1_-removebg-preview.png"
            alt="My Logo"
            className="h-12 w-12"
          />
          <h1 className="text-3xl font-semibold tracking-wider  text-yellow-400">
            Codev
          </h1>
        </div>
        <div className="md:flex hidden w-full items-center md:justify-end gap-8 py-2 lg:justify-end lg:pr-16">
          <ul className="flex items-center gap-6 text-xl hover:cursor-pointer text-yellow-300 ">
            <li className="font-medium tracking-wide  ">
              <a href="#aboutme">About me</a>
            </li>
            <li className="font-medium tracking-wide ">
              <a href="#skills">Skills</a>
            </li>
            <li className="font-medium tracking-wide ">
              <a href="#projects">Projects</a>
            </li>
            <li className="font-medium tracking-wide ">
              <a href="#contactme">Contact me</a>
            </li>
          </ul>
        </div>
        <div className="md:hidden w-full flex items-center justify-end">
        <MobileNavbar toggelNav={toggelNav} setToggelNav={setToggelNav} />

        </div>
        
      </nav>
    );
  }
