export default function Page() {
  return (
    <main>
      <div className="py-2">
        <h1 className="text-2xl font-medium">About</h1>
        <p className=" border-b border-dashed border-neutral-600 pb-6 pt-2 text-neutral-600 dark:text-neutral-400">
          A journey through my thoughts and creativity – each pixel and design
          choice tells a story on the canvas of life.
        </p>
      </div>
      <div className="flex flex-col gap-6 py-6 px-8 text-lg text-neutral-300 border border-1 border-neutral-800 rounded-lg mt-4">
        <p>Hello! Thanks for stopping by my personal website.</p>
        <p>
          I&apos;m  <span className="text-orange-600 font-semibold">Vinit Singh</span> . I&apos;ve been working in web development for
          over 2 years, doing both the coding you see on the screen{" "}
          <span className="text-green-500  font-semibold ">Frontend</span> and
          the stuff that happens behind the scenes{" "}
          <span className="text-blue-700 font-semibold">Backend</span>. But what
          really gets me excited is making websites and apps that are easy for
          everyone to use and look good too!
        </p>
        <p>
          I&apos;m really into{" "}
          <span className="text-yellow-400 font-semibold">JavaScript</span> and{" "}
          <span className="text-blue-500 font-semibold">TypeScript</span>, which
          are languages used to build websites. I also know a bunch of
          frameworks that make building websites even easier, like{" "}
          <span className="text-blue-500 font-semibold">React</span>, and
          frameworks like{" "}
          <span className="text-gray-600 font-semibold">Next.js</span> . I love learning about new web tools and
          features.
        </p>
        <p>I believe that good communication is super important in any job.</p>
        <p>
          I&apos;m good at adapting to different situations, working
          efficiently, and always trying to do my best. My experience has taught
          me how to solve problems and lead teams, but I&apos;m also happy to
          work with others to get things done. I&apos;m excited about the chance
          to work together and make cool stuff!
        </p>
        <p>I&apos;m looking forward to the possibility of working with you!</p>
        <span>Thank you visiting on my website.</span>
      </div>
    </main>
  );
}
