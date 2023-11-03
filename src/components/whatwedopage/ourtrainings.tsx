"use client";

import Image from "next/image";
import backgroundImage from "../../../public/photos/02_WhatWeDo/Background_Academy_features.png";
import Link from "next/link";
import { useState } from "react";

const ourTrainingOfferings = [
  {
    iconPath: "/photos/02_WhatWeDo/Icons/Bild1.png",
    heading: "Diverse Course Selection",
    text: " We offer courses at various levels to cater to your individual needs. From beginners to experts, you'll ﬁnd the right course for your IT journey",
    flashGreenIcon: "/photos/02_WhatWeDo/Icons/flashGreenIcon.svg",
    link: true,
    linkText: "Course Finder",
  },
  {
    iconPath: "/photos/02_WhatWeDo/Icons/Icon _head _with _light_bulb.svg",
    heading: "Mentored Courses",
    text: "We believe that the most effective learning occurs when you can ask questions and receive practical tasks to demonstrate your ability to apply theory. Our experienced IT professionals provide guidance and assistance in this process.",
  },
  {
    iconPath: "/photos/02_WhatWeDo/Icons/Bild2.png",
    heading: "Hands-On",
    text: "We provide hands-on projects, allowing students and graduates to apply their knowledge and gain practical experience, bridging the gap between academia and real-world skills.",
    flashGreenIcon: "/photos/02_WhatWeDo/Icons/flashGreenIcon.svg",
    button: true,
    buttonText: "Training overview",
    collapsableText: "Currently no trainings open",
  },
  {
    iconPath: "/photos/02_WhatWeDo/Icons/Bild4.png",
    heading: "Global Career",
    text: " Our goal is to prepare you for the global job market. We provide job search support and connect you with companies worldwide.",
  },
];

const OurTrainings = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <section className="relative text-white">
      <div
        className="absolute inset-0 z-0  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center mx-5 py-10 md:mx-auto md:py-20">
        <h2 className="text-center text-display2 font-display mb-12">
          ACADEMY features
        </h2>
        <div className="flex flex-col gap-16">
          {ourTrainingOfferings.map((item) => (
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
                    href="#courseFinder"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={item.flashGreenIcon}
                      alt="section icon"
                      width={11.46}
                      height={18.46}
                    />
                    <p className="text-small">{item.linkText}</p>
                  </Link>
                )}
                {item?.button && (
                  <button
                    className="flex items-center gap-2"
                    onClick={handleClick}
                  >
                    <Image
                      src={item.flashGreenIcon}
                      alt="section icon"
                      width={11.46}
                      height={18.46}
                    />
                    <p className=" text-small">{item.buttonText}</p>
                  </button>
                )}
                {toggle && (
                  <p className=" pl-5 text-small">{item?.collapsableText}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <Link
          href="#" //!Go to "Join our community" page when it is ready
          className="text-white px-3 py-1 mt-3 text-sm font-semibold rounded-lg border-2 border-cyan"
        >
          get started
        </Link>
      </div>
    </section>
  );
};

export default OurTrainings;
