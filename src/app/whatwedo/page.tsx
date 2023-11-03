import Header from "@/components/header/header";
import React from "react";
import backgroundImage from "../../../public/photos/02_WhatWeDo/background.png";
import Quote from "@/components/whatwedopage/quote";
import CourseFinder from "@/components/whatwedopage/courseFinder";
import Requirements from "@/components/whatwedopage/requirements";
import OurTrainings from "@/components/whatwedopage/ourtrainings";
import WhatWeDoAndWhy from "@/components/whatWeDoAndWhy";
import Faq from "@/components/whatwedopage/faq/faq";

const WhatWeDo = () => {
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
      <Quote />
      <OurTrainings />
      <Faq />
      <CourseFinder />
      <Requirements />
      <WhatWeDoAndWhy
        text="If you`re interested in learning more about whakaako or bisonaide in general, please don`t hesitate to reach out to us. We would love to hear from you!"
        isHorizantalBreak={false}
        isButtonDown={true}
      />
    </>
  );
};

export default WhatWeDo;
