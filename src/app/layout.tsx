import "./globals.css";
import type {Metadata} from "next";
import {Inter, Maven_Pro, Mulish, Orbitron} from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/page";
import backgroundImage from "../../public/photos/01_landingPage/photos/close-up-portrait-of-freelance-it-specialists-looking-at-laptop-screen-with-smile.jpg";

const mavernPro = Maven_Pro({subsets: ["latin"], variable: "--display-font"});
const mulish = Mulish({subsets: ["latin"]});
const orbitron = Orbitron({subsets: ["latin"], variable: "--logo-font"});

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Whakaako",
    description: "Whakaako web site",
};

export default function RootLayout({
                                       children
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${mavernPro.variable} ${mulish.className} ${orbitron.variable}`}
              style={{
                  backgroundImage: `url(${backgroundImage.src})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundAttachment: "fixed",
                  backgroundPosition: "center",
                  minHeight: "100vh",
              }}>
        <body className={inter.className}>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
