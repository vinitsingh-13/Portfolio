import { MdAttachEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";
import { HiOutlineVideoCamera } from "react-icons/hi";
export const metadata = {
  title: "Contact - Vinit Singh",
};

export default function Page() {
  return (
    <main className="laptop:px-4">
      <div className="py-2">
        <h1 className="text-2xl font-medium">Contact</h1>
        <p className=" border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
          Feel free to get in touch and let&apos;s have a discussion about how
          we can work together.
        </p>
      </div>
      <div className=" mt-4 pb-4">
        <h3 className="font-medium text-xl text-neutral-300">
          Find me on social media
        </h3>
        <div className="flex w-full gap-4 items-center mt-4 flex-col md:flex-row md:px-0">
          <button className="flex  bg-green-600 md:w-1/5 w-full justify-center  transition-all duration-300 hover:bg-green-700 py-2 text-lg rounded-lg ">
            <a
              href="mailto:singhvinit981@gmail.com"
              target="_blank"
              className="flex items-center gap-2 font-medium  "
            >
              {" "}
              <MdAttachEmail />
              Email
            </a>
          </button>
          <button className="flex w-full  bg-blue-500 md:w-1/5 justify-center transition-all duration-300 py-2 text-lg rounded-lg hover:bg-blue-600 ">
            <a
              href="https://www.linkedin.com/in/vinit-singh-629142220/"
              target="_blank"
              className="flex items-center gap-2  font-medium "
            >
              <FaLinkedin size={20} /> Linkedin
            </a>
          </button>
          <button className="flex  bg-pink-600 w-full md:w-1/5 justify-center transition-all duration-300 py-2 text-lg gap-2 rounded-lg hover:bg-pink-700 ">
            <a
              href="https://www.instagram.com/_singh_vinit/"
              target="_blank"
              className="flex items-center gap-2 font-medium  "
            >
              {" "}
              <GrInstagram size={20} /> Instagram
            </a>
          </button>
          <button className="flex bg-black w-full md:w-1/5 justify-center py-2 text-lg gap-2 transition-all duration-300  rounded-lg hover:bg-neutral-950 ">
            <a
              href="https://github.com/vinitsingh-13"
              target="_blank"
              className="flex items-center gap-2 font-medium "
            >
              <SiGithub size={20} /> Github
            </a>
          </button>
        </div>
      </div>
      <div className="my-4 border-t border-gray-200 dark:border-neutral-800 "></div>
      <div className="">
        <h3 className="text-xl text-neutral-300 font-medium">Book a call</h3>
        <div className="border bg-gradient-to-tr from-teal-900  to-teal-900  border-teal-500 rounded-xl  p-6 mt-4">
          <div className="flex items-center justify-between  ">
            <div className="font-medium flex flex-col gap-2">
              <h3 className="text-xl">1 on 1 Chit-chat Session</h3>
              <p className="text-sm dark:text-neutral-300 md:text-base font-medium">
                Let’s find some time to talk about anything
              </p>
            </div>
            <a
              className="border-2 border-teal-600 rounded-full p-3"
              href="https://cal.com/vinit-singh/scheduled-meeting"
              target="_blank"
            >
              <FaRegCalendar size={22} />
            </a>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <p className="flex items-center text-sm gap-1">
              <IoTimeOutline size={20} /> 30 Minutes
            </p>
            <a className="flex items-center text-sm gap-1" href="https://cal.com/vinit-singh/scheduled-meeting" target="_blank">
              <HiOutlineVideoCamera size={20} /> Google Meet
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 dark:border-neutral-800 mt-8"></div>

      <div className="py-4 flex flex-col">
        <h4 className="text-xl text-neutral-300">Or send me a message</h4>
        <div>
          <div className="w-full flex gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-1/2 h-12 font-medium bg-transparent border border-neutral-700 p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-1/2 font-medium bg-transparent border border-neutral-700 p-2 rounded-lg"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              className="w-full mt-6 font-medium bg-transparent rounded-md border border-neutral-200 px-3 py-2 focus:outline-none dark:border-neutral-700"
              rows={5}
              placeholder="Enter your Message"
            ></textarea>
          </div>
          <button className="hover:bg-white bg-neutral-700 w-full p-3 rounded-lg hover:text-neutral-800 mt-3 transition-all duration-500 font-medium ">Send Message</button>
        </div>
      </div>
    </main>
  );
}
