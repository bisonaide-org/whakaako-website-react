import Header from "@/components/header/header";
import React from "react";
import backgroundImage from "../../../public/photos/02_WhatWeDo/background.jpg";
import Quote from "@/components/whatwedopage/quote";
import CourseFinder from "@/components/whatwedopage/courseFinder";
import OurTrainings from "@/components/whatwedopage/ourtrainings";
import WhatWeDoAndWhy from "@/components/whatWeDoAndWhy";

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
      <OurTrainings />
      <CourseFinder />
      <WhatWeDoAndWhy
        text="If you`re interested in learning more about whakaako or bisonaide in general, please don`t hesitate to reach out to us. We would love to hear from you!"
        isHorizantalBreak={false}
        isButtonDown={true}
      />
    </>
  );
};

export default WhatWeDo;
