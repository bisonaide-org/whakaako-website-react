import Image from "next/image";
import arrowIcon from "../../../public/photos/02_WhatWeDo/arrowIcon.svg";

interface Props {
  title: string;
  content: string;
  image: string;
}

const Card = (props: Props) => {
  return (
    <div className="bg-white border-darkBlue border-[3px] rounded-lg pl-7 pr-4 pb-5 shadow-md w-[253.401px] h-[440.78px] text-p flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center pb-7">
          <Image src={props.image} alt="card image" width={175} height={175} />
          <h3 className="text-xl font-semibold">{props.title}</h3>
        </div>
        <p className="mt-2">{props.content}</p>
      </div>

      <div className="flex flex-col">
        <Image
          src={arrowIcon.src}
          alt="learn more icon"
          width={20.35}
          height={12.63}
          className=" mx-auto mt-auto"
        />
      </div>
    </div>
  );
};

export default Card;
