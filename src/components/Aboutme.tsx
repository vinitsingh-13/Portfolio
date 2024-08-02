import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
// import ModelViewer from "./Island";

export default function Aboutme() {
  return (
    <div
      className="relative flex h-screen flex-col-reverse justify-end items-center md:px-4 py-8 transition-all md:h-[50dvh] lg:h-screen lg:flex-row lg:px-6"
      id="aboutme"
    >
      <div className="relative flex md:justify-start lg:w-full lg:items-start lg:justify-start">
        <div className="- z-0 flex flex-col gap-4 p-4 text-center md:items-start md:justify-start lg:h-full lg:w-1/2 lg:items-start lg:px-16">
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
            className="text-3xl tracking-wide text-gray-700 lg:text-4xl lg:font-semibold dark:text-white"
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
            className="text-5xl font-semibold tracking-wide text-yellow-500 lg:text-6xl lg:font-semibold"
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
            className="text-3xl text-white lg:w-full lg:text-start lg:text-4xl"
          >
            I am a{" "}
            <span className="font-semibold text-yellow-400 lg:font-medium">
              <TypeAnimation
                sequence={[
                  "Front-End Developer",
                  "Tech Enthusiastic",
                  "Web3 Enthusiastic",
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
            className="md:text-md text-pretty px-6 md:px-0 text-sm font-medium leading-7 text-white md:w-1/2 md:text-start md:leading-7 lg:w-full lg:text-start lg:leading-8"
          >
            I am a frontend developer who excels in building responsive,
            user-focused web applications. My expertise spans across crafting
            clean, efficient code with HTML, CSS, and JavaScript, and employing
            frameworks like React to create dynamic user interfaces.
          </motion.p>
        </div>
      </div>
      {/* <motion.div
        className=" md:absolute md:right-0 md:h-full md:w-1/2 lg:absolute lg:right-5 lg:w-1/2 h-full w-full lg:-top-8 "
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 20,
          duration: 1.5,
          delay: 0.5,
        }}
      >
        <ModelViewer />
      </motion.div> */}
    </div>
  );
}
