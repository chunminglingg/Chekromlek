import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Logo from "@/components/Atoms/Logo/Logo";
import SideLeft from "@/components/Molecules/SideLeft/SideLeft";
import { InputSearch } from "@/components/Molecules/Search";
import { AfteLogin, BfLogin } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
          <div className="px-3 py-3 lg:px-5 lg:pl-3 flex justify-between">
            <Link href={"#"}>
              <Logo />
            </Link>
           
            <div className="flex flex-row justify-between items-center gap-5 ">
                <div >
                   <InputSearch/>
                </div>
                  {/* <BfLogin/> */} 
                  <AfteLogin/>
            </div>
          </div>
        </nav>
        {children}


        <aside>
          <aside className="fixed top-5 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 ">
            <SideLeft />
          </aside>
        </aside>
        
      </body>
    </html>
  );
}
