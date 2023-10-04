import Image from "next/image";
import backgroundImage from "../../../public/photos/02_WhatWeDo/P1000639.jpg";
import Link from "next/link";

const ourTrainingOfferings = [
  {
    iconPath: "/photos/02_WhatWeDo/Icons/Bild1.png",
    heading: "Diverse Course Selection",
    text: " We offer courses at various levels to cater to your individual needs. From beginners to experts, you'll ﬁnd the right course for your IT journey",
    flashGreenIcon: "/photos/02_WhatWeDo/Icons/flashGreenIcon.svg",
  },
  {
    iconPath: "/photos/02_WhatWeDo/Icons/Bild2.png",
    heading: "Practical Training",
    text: "   We believe in learning by doing. Our courses are hands-on, giving you the opportunity to apply your knowledge in real-world situations.",
  },
  {
    iconPath: "/photos/02_WhatWeDo/Icons/Bild3.png",
    heading: "Worldwide Expertise",
    text: "  Our instructors are experienced IT professionals from around the world. They bring international perspectives to the classroom and share their experiences with you.",
  },
  {
    iconPath: "/photos/02_WhatWeDo/Icons/Bild4.png",
    heading: "Global Career",
    text: " Our goal is to prepare you for the global job market. We provide job search support and connect you with companies worldwide.",
  },
];
const OurTrainings = () => {
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
          Our Training Offerings
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
                <p>{item.text}</p>
                {item?.flashGreenIcon && (
                  <Link href="#" className="flex items-center gap-2">
                    <Image
                      src={item.flashGreenIcon}
                      alt="section icon"
                      width={11.46}
                      height={18.46}
                    />
                    <p>Course Finder</p>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTrainings;
