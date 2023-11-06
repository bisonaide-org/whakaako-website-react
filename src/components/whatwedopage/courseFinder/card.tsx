import Image from "next/image";
import arrowIcon from "../../../../public/photos/02_WhatWeDo/arrowIcon.svg";

interface Props {
  title: string;
  content: string;
  image: string;
}

const Card = (props: Props) => {
  return (
    <div className="bg-white bg-opacity-75 text-grayBodtText text-p border-darkBlue border-[3px] rounded-lg px-2 pb-5 shadow-md w-[190px] h-[331px]  flex flex-col justify-between">
      <div className=" pt-9">
        <div className="flex flex-col items-center gap-6">
          <Image src={props.image} alt="card image" width={175} height={175} />
          <h3 className="text-display4 font-display">{props.title}</h3>
        </div>
        <p className="pt-9">{props.content}</p>
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
