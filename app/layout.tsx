import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./custom-components/Navbar";
import AudiGif from "./custom-components/AudiGif";
import GroupB from "./custom-components/GroupB";
import AudiRS2 from "./custom-components/AudiRS2"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Audi History",
  description: "A brief history of Audi inline 5 engine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Navbar/>
      <AudiGif />
      <GroupB />
      <AudiRS2 />
      </body>
    </html>
  );
}
