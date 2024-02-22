import Image from "next/image";
import threeGrennArrow from "../../../public/photos/Shared_Icons/6_about_oakyard/3_arrows.svg";
import obstacle from "../../../public/photos/04_About/obstacles_with_runner.png";

const WhatThrivesUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 items-center text-grayBodtText px-5 pt-16 pb-14 md:px-5">
      <div className="flex items-center w-full max-w-5xl">
        <div className="flex-none justify-center lg:ml-10">
          <Image src={threeGrennArrow} width={150} alt="threeGrennArrow" />
        </div>
        <div className="flex grow justify-center lg:pr-40 md:pr-14">
          <h2 className="text-display2 font-display">What thrives us?</h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-7">
        <div className="flex flex-col max-w-[630px] text-p gap-4">
          <p>
            At Oakyard, we firmly believe that{" "}
            <span className="font-bold">
              every individual possesses unique talents.{" "}
            </span>{" "}
            However,{" "}
            <span className="font-bold">
              not everyone is granted the same opportunities{" "}
            </span>
            to nurture and turn these talents into a livelihood. Whether
            it&apos;s due to limited access to quality education, economic
            crises, or other challenging circumstances, life can often feel like
            an{" "}
            <span className="font-bold">
              uphill race filled with unequal obstacles.
            </span>
          </p>
          <p>
            That&apos;s precisely why our mission is{" "}
            <span className="font-bold">
              dedicated to those in need of that extra boost{" "}
            </span>
            to achieve success. We provide education, open doors to remote job
            opportunities, and foster a thriving environment within the Oakyard
            community. Together, we&apos;re breaking down barriers, creating
            pathways to <span className="font-bold">prosperity,</span> and
            supporting one another on the journey to{" "}
            <span className="font-bold">success.</span>
          </p>
        </div>

        <Image src={obstacle} width={280} height={280} alt="obstacle" />
      </div>
      <hr className=" mb-10 w-20 h-1 bg-grayBodtText mx-auto rounded" />
    </div>
  );
};

export default WhatThrivesUs;
