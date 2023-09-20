import Header from "@/components/header/header";
import backgroundImage from "../../public/photos/01_landingPage/photos/close-up-portrait-of-freelance-it-specialists-looking-at-laptop-screen-with-smile.jpg";

const Whakaako: React.FC = () => {
  return (
    <Header
      backgroundImage={backgroundImage.src}
      heading="Spark your future"
      text="With the whakaako initiative, we offer free IT training courses for disadvantaged people. Worldwide."
      playTitle="whakaako."
      playText="in 30 Seconds"
    />
  );
};

export default Whakaako;
