import Image from "next/image";
import React from "react";
import cardImage1 from "../../../public/photos/01_landingPage/news-updates/In-the-news.jpg";
import cardImage2 from "../../../public/photos/01_landingPage/news-updates/Romania.jpg";
import cardImage3 from "../../../public/photos/01_landingPage/news-updates/aI-in-education.jpg";
import NewsCard from "./newsCard";

const newsUpdatesInsights = () => {
  return (
    <div className=" flex flex-col justify-center items-center text-grayBodtText px-5 pt-16 pb-14 md:px-0 ">
      <div className="pb-11">
        <div className="text-center">
          <h2 className="text-display2 font-display pb-9 ">
            News, Updates, Insights
          </h2>
        </div>
        <div className=" text-center pb-9">
          <p className=" pb-9">
            You can't change the world in one day but the world changes every
            day.
          </p>
          <hr className=" w-20 h-1 bg-grayBodtText mx-auto rounded " />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center max-w-[800px] mx-auto ">
        <NewsCard
          image={cardImage1.src}
          title="In the news"
          content="Non-profit organization aims to provide IT training for disadvantaged people"
        />
        <NewsCard
          image={cardImage2.src}
          title="Romania"
          content="We are very pleased to announce the start of our first course in Romania."
          fullContent="We have recently introduced a comprehensive Basic IT and Ofﬁce 365 course in Oradea. This course has been carefully crafted to provide interested students with a solid foundation in essential IT skills and proﬁciency in using Ofﬁce 365. It's a great opportunity for those looking to build a strong digital skillset and excel in the world of technology."
        />
        <NewsCard
          image={cardImage3.src}
          title="AI in education"
          content="Revolutionizing Education with AI Integration: Transforming Learning for the Future"
          fullContent="We're enhancing course quality through the integration of state-of-the-art technology. Plus, we're putting a stronger focus on AI education within our courses to prepare you for the future!"
        />
      </div>
    </div>
  );
};

export default newsUpdatesInsights;
