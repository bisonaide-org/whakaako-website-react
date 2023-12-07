import Image from "next/image";
import backgroundImage from "../../../public/photos/06_TakeAction/volunteering_background.jpg";
import volunteering from "../../../public/photos/06_TakeAction/volunteering_portrait.jpg";
import Link from "next/link";

const Volunteering = () => {
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
        style={{ backgroundColor: "rgba(221, 226, 237, 0.77)" }}
      ></div>
      <div className="relative z-10 min-h-screen max-w-5xl px-5 py-16 flex flex-col justify-center items-center lg:px-0  mx-auto ">
        <div className="flex flex-col items-center lg:flex-row lg:items-start gap-16">
          <div className="flex flex-col items-center lg:items-start text-p text-grayBodtText max-w-sm">
            <h2 className=" text-center text-display2 font-display pb-5 lg:text-start">
              Volunteering
            </h2>
            <hr className=" mt-3 w-20 h-1 bg-grayBodtText rounded" />
            <p className=" pt-10">
              Our mission is to give young people a perspective for their lives
              through high-quality training for digital professions. To do this,
              we are looking for a variety of volunteers who can contribute
              their professional experience. Make our mission your own!
            </p>
            <p className=" pt-9">
              Someone who volunteers may not get paid, but they get so much
              more.
            </p>
            <p className="pt-9">
              Someone who volunteers may not get paid, but they get so much
              more.
            </p>
            <p className=" pb-6">
              And above all, the feeling of being able to contribute to a better
              future for young people.
            </p>
            <Link
              href="https://tally.so/r/mVPeyN"
              className="px-4 py-2 text-sm font-semibold font-display rounded-lg border-2 border-cyan hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Get started
            </Link>
          </div>
          <Image
            src={volunteering.src}
            alt="a man standing- inspire tomorros's leaders"
            width={190}
            height={295}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default Volunteering;
