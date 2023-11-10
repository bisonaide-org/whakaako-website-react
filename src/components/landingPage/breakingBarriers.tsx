import Image from "next/image";
import image1 from "../../../public/photos/01_landingPage/photos/breaking_barriers_1.jpg";
import image2 from "../../../public/photos/01_landingPage/photos/breaking_barriers_2.jpg";
import Link from "next/link";

const BreakingBarriers = () => {
  return (
    <div className="flex flex-col gap-20 items-center text-grayBodtText px-5 pt-16 pb-14 md:px-0">
      <div>
        <div className="text-center">
          <h2 className="text-display2 font-display pb-9 ">
            Breaking Barriers, Bridging Talent
          </h2>
        </div>

        <div className="flex flex-col gap-7 text-p max-w-[630px] ">
          <p>
            At Oakyard, we passionately envision a world where individuals work
            from the heart of their homes, close to family and friends. Global
            inequality often drives migration for secure livelihoods. At the
            same time, prosperous regions face skilled labor shortages, creating
            a disconnect.
          </p>
          <p>
            To bridge this gap, Oakyard specializes in remote training and job
            mediation. We connect companies in need of professionals with this
            untapped global talent, nurturing dreams and fostering economic
            growth.
          </p>
          <p>
            Additionally, we are dedicated to educating and training talents,
            empowering them to thrive in this changing landscape. It&#39;s about
            finding meaningful work where your heart is, and at Oakyard,
            we&#39;re committed to making this vision a reality.
          </p>
        </div>
        <hr className=" mt-3 w-20 h-1 bg-grayBodtText mx-auto rounded" />

        {/* {props.isHorizantalBreak && (
          <hr className=" w-20 h-1 bg-grayBodtText mx-auto rounded" />
        )} */}
      </div>
      <div className="flex gap-3">
        <Image
          style={{ borderRadius: "20px" }}
          src={image1}
          alt="people attending a lesson"
          width={370}
          height={246}
        />
        <Image
          style={{ borderRadius: "20px" }}
          src={image2}
          alt="people attending a lesson"
          width={370}
          height={246}
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className=" text-display2 font-display">Heading for an IT career?</p>
        {/*Set href to= /jointhecommunity when the page is ready  */}
        <Link
          href="#"
          className="px-4 py-2 text-sm font-semibold font-display rounded-lg border-2 border-cyan hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >
          <span>get started</span>
        </Link>
      </div>
    </div>
  );
};

export default BreakingBarriers;
