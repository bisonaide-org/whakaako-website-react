import Header from "@/components/header/header";
import React from "react";
import backgroundImage from "../../../public/photos/02_WhatWeDo/background.jpg";
import Quote from "@/components/whatwedopage/quote";
import CourseFinder from "@/components/whatwedopage/courseFinder";

const WhatWeDo = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="What we do"
        text="Our nonproﬁt organization is dedicated to offering you high-quality IT education at various locations. In collaboration with our dedicated partners, we provide hands-on training in a group setting."
        playTitle="course introduction"
      />
      <Quote />
      <CourseFinder />
    </>
  );
};

export default WhatWeDo;
