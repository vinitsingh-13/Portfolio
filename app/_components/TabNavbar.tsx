"use client";
import Image from "next/image";
import logo from "@/public/logo.jpg";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { SiPolymerproject } from "react-icons/si";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BiRocket } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { MdOutlineFileDownload } from "react-icons/md";
export default function TabNavbar() {
  const pathname = usePathname();
  return (
    <header>
      <nav className="flex items-center justify-around ">
        <div className="relative w-16 h-16 ml-2">
          <Image
            src={logo}
            alt="Logo"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <ul className="flex items-center gap-2">
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
        <button className="flex items-center  rounded-lg gap-2 transition-all duration-300 bg-neutral-800 px-4 py-2 hover:text-neutral-300">
          <a
            href="/public/vinitsinghresume.pdf"
            download="vinitsinghresume.pdf"
          >
            Resume
          </a>
          <span className="animate-pulse">
            <MdOutlineFileDownload />
          </span>{" "}
        </button>
      </nav>
    </header>
  );
}
