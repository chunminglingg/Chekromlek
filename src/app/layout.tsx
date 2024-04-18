import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import SideBar from "@/components/Organisms/SideBar";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  description: `Chekromlek" is a social media platform dedicated to sharing creative projects. It provides a user-friendly interface for artists, designers, and entrepreneurs to showcase their work, connect with others, and inspire a global community of creators`,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SideBar />
      </body>
    </html>
  );
}
