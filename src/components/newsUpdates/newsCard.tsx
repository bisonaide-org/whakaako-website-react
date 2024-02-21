"use client";
import Image from "next/image";
import arrowIcon from "/public/photos/Shared_Icons/1_landingPage/down_arrow_green.svg";
import { useState } from "react";

interface Props {
  title: string;
  content: string;
  fullContent?: string;
  image: string;
}

const NewsCard = (props: Props) => {
  const [isContentVisible, setContentVisible] = useState(false);
  const openPdf = () => {
    window.open(
      "/documents/Refund_and_Cancellation_Policy_for_Oakyard_Academy_Online_Courses.pdf",
      "_blank"
    );
  };
  const toggleContent = () => {
    setContentVisible(!isContentVisible);
  };
  return (
    <div className="bg-white gap-1 items-center w-[253.401px] h-[510px] flex flex-col ">
      <div className="flex flex-col items-center">
        <div className=" h-[150px] relative w-full">
          <Image
            className="rounded "
            src={props.image}
            alt="card image"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-xl pt-2">{props.title}</h3>
        <p className="font-light text-xs pr-4 pl-5 text-left">
          {props.content}
        </p>
      </div>

      <div
        className={`${
          isContentVisible ? "block " : "hidden"
        } overflow-hidden mt-2 overflow-y-auto`}
      >
        <p className="  font-light text-xs pr-4 pl-5 text-left overflow-y-auto">
          {props.fullContent}
        </p>
      </div>

      {props.fullContent ? (
        <button
          onClick={toggleContent}
          className=" cursor-pointer flex items-center"
        >
          <Image width={50} height={50} src={arrowIcon} alt={"arrow-icon"} />
        </button>
      ) : (
        <button onClick={openPdf} className=" cursor-pointer flex items-center">
          <Image width={50} height={50} src={arrowIcon} alt={"arrow-icon"} />
        </button>
      )}
    </div>
  );
};

export default NewsCard;
