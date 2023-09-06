import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/page";

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
        <html lang="en" >
        <body className={inter.className}>
        <NavBar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
