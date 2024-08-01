import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Aboutme() {
  return (
    <div className="flex relative items-center dark:bg-[url('/public/bg2.jpg')]  flex-col-reverse lg:flex-row md:flex-col-reverse px-4 py-8 transition-all lg:h-screen dark:bg-black" id="aboutme">
      <div className=" hidden absolute w-5 h-5 rounded-full bg-[#915eff] top-[25%] left-[10%] lg:block"></div>
      <div className="hidden absolute w-1 lg:h-80 bg-gradient-to-b from-[#915eff] ... left-[10.6%] top-[25%] lg:block"></div>
      <div className="flex lg:w-1/2 lg:justify-end md:justify-center  ">
        <div className="flex lg:h-full lg:w-[75%] flex-col gap-2 p-4 md:justify-center md:items-center lg:items-start text-center  ">
          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
              duration: 1.5,
              delay: 0.5,
            }}
            className="text-3xl tracking-wide text-gray-700 dark:text-white"
          >
            Hey, I am
          </motion.h2>
          <motion.h1
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
              duration: 1.5,
              delay: 0.7,
            }}
            className="text-5xl font-semibold tracking-wide text-[blueviolet]"
          >
            Vinit Singh
          </motion.h1>
          <motion.h2
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
              duration: 1.5,
              delay: 0.7,
            }}
            className="text-3xl text-gray-700 dark:text-white"
          >
            I am a{" "}
            <span className="font-semibold text-[blueviolet]">
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  "Tech Enthusiastic",
                  "Artist",
                ]}
                wrapper="span"
                speed={{
                  type: "keyStrokeDelayInMs",
                  value: 250,
                }}
                repeat={Infinity}
              />
            </span>
          </motion.h2>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 20,
              duration: 1.5,
              delay: 0.7,
            }}
            className="text-md text-pretty text-center font-medium leading-7 text-gray-700 dark:text-white md:w-[70%] lg:w-full md:text-center lg:text-start"
          >
            I am a frontend developer who excels in building responsive,
            user-focused web applications. My expertise spans across crafting
            clean, efficient code with HTML, CSS, and JavaScript, and employing
            frameworks like React to create dynamic user interfaces.
          </motion.p>
        </div>
      </div>
      <div className="flex md:w-1/2 items-center justify-center md:py-12 py-12">
        <motion.img
           initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'tween',
          ease: 'easeOut',
          duration: 1.5,
          delay: 0.5,
        }}
          src="/sde-removebg-preview.png"
          alt="image"
        />
      </div>
    </div>
  );
}
