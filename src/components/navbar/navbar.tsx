"use client";
import Link from "next/link";
import "./navbar.css";
import logoOakyardOnDark from "../../../public/photos/logos/Logo_Oakyard_on_dark.svg";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navlist = [
  {
    navName: "For Talents",
    to: "#",
    subnavList: [
      { navName: "Job & More", to: "/fortalents/jobandmore" },
      {
        navName: "Academy",
        to: "/fortalents/academy",
      },
      {
        navName: "Join The Communinty",
        to: "/fortalents/jointhecommunity",
      },
    ],
  },
  {
    navName: "For Companies",
    to: "#",
    subnavList: [
      { navName: "Find Your Talent", to: "/forcompanies/findyourtalent" },
      {
        navName: "Trainings & Projects",
        to: "/forcompanies/trainingsandprojects",
      },
    ],
  },
  {
    navName: "About",
    to: "/about",
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 z-20 h-16 min-w-full">
      <nav className="  text-white w-full max-w-5xl mx-auto lg:pl-14 mt-6 lg:flex lg:justify-between lg:items-center">
        <div className=" flex items-center justify-between px-5">
          <div>
            <Link
              href="/"
              className="font-logo text-2xl flex justify-center items-center tracking-widest lowercase rounded-lg focus:outline-none focus:shadow-outline"
            >
              <Image
                src={logoOakyardOnDark}
                alt="oakyard logo"
                width={85}
                height={26}
              />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <AiOutlineClose size={32} />
              ) : (
                <AiOutlineMenu size={32} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block bg-grayBodtText py-3 w-screen h-screen" : "hidden"
          } lg:flex lg:items-center gap-40`}
        >
          <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between">
            {navlist.map((navItem) => (
              <div key={navItem.navName} className="group">
                <Link
                  className={`block px-4 py-5 lg:py-2 text-lg font-semibold hover:text-lightGrayBodyText ${
                    (pathname === navItem.to ||
                      navItem.subnavList?.some(
                        (subnav) => subnav.to === pathname
                      )) &&
                    "underline"
                  }
                  `}
                  href={navItem.to}
                  onClick={() => !navItem.subnavList && setIsOpen(false)}
                >
                  {navItem.navName}
                </Link>
                {navItem.subnavList && (
                  <div className=" pl-20 lg:pl-4 lg:absolute lg:group-hover:block lg:hidden">
                    {navItem.subnavList.map((subnav) => (
                      <Link
                        key={subnav.navName}
                        href={subnav.to}
                        className="block font-semibold py-5 hover:text-lightGrayBodyText"
                        onClick={() => setIsOpen(false)}
                      >
                        {subnav.navName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <Link
            href="/takeaction"
            onClick={() => setIsOpen(false)}
            className="text-white bg-magenta px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            support us
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
