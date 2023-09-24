import "./globals.css";
import type { Metadata } from "next";
import { Inter, Maven_Pro, Mulish, Orbitron } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/page";
import backgroundImage from "../../public/photos/01_landingPage/photos/close-up-portrait-of-freelance-it-specialists-looking-at-laptop-screen-with-smile.jpg";
import WhatWeDo from "./whatWeDo/page";
import WhatWeDoAndWhy from "@/components/whatWeDoAndWhy";
import OurMission from "@/components/ourMission";

const mavernPro = Maven_Pro({ subsets: ["latin"], variable: "--display-font" });
const mulish = Mulish({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--logo-font" });

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
      className={`${mavernPro.variable} ${mulish.className} ${orbitron.variable}`}
    >
      <body className={inter.className}>
        <NavBar />
        <main>{children}</main>
        <WhatWeDoAndWhy />
        <Footer />
      </body>
    </html>
  );
}
