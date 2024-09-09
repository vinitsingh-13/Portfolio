import Link from "next/link";
import Techstack from "./_components/Techstack";
import { BiRocket } from "react-icons/bi";


export default function Page() {
  return (
    <main className="pb-12" >
      <div className="flex flex-col gap-4 ">
        <div className="flex items-center">
          <h1 className="text-3xl font-medium ">Hey, I&apos;m Vinit</h1>
          <span className="ml-2 waveanimation text-3xl">👋</span>
        </div>
        <ul className="flex md:gap-10 gap-2  flex-col md:flex-row list-disc px-4 text-neutral-400">
          <li>
            Based in Delhi, India <span className="ml-2">🇮🇳</span>
          </li>
          <li>Learning MERN Stack</li>
        </ul>
        <p className="md:w-[90%] leading-8 text-neutral-300 font-medium text-pretty">
          Creative frontend developer with expertise in crafting intuitive and
          visually compelling user interfaces. Proficient in modern web
          technologies and passionate about optimizing performance and user
          experience. Dedicated to staying ahead of trends and delivering
          impactful digital solutions.
        </p>
      </div>
      <div
        className="my-4 border-t border-gray-200 dark:border-neutral-800 mb-7 mt-8"
        
      ></div>
      <div>
        {/* <Project/> */}
      </div>
      <div>
        <h2 className="text-2xl text-neutral-300 font-medium">
          Tool That I Have Used
        </h2>
        <Techstack />
      </div>
      <div
        className="my-4 border-t border-gray-200 dark:border-neutral-800 mb-7 mt-8"
        
      ></div>
      <div className="flex flex-col gap-4  text-neutral-300">
        <h3 className="text-2xl font-medium">
          What I&apos;ve been working on
        </h3>
        <p>
          Currently diving into the MERN stack and exploring blockchain
          technologies and trading strategies.
        </p>
        <div className="bg-neutral-800 rounded-xl py-6 px-8 flex flex-col gap-6 items-start">
          <h3 className="flex items-center gap-2 text-xl font-medium"><span><BiRocket /></span>Lets work together!</h3>
          <p>I&apos;m open for freelance projects, feel free to email me to see how can we collaborate.</p>
          <Link href="/contact" className="bg-neutral-600 p-2 rounded-lg font-medium hover:bg-neutral-700 transition-all delay-150">Contact me</Link>
        </div>
      </div>
    </main>
  );
}
