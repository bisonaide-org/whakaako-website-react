import Header from "@/components/header/header";
import React from "react";
import backgroundImage from "../../../../public/photos/02_ForTalents/AcademyPhotos/background_header.jpg";
import Quote from "@/components/quote/quote";
import CourseFinder from "@/components/forTalents/academyPage/courseFinder/courseFinder";
import AcademyFeatures from "@/components/forTalents/academyPage/academyfeatures";
import Faq from "@/components/forTalents/academyPage/faq/faq";

const Academy = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="ACADEMY"
        text="The oakyard ACADEMY is committed to providing mentor-led IT
        courses for young people with restricted access to IT education and
        Jobs . We also instructs on other essential subjects that the world of
        tomorrow requires."
        playTitle="the Oakyard ACADEMY"
      />
      <Quote
        quote="Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        originator="Malcom X"
      />
      <AcademyFeatures />
      <Faq />
      <CourseFinder />
    </>
  );
};

export default Academy;
