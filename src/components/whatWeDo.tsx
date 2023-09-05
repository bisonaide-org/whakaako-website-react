import Image from "next/image";
import React from "react";

const whatWeDo = () => {
  return (
    <div className=" flex flex-col  items-center h-screen gap-12  ">
      <div>
        <p className="text-6xl mt-12">What we do and Why?</p>
      </div>

      <div className="flex flex-col justify-center items-center text-xl">
        <p>Whakaako promotes equal opportunity.</p>
        <p>
          It offers free IT training and facilitates remote work opportunities.
        </p>
        <p>
          {" "}
          Project placements enable individuals to work from their native
          countries.
        </p>
      </div>

      <div className="w-36 border border-b-8 border-gray-700 rounded"></div>

      <div className="grid gird-cols-2 grid-rows-2">
        <div className="row-span-1 col-span-1" >
          <Image />
        </div>
        <div className="row-span-1 col-span-1" >
          <Image />
        </div>
        <div className="row-span-1 col-span-1" >
          <Image />
        </div>
        <div className="row-span-1 col-span-1" >
          <Image />
        </div>
      </div>
    </div>
  );
};

export default whatWeDo;
