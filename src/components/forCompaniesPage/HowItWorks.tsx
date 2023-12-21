import Image from "next/image";

interface CheckOutOffering {
  icon: string;
  link: string;
  desc: string;
  text: string;
  width: number;
  height: number;
}

const checkOutOfferings: CheckOutOffering[] = [
  {
    icon: "/photos/03_ForCompanies/path213.png",
    desc: "Tell us what you need help with and we´ll handpick three options for you to review",
    link: "/",
    text: "Ask for profiles",
    width: 70,
    height: 70,
  },
  {
    icon: "/photos/03_ForCompanies/Icon_call.png",
    desc: "Arrange a free call to acquaint yourself with the employee and determine if it us a good match",
    link: "/",
    text: "Learners",
    width: 49,
    height: 49,
  },
  {
    icon: "/photos/03_ForCompanies/icon-arrows.png",
    desc: "A straightforward hourly payment system No extended commitments. No minimum requirements. No cancel charges.",
    link: "/",
    text: 'Pay "To Go"',
    width: 61,
    height: 61,
  },
];

const CheckOut = () => {
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
          {checkOutOfferings.map((item, index) => (
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
                      {item.text}
                    </span>
                    <span className="font-display text-grayBodtText ml-2">
                      {item.desc}
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

export default CheckOut;
