import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Logo from "@/components/Atoms/Logo/Logo";
import SideLeft from "@/components/Molecules/SideLeft/SideLeft";
import { metadata } from "@/utils/metadata";
import Nav from "@/components/Organisms/navbar/Nav";
import { Sidebar } from "@/components/Organisms/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
          <div className="flex justify-center items-center h-full">
          <div className="h-[200px]"></div>
        {children}
        </div>
       <Sidebar/>
      </body>
    </html>
  );
}
