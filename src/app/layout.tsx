import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/app/footer/page";
import backgroundImage from  "../../public/photos/01_landingPage/photos/close-up-portrait-of-freelance-it-specialists-looking-at-laptop-screen-with-smile.jpg"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whakaako",
  description: "Whakaako web site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
    >
      <body
        className={inter.className}
      >
        
        <NavBar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
