import Image from "next/image";
import React from "react";
import { teamImages } from "./teamPhotos";

interface Team {
  path: string;
  alt: string;
}

const TheTeam: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center text-grayBodtText px-2 pt-8 pb-32 md:px-0 mt-10 mb-10 bg-lightGrayBackground">
      <div>
        <div className="text-center">
          <h2 className="text-display2 font-display pb-2">The Team</h2>
        </div>
        <div className="text-center pb-9">
          <p className="pb-14">
            We are contributing to making the world a smarter place!
          </p>
          <hr className="w-20 h-1 bg-grayBodtText mx-auto rounded" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center max-w-xl">
        {teamImages.map((person: Team, index: number) => (
          <div key={index} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/3 p-2">
            <Image
              src={person.path}
              alt={person.alt}
              layout="responsive"
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;
