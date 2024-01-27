import Image from "next/image";
import HowItWorksData from "./types";

interface HowItWorksProps {
  howItWorksData: HowItWorksData[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ howItWorksData }) => {
  return (
    <section id="Howitworks" className="relative text-white ">
      <div className="relative z-10 flex flex-col items-center mx-5 md:mx-auto md:py-20 max-w-5xl">
        <div>
          <div className="text-center">
            <h2 className="text-display1 font-display text-grayBodtText sm:mt-10 md:pb-24 lg:pb-10">
              How it works
            </h2>
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {howItWorksData.map((item, index) => (
            <div key={index} className={`flex flex-col items-center gap-4 p-4`}>
              <div className="flex flex-col ">
                <div className="flex items-center sm:h-3 md:h-52 lg:h-52  ">
                  <Image
                    src={item.icon}
                    alt={`icon ${index + 1}`}
                    width={50}
                    height={50}
                    objectFit="cover"
                  />
                  <div className="flex flex-col ml-4">
                    <span className="ml-2 font-display font-bold text-grayBodtText">
                      {item.heading}
                    </span>
                    <span className="font-display text-grayBodtText ml-2">
                      {item.text}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
