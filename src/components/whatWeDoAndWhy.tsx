import Image from "next/image";
import React from "react";

const imagePaths = [
  "/photos/01_landingPage/photos/1.jpeg",
  "/photos/01_landingPage/photos/2.jpg",
  "/photos/01_landingPage/photos/4B7A7270.jpeg",
  "/photos/01_landingPage/photos/4.jpeg",
];

const whatWeDoAndWhy = () => {
  return (
    <div className="flex flex-col">
      {/* First div with 1/4 height */}
      <div className="flex-1/4 p-2 justify-between items-center ">
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl mt-12 ">What we do and Why?</p>
        </div>

        <div className="flex flex-col justify-center items-center text-xl gap-4 mt-8">
          <p>Whakaako promotes equal opportunity.</p>
          <p>
            It offers free IT training and facilitates remote work
            opportunities.
          </p>
          <p>
            Project placements enable individuals to work from their native
            countries.
          </p>
        </div>
        <div className="w-36 border border-b-8 border-gray-700 rounded m-auto my-4"></div>
      </div>

      {/* Second div with 2/4 (1/2) height */}
      <div className="flex-1/2 ">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {imagePaths.map((imagePath, index) => (
            <div key={index} className="col-span-1">
              <div className="flex justify-center">
                <div className="w-[400px] h-full">
                  <Image
                    style={{ borderRadius: "20px" }}
                    src={imagePath}
                    alt={`Image ${index}`}
                    layout="responsive"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third div with 1/4 height */}
      <div className="flex-1/4 mt-12 flex justify-between items-center flex-col gap-4">
        <p className="text-2xl" >We are here for you!</p>
        <button className="text-black px-4 py-2 text-sm font-semibold rounded-lg border border-cyan hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <span>contact us</span>
        </button>
        <p>
          If you want to know about whakaako or bisonaide in general, we are
          always
        </p>
        <p>here for you. We would love to hear from you.</p>
        <div className="w-36 border border-b-8 border-gray-700 mt-4 rounded"></div>
      </div>
    </div>
  );
};

export default whatWeDoAndWhy;
