import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: true,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};
export default function Projects() {
  return (
    <div className=" ">
      <div
        id="projects"
        className="flex flex-col gap-5 items-center justify-center pt-6 leading-9 tracking-widest md:gap-8 lg:gap-8"
      >
        <h1 className="text-4xl font-medium tracking-wide text-yellow-400 md:text-5xl">
          My Projects
        </h1>
        <p className="text-center md:text-lg font-medium text-white md:w-[75%] lg:w-1/2 text-lg px-4 ">
          I have worked on a wide range of projects. From static websites to web
          apps. Here are some of my projects.
        </p>
      </div>
      <div className="md-h-screen flex py-12 gap-6 flex-col flex-wrap items-center justify-evenly md:flex-initial md:gap-5 md:py-6 lg:h-[80vh] lg:flex-row lg:gap-6 lg:py-4">
        <Tilt
          className="z-0 flex flex-col h-[26rem] w-[75%] items-center rounded-xl border-2 border-gray-200 bg-gray-50 drop-shadow-xl md:h-[28rem] md:w-[45%] md:flex-col lg:h-[26rem] lg:w-1/4 lg:flex-col"
          options={defaultOptions}
        >
          <div className="h-1/2">
            <img
              src="/natours.png"
              alt="natours"
              className="h-full rounded-t-xl drop-shadow-md"
            />
          </div>

          <div className="flex w-full flex-col items-center gap-4 border-t-2 border-gray-200 py-4">
            <h2 className="text-2xl font-medium text-purple-700">
              Natours Tour
            </h2>
            <div className="flex flex-wrap justify-center gap-6 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/html-5.png" alt="html" className="h-full w-full" />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/css-3.png" alt="css" className="h-full w-full" />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/sass.png" alt="sass" className="h-full w-full" />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/js.png" alt="javascript" className="h-full w-full" />
              </div>
            </div>
          </div>
          <button className="mt-4 rounded-lg bg-purple-700 px-3 py-2 text-white">
            <a
              href="https://vinitsingh-13.github.io/Natours-Website/"
              target="_blank"
            >
              Live Project
            </a>
          </button>
        </Tilt>
        <Tilt
          className="z-0 flex w-[75%] h-[28rem] flex-col items-center rounded-xl border-2 border-gray-200 bg-gray-50 drop-shadow-xl md:h-[28rem] md:w-[45%] lg:h-[26rem] lg:w-1/4"
          options={defaultOptions}
        >
          <div className="border-b-2 border-gray-200 md:h-1/2 h-1/2 w-full">
            <img
              src="/taskmaster.png"
              alt="taskmaster"
              className="h-full rounded-t-xl drop-shadow-md w-full"
            />
          </div>

          <div className="flex w-full flex-col items-center gap-4 py-4">
            <h2 className="text-2xl font-medium text-purple-700">Taskmaster</h2>
            <div className="flex flex-wrap justify-center rounded-xl md:gap-4 lg:gap-2 gap-2">
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/html-5.png" alt="html" className="h-full w-full" />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img
                  src="/tailwind css.png"
                  alt="taiwlindcss"
                  className="h-full w-full"
                />
              </div>

              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/react.png" alt="react" className="h-full w-full" />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img
                  src="/typescript.png"
                  alt="typescript"
                  className="h-full w-full"
                />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img
                  src="/images.png"
                  alt="typescript"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
          <button className="mt-4 rounded-lg bg-purple-700 px-3 py-2 text-white">
            <a href="https://task-master-psi-ten.vercel.app/" target="_blank">
              Live Project
            </a>
          </button>
        </Tilt>
        <Tilt
          className="z-0 flex w-[75%] h-[26rem] flex-col items-center rounded-xl border-2 border-gray-200 bg-gray-50 drop-shadow-xl md:w-[45%] lg:w-1/4"
          options={defaultOptions}
        >
          <div className="h-1/2 border-gray-300">
            <img
              src="/microsoft.png"
              alt="taskmaster"
              className="h-full rounded-t-xl drop-shadow-md"
            />
          </div>

          <div className="flex w-full flex-col items-center gap-4 py-4">
            <h2 className="text-2xl font-medium text-purple-700">
              Microsoft Clone
            </h2>
            <div className="flex flex-wrap justify-center gap-4 rounded-xl">
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/html-5.png" alt="html" className="h-full w-full" />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/css-3.png" alt="css" className="h-full w-full" />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img src="/js.png" alt="javascript" className="h-full w-full" />
              </div>
              <div className="h-12 w-12 rounded-lg bg-white p-2 drop-shadow-lg">
                <img
                  src="/tailwind css.png"
                  alt="tailwind"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
          <button className="mt-4 rounded-lg bg-purple-700 px-3 py-2 text-white">
            <a
              href="https://vinitsingh-13.github.io/Microsoft-Clone/"
              target="_blank"
            >
              Live Project
            </a>
          </button>
        </Tilt>
      </div>
    </div>
  );
}
