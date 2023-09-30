import Image from "next/image";
import flashGreen from "../../../public/photos/02_WhatWeDo/Icons/flashGreenIcon.svg";
import firstIcon from "../../../public/photos/02_WhatWeDo/Icons/Bild1.png";
import secondIcon from "../../../public/photos/02_WhatWeDo/Icons/Bild2.png";
import thirdIcon from "../../../public/photos/02_WhatWeDo/Icons/Bild3.png";
import fourtIcon from "../../../public/photos/02_WhatWeDo/Icons/Bild4.png";
import backgrounImage from "../../../public/photos/02_WhatWeDo/P1000639.JPG";

const OurTrainings = () => {
  return (
    <section className="relative text-white">
      <div
        className="absolute inset-0 z-0  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgrounImage.src})` }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center mx-5 py-10 md:mx-auto md:py-20">
        <h2 className="text-center text-display1 font-display mb-12">
          Our Training Offerings
        </h2>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-16 md:items-start">
            <div>
              <Image
                src={firstIcon.src}
                alt="section icon"
                width={90}
                height={90}
              />
            </div>
            <div className=" max-w-lg">
              <h3 className=" text-display4">Diverse Course Selection</h3>
              <p>
                We offer courses at various levels to cater to your individual
                needs. From beginners to experts, you'll ﬁnd the right course
                for your IT journey
              </p>
              <div className="flex items-center gap-2">
                <Image
                  src={flashGreen.src}
                  alt="section icon"
                  width={11.46}
                  height={18.46}
                />
                <p>Course Finder</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-16 md:items-start">
            <div>
              <Image
                src={secondIcon.src}
                alt="section icon"
                width={90}
                height={90}
              />
            </div>
            <div className=" max-w-lg">
              <h3 className=" text-display4">Practical Training</h3>
              <p>
                We believe in learning by doing. Our courses are hands-on,
                giving you the opportunity to apply your knowledge in real-world
                situations.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-16 md:items-start">
            <div>
              <Image
                src={thirdIcon.src}
                alt="section icon"
                width={90}
                height={90}
              />
            </div>
            <div className=" max-w-lg">
              <h3 className=" text-display4">Worldwide Expertise</h3>
              <p>
                Our instructors are experienced IT professionals from around the
                world. They bring international perspectives to the classroom
                and share their experiences with you.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-16 md:items-start">
            <div>
              <Image
                src={fourtIcon.src}
                alt="section icon"
                width={90}
                height={90}
              />
            </div>
            <div className=" max-w-lg">
              <h3 className=" text-display4">Global Career</h3>
              <p>
                Our goal is to prepare you for the global job market. We provide
                job search support and connect you with companies worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTrainings;
