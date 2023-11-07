import Header from "@/components/header/header";
import React from "react";
import backgroundImage from "../../../../public/photos/02_WhatWeDo/background.jpg";
import Quote from "@/components/whatwedopage/quote";
import CourseFinder from "@/components/whatwedopage/courseFinder/courseFinder";
import Requirements from "@/components/whatwedopage/requirements";
import AcademyFeatures from "@/components/whatwedopage/academyfeatures";
import WhatWeDoAndWhy from "@/components/whatWeDoAndWhy";
import Faq from "@/components/whatwedopage/faq/faq";

const Academy = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="What we do"
        text="Our nonproﬁt organization is dedicated to offering you high-quality IT education at various locations. In collaboration with our dedicated partners, we provide hands-on training in a group setting."
        playTitle="course introduction"
      />
      <Quote />
      <AcademyFeatures />
      <Faq />
      <CourseFinder />
    </>
  );
};

export default Academy;
