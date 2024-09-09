"use client"
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import logo from "@/public/logo.jpg";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { SiPolymerproject } from "react-icons/si";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BiRocket } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { MdOutlineFileDownload } from "react-icons/md";
import { Turn as Hamburger } from 'hamburger-react'
import { useState } from "react";

const resumepdf = "/vinitsinghresume.pdf"
export default function MobileNav() {
    const [isOpen, setOpen] = useState<boolean>(false)
  const pathname = usePathname();
  return (
    <>
    <header className=" w-full  flex-col  ">
      <nav className="py-4 flex flex-col gap-4 ">
        <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 px-4">
        <div className=" relative w-12 h-12  ">
          <Image
            src={logo}
            alt="Logo"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="flex items-center text-xl gap-2 font-medium">
            Vinit Singh{" "}
            <span>
              <MdVerified className="text-[--color-primary]" />
            </span>
          </h3>
        </div>
        </div>
        <div className="px-4">
        <Hamburger toggled={isOpen} size={25} toggle={setOpen} direction="right" easing="ease-in"  />
        </div>
        </div>
   
       { isOpen && <div className="flex flex-col items-center gap-4 animate-open">
        <div className="mt-4 w-full px-6">
          <ul className="flex w-full flex-col gap-2 text-[17px] items-center justify-center cursor-pointer transition-all duration-300  ">
            <Link href="/" className={`flex items-center justify-center w-full hover:bg-neutral-800 py-2 px-3   group rounded-lg gap-2 ${pathname ==="/"?"active":""} ` }>
              <span className="group-hover:-rotate-12 animate-icon ">
                <IoHome />
              </span>
              <li>Home</li>
            </Link>
            <Link href="/projects" className={`flex items-center w-full justify-center hover:bg-neutral-800 py-2 px-3 group rounded-lg gap-2 ${pathname==="/projects"?"active":""}`}>
              <span className="group-hover:-rotate-12 animate-icon">
                <SiPolymerproject />
              </span>
              <li>Projects</li>
            </Link>
            <Link href="/about" className={`flex items-center w-full justify-center hover:bg-neutral-800 py-2 px-3 group gap-2 rounded-lg ${pathname==="/about"?"active":""}`}>
              <span className="group-hover:-rotate-12 animate-icon">
                <RiContactsBook2Fill />
              </span>
              <li >About</li>
            </Link>
            <Link href="/contact" className={`flex items-center w-full justify-center hover:bg-neutral-800 py-2 px-3 group rounded-lg gap-2 ${pathname==="/contact"?"active":""}`}>
              <span className="group-hover:-rotate-12 animate-icon">
                <BiRocket />
              </span>
              <li >Contact</li>
            </Link>
          </ul>
        </div>
       
      <div className="laptop:pl-20 ">
      <a
          href={resumepdf}
          download="vinitsinghresume.pdf"
          className="flex items-center justify-between  rounded-lg gap-2 transition-all duration-300 bg-neutral-800 p-3 hover:text-neutral-300"
        >
          Download Resume{" "}
          <span className="animate-pulse">
            <MdOutlineFileDownload />
          </span>
        </a>
      </div>
      </div>
}
      </nav>
    </header>
         <div
         className=" border-t border-gray-200 dark:border-neutral-800"
         
       ></div>
       </>
  );
}
