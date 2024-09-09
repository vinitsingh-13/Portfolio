import { FaBootstrap, FaGitAlt, FaGithub, FaSass } from "react-icons/fa6";
import { FcLinux } from "react-icons/fc";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io";
import { IoLogoHtml5, IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
    SiFirebase,
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiRecoil,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
interface HomePropTypes {
    img:string,
    head:string,
    text:string
    button:string
}
const HomeProjects:HomePropTypes[]=[
    {
        img:"/taskmaster.png",
        head:"Taskmaster",
        text:"Taskmaster is full stack Todo app. ",
        button:"View Project"
    },
    {
        img:"/microsoft.png",
        head:"Microsoft Clone",
        text:"Microsoft | AI laptop, AI PC, Copilot+ PC ",
        button:"View Project"
    },
    {
        img:"/natours.png",
        head:"Natours",
        text:"Natours | Exciting tours for adventuruous peoples. ",
        button:"View Project"
    }
]
export interface SkillsType {
    icon:JSX.Element,
    text:string
}
const skills:SkillsType[] = [
  {
    icon: <IoLogoHtml5 className=" text-orange-600 text-xl" />,
    text: "HTML",
  },
  {
    icon: <IoLogoCss3 className=" text-cyan-400 text-xl" />,
    text: "CSS",
  },
  {
    icon: <FaSass className=" text-pink-500 text-xl" />,
    text: "SCSS",
  },
  {
    icon: <RiTailwindCssFill className=" text-cyan-500 text-xl" />,
    text: "TailwindCSS",
  },
  {
    icon: <FaBootstrap className=" text-violet-500 text-xl" />,
    text: "Bootstrap",
  },
  {
    icon: <SiMui className=" text-cyan-500 text-xl" />,
    text: "MaterialUI",
  },
  {
    icon: <SiNextdotjs className="  text-xl" />,
    text: "NextJs",
  },
  {
    icon: <SiRecoil className=" text-cyan-500 text-xl" />,
    text: "Recoil",
  },
  {
    icon: <SiNetlify className=" text-cyan-300 bg-white text-xl" />,
    text: "Netlify",
  },
  {
    icon: <FaGitAlt className=" text-orange-500 text-xl" />,
    text: "Git",
  },
  {
    icon: <FaGithub className="  text-xl" />,
    text: "Github",
  },
  {
    icon: <FcLinux className=" text-cyan-500 text-xl" />,
    text: "Linux",
  },
  {
    icon: <IoLogoJavascript className="bg-yellow-400 text-black" />,
    text: "JavaScript",
  },
  {
    icon: <IoLogoReact className=" text-cyan-300 text-xl" />,
    text: "React",
  },
  {
    icon: <TbBrandRedux className=" text-violet-500 text-xl" />,
    text: "Redux",
  },
  {
    icon: <SiVite className=" text-violet-500 text-xl" />,
    text: "Vite",
  },
  {
    icon: <SiStyledcomponents className=" text-pink-500 text-xl" />,
    text: "StyledComponents",
  },
  {
    icon: <SiTypescript className=" text-blue-500 text-xl" />,
    text: "TypeScript",
  },
  {
    icon: <SiFirebase className=" text-blue-500 text-xl" />,
    text: "Firebase",
  },
];



export {HomeProjects, skills,}