import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./_styles/globals.css"
import Sidebar from "./_components/Sidebar";
import MobileNav from "./_components/MobileNav";
export const metadata: Metadata = {
  title: " Vinit Singh - Personal Portfolio",
  description: "Welcome to my portfolio",
};
const onest = Onest({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-white no-scrollbar ${onest.className} no-scrollbar h-screen antialiased  bg-[#121212] flex  justify-center laptop:px-32`}
      >
        <div className="w-full laptop:flex">
          <div className="fixed laptop:w-1/5 h-full   ">
            <Sidebar />
          </div>
          <div className="laptop:hidden w-full">
            <MobileNav/>
          </div>
          <main className="laptop:py-8 laptop:w-[70%] relative laptop:ml-[26%] p-8 overflow-y-scroll laptop:px-0 no-scrollbar md:px-10 py-4 ">{children}</main>
        </div>
      </body>
    </html>
  );
}
