import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navbar/navbar";
import Footer from "@/components/footer/page";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Whakaako",
  description: "Whakaako web site",
};

export default function RootLayout({
  children,
  hideNavBar = false,
  hideFooter = false,
}: {
  children: React.ReactNode;
  hideNavBar?: boolean;
  hideFooter?: boolean;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {!hideNavBar && <NavBar />}
        <main>{children}</main>
        {!hideFooter && <Footer />}
      </body>
    </html>
  );
}
