import Image from "next/image";
import task from "@/public/taskmster.png";
import natour from "@/public/natours.png";
import book from "@/public/booktown.png"
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";
import { RiFirebaseLine } from "react-icons/ri";
import { FaSass } from "react-icons/fa6";
import micro from "@/public/microsoft.png";
export default function Page() {
  return (
    <main>
      <div className="py-2">
        <h1 className="text-2xl font-medium">Projects</h1>
        <p className=" border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
          Several projects that I have worked on, both private and open source.
        </p>
      </div>
      <div className="py-4 flex flex-col md:flex-row flex-wrap gap-6 items-center justify-center">
        <a
          href="https://task-master-psi-ten.vercel.app/"
          target="_blank"
          className="flex flex-col bg-neutral-800 md:w-[45%] rounded-xl shadow-xl shadow-neutral-900 hover:scale-105 transition-all duration-300"
        >
          <div className="relative w-full h-52 rounded-xl  ">
            <Image
              src={task}
              className=" object-cover rounded-tr-xl rounded-tl-xl"
              fill
              alt="Taskmaster"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="text-neutral-300 font-medium text-lg">Taskmaster</h3>
            <p className="text-neutral-400">
              Simple Taskmaster was built with React, Tailwindcss,
              TS and Firebase.
            </p>
            <div className="flex gap-4 items-center">
              <IoLogoReact className=" text-cyan-300  " size={20} />
              <SiTypescript className=" text-blue-500 " size={20} />
              <RiTailwindCssFill className=" text-cyan-500 " size={20} />
              <RiFirebaseLine className=" text-yellow-500 text-xl" />
            </div>
          </div>
        </a>
        <a
          href="https://vinitsingh-13.github.io/Natours-Website/"
          target="_blank"
          className="flex flex-col bg-neutral-800 md:w-[45%] rounded-xl shadow-xl shadow-neutral-900 hover:scale-105 transition-all duration-300  "
        >
          <div className="relative w-full h-52 rounded-tl-xl  ">
            <Image
              src={natour}
              className=" object-cover rounded-tr-xl rounded-tl-xl"
              fill
              alt="Natours"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="text-neutral-300 font-medium text-lg">Natours</h3>
            <p className="text-neutral-400">
              Natours website was built using HTML, CSS and SASS
            </p>
            <div className="flex gap-4 items-center">
              <IoLogoHtml5 className=" text-orange-600 " size={20} />
              <IoLogoCss3 className=" text-cyan-400 " size={20} />
              <FaSass className=" text-pink-500 " size={20} />
            </div>
          </div>
        </a>
        <a
          href="https://vinitsingh-13.github.io/Microsoft-Clone/"
          target="_blank"
          className="flex flex-col bg-neutral-800 md:w-[45%] rounded-xl shadow-xl shadow-neutral-900 hover:scale-105 transition-all duration-300  "
        >
          <div className="relative w-full h-52 rounded-tl-xl  ">
            <Image
              src={micro}
              className=" object-cover rounded-tr-xl rounded-tl-xl"
              fill
              alt="Microsoft Clone"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="text-neutral-300 font-medium text-lg">
              Microsoft Clone
            </h3>
            <p className="text-neutral-400">
              Microsoft Frontend Clone was built using HTML, Tailwind Css and
              Javascript
            </p>
            <div className="flex gap-4 items-center">
              <IoLogoHtml5 className=" text-orange-600 " size={20} />

              <RiTailwindCssFill className=" text-cyan-500 " size={20} />
              <IoLogoJavascript className="bg-yellow-400 text-black" />
            </div>
          </div>
        </a>
        <a
          href="https://karamraj.github.io/BookTown/"
          target="_blank"
          className="flex flex-col bg-neutral-800 md:w-[45%] rounded-xl shadow-xl shadow-neutral-900 hover:scale-105 transition-all duration-300  "
        >
          <div className="relative w-full h-52 rounded-tl-xl  ">
            <Image
              src={book}
              className=" object-cover rounded-tr-xl rounded-tl-xl"
              fill
              alt="BookTown"
            />
          </div>
          <div className="p-6 flex flex-col gap-3">
            <h3 className="text-neutral-300 font-medium text-lg">
              BookTown Open Source
            </h3>
            <p className="text-neutral-400">
              BookTown website was built using HTML, CSS, Javascript and
              Typescript
            </p>
            <div className="flex gap-4 items-center">
              <IoLogoHtml5 className=" text-orange-600 " size={20} />
              <IoLogoCss3 className=" text-cyan-400 " size={20} />
              <IoLogoJavascript className="bg-yellow-400 text-black" />
              <SiTypescript className=" text-blue-500 " size={18} />
            </div>
          </div>
        </a>
      </div>
    </main>
  );
}
