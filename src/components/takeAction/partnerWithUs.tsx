import backgroundImage from "../../../public/photos/06_TakeAction/partner_with_us_background.jpg";
import Link from "next/link";

const PartnerWithUs = () => {
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
      <div className="relative z-10 min-h-screen max-w-5xl px-5 py-16 flex flex-col justify-center items-center lg:items-end lg:pr-11  mx-auto ">
        <div className="flex flex-col items-center lg:items-start text-p text-white max-w-sm">
          <h2 className=" text-center text-display2 font-display pb-6 lg:text-start">
            Partner with Us
          </h2>
          <p className=" pb-6">Empowering Tomorrow&apos;s Tech Workforce</p>
          <hr className=" mt-3 w-20 h-1 bg-white rounded" />
          <p className=" pt-6">
            Is your company eager to make a meaningful difference? Join us in
            empowering the next generation of tech professionals. By partnering
            with Oakyard, you can increase our impact by contributing to and
            shaping our mission. Your support helps bridge the skills gap,
            create job opportunities, and foster innovation within your
            organization.
          </p>
          <p className=" pb-10">
            Let&apos;s shape a brighter future for the tech industry together.
          </p>
          <Link
            href="https://tally.so/r/mBpMK1"
            className="px-4 py-2 text-sm font-semibold font-display rounded-lg border-2 border-cyan hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
          >
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUs;
