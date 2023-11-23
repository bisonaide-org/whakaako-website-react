import "./globals.css";
import type { Metadata } from "next";
import { Maven_Pro, Mulish, Orbitron } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import Footer from "../components/footer/Footer";

const mavernPro = Maven_Pro({ subsets: ["latin"], variable: "--display-font" });
const mulish = Mulish({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--logo-font" });

export const metadata: Metadata = {
  title: "Oakyard",
  description: "Oakyard web site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${mavernPro.variable} ${orbitron.variable}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={mulish.className}>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
