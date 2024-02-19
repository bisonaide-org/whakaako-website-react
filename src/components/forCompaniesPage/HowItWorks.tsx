import Image from "next/image";
import HowItWorksData from "./types";

interface HowItWorksProps {
  howItWorksData: HowItWorksData[];
}

const HowItWorks: React.FC<HowItWorksProps> = ({ howItWorksData }) => {
  return (
    <section id="Howitworks" className="py-16">
      <div className=" max-w-4xl mx-auto px-5">
        <h2 className="text-display1 font-display text-grayBodtText text-center pb-14">
          How it works
        </h2>
        <div className="flex flex-col md:flex-row gap-7">
          {howItWorksData.map((item) => (
            <div
              key={item.heading}
              className="flex flex-col items-center gap-4 md:items-start md:flex-row md:flex-1 "
            >
              <Image
                className="mt-10"
                src={item.icon}
                alt={item.iconName}
                width={70}
                height={100}
              />
              <div className="flex flex-col">
                <h3 className=" text-display4 text-grayBodtText">
                  {item.heading}
                </h3>
                <p className="font-display text-grayBodtText">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
