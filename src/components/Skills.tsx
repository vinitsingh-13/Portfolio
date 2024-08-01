import { useEffect, useState } from "react";
const skills = [
  { src: "/html-5.png", alt: "Html" },
  { src: "/css-3.png", alt: "Css" },
  { src: "/js.png", alt: "JavaScript" },
  { src: "/sass.png", alt: "Sass" },
  { src: "/tailwind css.png", alt: "Tailwind CSS" },
  { src: "/github.png", alt: "GitHub" },
  { src: "/react.png", alt: "ReactJS" },
  { src: "/typescript.png", alt: "TypeScript" },
  { src: "/images.png", alt: "Firebase" },
  { src: "/social.png", alt: "Git" },
  { src: "/linux.png", alt: "Linux" },
  { src: "/supabase.png", alt: "Supabase" },
];

const defaultRadius = 200;
const mobileRadius = 140;
const center = { x: 0, y: 0 };
export default function Skills() {
  const [radius, setRadius] = useState(defaultRadius);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setRadius(mobileRadius);
      } else {
        setRadius(defaultRadius);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 bg-gray-50 p-8 leading-7 dark:bg-[#010B13]">
        <h1 className="text-5xl tracking-wide text-[blueviolet] font-medium">Skills</h1>
        <p className="lg:w-1/3 text-center text-lg text-gray-700 dark:text-white font-medium md:w-[75%] ">
          Here are some of my skills on which I have been working for the past 1
          year.
        </p>
      </div>
      <div
        className="relative flex lg:h-[80vh] md:h-[60vh] h-[50svh] justify-center bg-gray-50 dark:bg-[#010B13]"
        id="skills"
      >
        <div
          id="center"
          className="h-15 w-15 absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-3 drop-shadow-xl"
        >
          <img
            src="/icons8-programming.gif"
            alt="skills"
            className="w-[5rem] rounded-full"
          />
        </div>
        <div className="animate-spin-slow h-[80%]">
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * (2 * Math.PI);
            const x = center.x + radius * Math.cos(angle);
            const y = center.y + radius * Math.sin(angle);
            return (
              <div
                key={index}
                className="absolute flex h-14 w-14 items-center justify-center rounded-full bg-white p-3 drop-shadow-xl"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img src={skill.src} alt={skill.alt} className="w-8" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
