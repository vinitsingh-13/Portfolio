import DarkModeToggle from "./DarkMode";
import { MdOutlineSegment } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
interface MobilePropsType {
  toggelNav: boolean;
  setToggelNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavbar({
  toggelNav,
  setToggelNav,
}: MobilePropsType) {
  function handleToggelNavbar() {
    setToggelNav(!toggelNav);
  }
  return (
    <>
      <div className="flex items-center gap-2">
        {toggelNav ? (
          <RxCross2 size={30} color="blueviolet" onClick={handleToggelNavbar} />
        ) : (
          <MdOutlineSegment
            size={30}
            color="blueviolet"
            onClick={handleToggelNavbar}
          />
        )}
        <DarkModeToggle />

        {toggelNav && (
          <div className="absolute left-0 top-16 h-72 w-screen bg-gray-100 text-center dark:bg-[#121111] dark:bg-opacity-75 ">
            <div>
              <ul className="flex flex-col gap-3 p-5 dark:text-white ">
                <li className="p-2 text-xl font-medium text-purple-700 dark:text-white">
                  <a href="#aboutme">About me</a>
                </li>
                <li className="p-2 text-xl font-medium text-purple-700 dark:text-white">
                  <a href="#skills">Skills</a>
                </li>
                <li className="p-2 text-xl font-medium text-purple-700 dark:text-white">
                  <a href="#projects">Projects</a>
                </li>
                <li className="p-2 text-xl font-medium text-purple-700 dark:text-white">
                  <a href="#contactme">Contact me</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
