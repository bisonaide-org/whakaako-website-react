import Image from "next/image";
import React from "react";
import Link from "next/link";

interface Sponsor {
  path: string;
  alt: string;
  width: number;
  height: number;
}

const Sponsors: React.FC = () => {
  const sponsorImages: Sponsor[] = [
    {
      path: "/photos/01_landingPage/photos/sponsors/bisonaire.png",
      alt: "bisonaire",
      width: 850,
      height: 600,
    },
    {
      path: "/photos/01_landingPage/photos/sponsors/Peak.png",
      alt: "Peak",
      width: 60,
      height: 40,
    },
    {
      path: "/photos/01_landingPage/photos/sponsors/Logo Schwarz.png",
      alt: "Schwarz",
      width: 180,
      height: 120,
    },
    {
      path: "/photos/01_landingPage/photos/sponsors/Bild-Labdoo.png",
      alt: "Labdoo",
      width: 140,
      height: 90,
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center text-grayBodtText px-2 pt-8 pb-32 md:px-0 mt-10 mb-10"
      style={{ backgroundColor: "#f2f3f7" }}
    >
      <div>
        <div className="text-center">
          <h2 className="text-display2 font-display pb-9">Sponsors</h2>
        </div>
        <div className="text-center pb-9">
          <p className="pb-9">
            We are thankful for everyone who helps us with finances,
            encouragement and deeds. <br />
            Many thanks to all of them!
          </p>
          <hr className="w-20 h-1 bg-grayBodtText mx-auto rounded" />
        </div>
      </div>
      <div
        className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
      gap-14 mx-auto"
      >
        {sponsorImages.map((sponsor: Sponsor, index: number) => (
          <div
            key={index}
            className="w-52 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 flex items-center 
            "
          >
            <Image
              src={sponsor.path}
              alt={sponsor.alt}
              layout="responsive"
              width={sponsor.width}
              height={sponsor.height}
            />
          </div>
        ))}
      </div>
      <div className="mt-28 ">
        <Link href="/takeaction">
          <button className="text-white bg-magenta px-4 py-2 text-sm font-semibold rounded-lg hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
            support us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sponsors;
