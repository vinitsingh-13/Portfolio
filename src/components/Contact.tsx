export default function Contact() {
  return (
    <>
      <div className="flex flex-col items-center justify-center md:gap-16 gap-8 md:bg-gray-50 py-6 leading-9 dark:bg-[#010B13]" id="contactme">
        <div className="flex flex-col items-center gap-4 lg:gap-6">
          <h1 className="md:text-5xl text-4xl font-medium text-yellow-400">Contact me</h1>
          <p className="md:w-[70%] text-center text-lg font-medium tracking-widest px-3 text-white">
            Want to work with me or wanna offer me a job. Contact me using the
            below buttons.
          </p>
        </div>
        <div className="flex  w-full h-[50svh] lg:h-[60vh] lg:w-1/3 flex-col md:h-[35vh] md:w-1/2 bg-gray-200 bg-opacity-50 items-center justify-center rounded-lg dark:bg-[#2a282844] dark:drop-shadow-lg ">
          <form className="flex flex-col items-center justify-center gap-4" action="https://formsubmit.co/singhvinit981@gmail.com" method="POST" >
            <input
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
              className="h-14 w-80 rounded-lg px-4 text-gray-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="h-14 w-80 rounded-lg px-4 text-gray-500 outline-none"
            />
            <input
              type="number"
              name="number"
              placeholder="Enter your number"
              className="h-14 w-80 rounded-lg px-4 text-gray-500 outline-none"
            />
            <button className="rounded-lg bg-purple-600 text-white px-6 py-2 text-lg hover:bg-purple-700">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
