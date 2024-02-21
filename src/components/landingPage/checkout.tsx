import Image from "next/image";
import backgroundImage from "/public/photos/01_landingPage/check-out/bg-checkout.jpeg";
import Link from "next/link";

interface CheckOutOffering {
  iconPath: string;
  flashGreenIcon: string;
  link: string;
  text: string;
  width: number;
  height: number;
}

const checkOutOfferings: CheckOutOffering[] = [
  {
    iconPath: "/photos/Shared_Icons/1_landingPage/fist_white.svg",
    flashGreenIcon: "/photos/Shared_Icons/1_landingPage/arrow_green.svg",
    link: "/forcompanies/findyourtalent",
    text: "Companies",
    width: 90,
    height: 90,
  },
  {
    iconPath: "/photos/Shared_Icons/1_landingPage/learner_white.svg",
    flashGreenIcon: "/photos/Shared_Icons/1_landingPage/arrow_green.svg",
    link: "/fortalents/academy",
    text: "Learners",
    width: 85,
    height: 85,
  },
  {
    iconPath: "/photos/Shared_Icons/1_landingPage/job_seeker_white.svg",
    flashGreenIcon: "/photos/Shared_Icons/1_landingPage/arrow_green.svg",
    link: "/fortalents/jointhecommunity",
    text: "Job Seekers",
    width: 83,
    height: 83,
  },
  {
    iconPath: "/photos/Shared_Icons/1_landingPage/our_mission_white.svg",
    flashGreenIcon: "/photos/Shared_Icons/1_landingPage/arrow_blue.svg",
    link: "/takeaction",
    text: "Engage in our mission",
    width: 105,
    height: 105,
  },
];

const CheckOut = () => {
  return (
    <section className="relative text-white min-h-screen ">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat "
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      <div className="relative z-10 flex flex-col items-center mx-5 py-10 md:mx-auto md:py-20">
        <div>
          <div className="text-center">
            <h2 className="text-display2 font-display pb-7">
              Check out what we can do for you
            </h2>
          </div>
          <div className="text-center text-small mb-14">
            <p className="pb-16">
              Choose your role, and we&apos;ll show you how we can help you out.
            </p>
            <hr className="w-20 h-1 bg-white mx-auto rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {checkOutOfferings.map((item, index) => (
            <div key={index} className="flex flex-col gap-4 p-4">
              <div className="relative flex flex-col">
                <div className="flex flex-col">
                  <Link
                    href={item.link}
                    className="flex items-center text-white"
                  >
                    <Image
                      src={item.flashGreenIcon}
                      alt={`flashGreenIcon ${index + 1}`}
                      width={50}
                      height={50}
                    />
                    <span className="ml-2">{item.text}</span>
                  </Link>
                  <div className="flex items-center ml-11">
                    <Image
                      src={item.iconPath}
                      alt={`section icon ${index + 1}`}
                      width={item.width}
                      height={item.height}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-28 relative z-10">
          <h2 className="text-display1 font-display pb-8">
            We create what <br /> companies need. <br /> Talents!
          </h2>
          <Link
            href="/forcompanies/findyourtalent"
            className="px-4 py-2 mb-7 text-sm font-semibold font-display rounded-lg border-2 border-cyan hover:text-gray-900 hover:bg-gray-200 focus:text-gray-900 focus:bg-transparent focus:outline-none focus:shadow-outline"
          >
            get started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
