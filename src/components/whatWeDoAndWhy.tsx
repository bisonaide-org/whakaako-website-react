import Image from "next/image";
import React from "react";
import image1 from "../../public/photos/01_landingPage/photos/1.jpeg";
import image2 from "../../public/photos/01_landingPage/photos/2.jpeg";
import image3 from "../../public/photos/01_landingPage/photos/3.jpeg";
import image4 from "../../public/photos/01_landingPage/photos/4.jpeg";

const images = [image1, image2, image3, image4];

const WhatWeDoAndWhy = () => {
  return (
    <div className="flex flex-col justify-center items-center text-grayBodtText px-5 pt-16 pb-14 md:px-0">
      <div className="pb-11">
        <div className="text-center">
          <h2 className="text-display2 font-display pb-9 ">
            What we do and Why?
          </h2>
        </div>

        <div className=" text-center pb-4">
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
        <hr className=" w-20 h-1 bg-grayBodtText mx-auto rounded" />
      </div>

      <div className="pb-12">
        <div className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 gap-3">
          {images.map((imagePath, index) => (
            <div
              key={index}
              className={`flex ${
                index === 0 || index === 2 ? "justify-end" : "justify-start"
              }`}
            >
              <div className="flex justify-end">
                <div className=" w-full md:w-[370px] h-full">
                  <Image
                    style={{ borderRadius: "20px" }}
                    src={imagePath}
                    alt={`Image ${index}`}
                    layout="responsive"
                    width={100}
                    height={60}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-2">
        <p className=" text-display2 font-display pb-6">We are here for you!</p>
        <button className=" px-4 py-2 mb-7 text-sm font-semibold font-display rounded-lg border-2 border-cyan hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
          <span>contact us</span>
        </button>
        <p className=" max-w-md pb-10">
          If you want to know about whakaako or bisonaide in general, we are
          always here for you. We would love to hear from you.
        </p>
        <hr className=" w-20 h-1 bg-grayBodtText mx-auto rounded" />
      </div>
    </div>
  );
};

export default WhatWeDoAndWhy;
