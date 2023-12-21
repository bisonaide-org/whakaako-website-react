"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FeaturesItem } from "./types";

interface FeaturesProps {
  featuresList: FeaturesItem[];
  bgImage: string;
  startingAt?: boolean;
  headerText: string;
  isButtonInclude?: boolean;
}

const FeaturesComponent: React.FC<FeaturesProps> = ({
  featuresList,
  startingAt,
  bgImage,
  headerText,
  isButtonInclude,
}) => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <section className="relative text-white min-h-screen">
      <div
        className="absolute inset-0 z-0  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      {startingAt && (
        <div
          className="absolute top-4 -right-2 text-center text-quote sm:top-10 sm:right-2 md:top-10 md:right-0 p-4
         font-display text-yellowGreen font-bold transform rotate-45 tracking-wider md:text-display2"
        >
          Starting at <br /> 7€/h
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center mx-5 py-10 md:mx-auto md:py-20">
        <h2 className="text-center text-display2 font-display mb-12">
          {headerText}
        </h2>
        <div className="flex flex-col gap-16">
          {featuresList.map((item) => (
            <div
              key={item.heading}
              className="flex flex-col items-center gap-4 md:flex-row md:gap-16 md:items-start"
            >
              <div>
                <Image
                  src={item.iconPath}
                  alt="section icon"
                  width={90}
                  height={90}
                />
              </div>
              <div className=" max-w-lg">
                <h3 className=" text-display4">{item.heading}</h3>
                <p className="text-p">{item.text}</p>
                {item?.link && (
                  <Link
                    href={`${item.linkPath}`}
                    className="flex items-center gap-2 mt-2"
                  >
                    <Image
                      src={item.flashGreenIcon!}
                      alt="section icon"
                      width={11.46}
                      height={18.46}
                    />
                    <p className="text-small">{item.linkText}</p>
                  </Link>
                )}
                {item?.button && (
                  <button
                    className="flex items-center gap-2 mt-2"
                    onClick={handleClick}
                  >
                    <Image
                      src={item.flashGreenIcon!}
                      alt="section icon"
                      width={11.46}
                      height={18.46}
                    />
                    <p className=" text-small">{item.buttonText}</p>
                  </button>
                )}
                {toggle && (
                  <p className=" pl-5 text-small">
                    {item?.collapsableText}
                    {toggle && (
                      <Link
                        className="text-yellowGreen underline"
                        href="/fortalents/jointhecommunity"
                      >
                        {item.collapseLink}
                      </Link>
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        {isButtonInclude && (
          <Link
            href="/fortalents/jointhecommunity"
            className="text-white px-3 py-1 mt-3 text-sm font-semibold rounded-lg border-2 border-cyan"
          >
            get started
          </Link>
        )}
      </div>
    </section>
  );
};

export default FeaturesComponent;
