import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar";
import Footer from "@/app/footer/page";
import backgroundImage from "../../utils/photos/01_LandingPage/photos/4B7A7270.jpeg";

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
      style={{ height: "100%", backgroundImage: `url(https://images.unsplash.com/photo-1657998629861-4ae17f595530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3435&q=80})` }}
    >
      <body
        className={inter.className}
        style={{
          height: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NavBar></NavBar>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
