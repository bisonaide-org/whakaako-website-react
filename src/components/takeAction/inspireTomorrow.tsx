import Image from "next/image";
import backgroundImage from "../../../public/photos/06_TakeAction/inspire_tomorrow_background.jpg";
import inspireTomorrow from "../../../public/photos/06_TakeAction/inspire_tomorrw_portrait.jpg";
import Link from "next/link";

const InspireTomorrow = () => {
  return (
    <section className=" relative h-full min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      <div className="relative z-10 min-h-screen max-w-5xl px-5 py-16 flex flex-col justify-center items-center lg:px-0  mx-auto ">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-16">
          <Image
            src={inspireTomorrow.src}
            alt="a man standing- inspire tomorros's leaders"
            width={190}
            height={295}
            className="rounded"
          />
          <div className="flex flex-col items-center lg:items-start text-p text-white max-w-xl">
            <h2 className=" text-center text-display2 font-display pb-6 lg:text-start">
              Inspire Tomorrow&apos;s Tech Leaders
            </h2>
            <p className=" pb-6">Become a volunteer!</p>
            <hr className=" mt-3 w-20 h-1 bg-white rounded" />
            <p className=" pt-6 pb-12">
              Be a part of our team and inspire the next generation of IT
              professionals. Your expertise can transform lives, closing the
              skills gap and empowering students for a brighter future. Join us
              in shaping the tech leaders of tomorrow!
            </p>
            <Link
              href="https://tally.so/r/mVPeyN"
              className="px-4 py-2 text-sm font-semibold font-display rounded-lg border-2 border-cyan hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InspireTomorrow;
