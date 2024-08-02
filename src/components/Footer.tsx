
export default function Footer() {
  return (
    <footer className="flex flex-col gap-6 items-center py-10 dark:bg-black">
        <div>
            <h1 className="text-4xl font-medium tracking-wider text-yellow-400">Connect with me</h1>
        </div>
        <div className="flex gap-8 cursor-pointer">
            <div className="h-14 w-14 rounded-full bg-white p-2  drop-shadow-lg">
                <a href="https://www.instagram.com/_singh_vinit/" target="_blank">
                <img
                  src="/icons8-instagram-48.png"
                  alt="insta"
                  className="h-full w-full hover:scale-[1.1] "
                />
                </a>
            
            </div>
            <div className="h-14 w-14 rounded-full bg-white p-2 drop-shadow-lg">
                <a href="https://www.linkedin.com/in/vinit-singh-629142220/" target="_blank">
                <img
                  src="/icons8-linkedin-48.png"
                  alt="linkedin"
                  className="h-full w-full hover:scale-[1.1] "
                />
                </a>
           
            </div>
            <div className="h-14 w-14 rounded-full bg-white p-2 drop-shadow-lg">
                <a href="https://github.com/vinitsingh-13" target="_blank">
                <img
                  src="/github.png"
                  alt="github"
                  className="h-full w-full hover:scale-[1.1] "
                />
                </a>
            
            </div>

        </div>
         <div>&copy; Copyright Vinit Singh. All rights reserved.</div>
    </footer>
  )
}
