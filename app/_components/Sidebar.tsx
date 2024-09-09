"use client";
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


const resumepdf:string = "/vinitsinghresume.pdf"
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <header className="laptop:h-full w-full laptop:flex flex-col justify-between pb-8 hidden ">
      <nav className="laptop:pl-20 py-8 flex flex-col gap-4 ">
        <div className=" relative w-20 h-20">
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
          <p className="text-neutral-400">@vinitsingh</p>
        </div>
        <div className="mt-4">
          <ul className="flex flex-col gap-2 text-[17px] cursor-pointer transition-all duration-300  ">
            <Link
              href="/"
              className={`flex items-center hover:bg-neutral-800 py-2 px-3   group rounded-lg gap-2 ${
                pathname === "/" ? "active" : ""
              } `}
            >
              <span className="group-hover:-rotate-12 animate-icon ">
                <IoHome />
              </span>
              <li>Home</li>
            </Link>
            <Link
              href="/projects"
              className={`flex items-center hover:bg-neutral-800 py-2 px-3 group rounded-lg gap-2 ${
                pathname === "/projects" ? "active" : ""
              }`}
            >
              <span className="group-hover:-rotate-12 animate-icon">
                <SiPolymerproject />
              </span>
              <li>Projects</li>
            </Link>
            <Link
              href="/about"
              className={`flex items-center hover:bg-neutral-800 py-2 px-3 group gap-2 rounded-lg ${
                pathname === "/about" ? "active" : ""
              }`}
            >
              <span className="group-hover:-rotate-12 animate-icon">
                <RiContactsBook2Fill />
              </span>
              <li>About</li>
            </Link>
            <Link
              href="/contact"
              className={`flex items-center hover:bg-neutral-800 py-2 px-3 group rounded-lg gap-2 ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              <span className="group-hover:-rotate-12 animate-icon">
                <BiRocket />
              </span>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        {/* <div
        className="my-4 border-t border-gray-200 dark:border-neutral-800 mb-7 mt-8"
        
      ></div> */}
      </nav>
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
    </header>
  );
}
