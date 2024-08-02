
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
      <div className="flex items-center px-2">
        {toggelNav ? (
          <RxCross2 size={30} color="yellow" onClick={handleToggelNavbar} />
        ) : (
          <MdOutlineSegment
            size={30}
            color="yellow"
            onClick={handleToggelNavbar}
          />
        )}
  

        {toggelNav && (
          <div className="absolute left-0 top-16 h-72 w-screen text-center bg-[#121111] bg-opacity-95 ">
            <div>
              <ul className="flex flex-col gap-3 p-5 text-yellow-400 ">
                <li className="p-2 text-xl font-medium">
                  <a href="#aboutme">About me</a>
                </li>
                <li className="p-2 text-xl font-medium">
                  <a href="#skills">Skills</a>
                </li>
                <li className="p-2 text-xl font-medium">
                  <a href="#projects">Projects</a>
                </li>
                <li className="p-2 text-xl font-medium">
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
