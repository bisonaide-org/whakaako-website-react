import Header from "@/components/header/header";
import backgroundImage from "../../public/photos/01_landingPage/photos/background.jpg";
import WhatWeDoAndWhy from "@/components/whatWeDoAndWhy";

const Whakaako: React.FC = () => {
  return (
    <div>
      <Header
        backgroundImage={backgroundImage.src}
        heading="Spark your future"
        text="With the whakaako initiative, we offer free IT training courses for disadvantaged people. Worldwide."
        playTitle="whakaako."
        playText="in 30 Seconds"
      />
      <WhatWeDoAndWhy
        text="If you want to know about whakaako or bisonaide in general, we are
        always here for you. We would love to hear from you."
        isHorizantalBreak={true}
        isButtonDown={false}
      />
    </div>
  );
};

export default Whakaako;
