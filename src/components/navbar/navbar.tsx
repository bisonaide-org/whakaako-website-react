"use client";
import Link from "next/link";
import "./navbar.css";
import logoOakyardOnDark from "../../../public/photos/logos/Logo_Oakyard_on_dark.svg";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const navlist = [
  {
    navName: "For Talents",
    to: "#",
    subnavList: [
      { navName: "Job & More", to: "#" }, // add path when the page is ready "/fortalents/jobandmore"
      {
        navName: "Academy",
        to: "/fortalents/academy",
      },
      {
        navName: "Join The Communinty",
        to: "#", // add path when the page is ready "/fortalents/jointhecommunity"
      },
    ],
  },
  {
    navName: "For Companies",
    to: "#", // add path when the page is ready "/forcompanies"
  },
  {
    navName: "About",
    to: "#", // add path when the page is ready "/about"
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number>(-1);

  const handleActiveSubMenu = (index: number) => {
    setActiveSubmenu(index);
  };
  return (
    <div className="absolute top-0 left-0 z-20 h-16 min-w-full">
      <nav className="  text-white w-full max-w-5xl mx-auto px-5 lg:pl-14 mt-6 lg:flex lg:justify-between lg:items-center">
        <div className=" flex items-center justify-between">
          <div>
            <Link
              href="/"
              className="font-logo text-2xl flex justify-center items-center tracking-widest lowercase rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => handleActiveSubMenu(-1)}
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
            isOpen ? "block bg-grayBodtText py-3" : "hidden"
          } lg:flex lg:items-center gap-40`}
        >
          <div className="lg:flex lg:items-center lg:justify-between">
            {navlist.map((navItem, navIndex) => (
              <div key={navItem.navName} className="group">
                <Link
                  className={`block px-4 py-2 text-lg font-semibold hover:text-lightGrayBodyText focus:underline ${
                    navIndex === 1 && " pt-28 lg:pt-2"
                  } ${activeSubmenu === navIndex && "underline"}
                  `}
                  href={navItem.to}
                  onClick={() =>
                    navIndex !== activeSubmenu && handleActiveSubMenu(-1)
                  }
                >
                  {navItem.navName}
                </Link>
                {navItem.subnavList && (
                  <div className=" absolute pl-10 lg:pl-4 lg:group-hover:block lg:hidden">
                    {navItem.subnavList.map((subnav) => (
                      <Link
                        key={subnav.navName}
                        href={subnav.to}
                        className="block font-semibold pb-2 hover:text-lightGrayBodyText"
                        onClick={() => handleActiveSubMenu(navIndex)}
                      >
                        {subnav.navName}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="font-display text-white bg-magenta px-5 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 hover:bg-gray-200"
            onClick={() => handleActiveSubMenu(-1)}
          >
            <span>support us</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
