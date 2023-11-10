import Header from "@/components/header/header";
import backgroundImage from "../../public/photos/01_landingPage/photos/background.jpg";
import WhatWeDoAndWhy from "@/components/whatWeDoAndWhy";
import NewsUpdatesInsights from "@/components/newsUpdates/newsUpdatesInsights";

const Oakyard: React.FC = () => {
  return (
    <div>
      <Header
        backgroundImage={backgroundImage.src}
        heading="We create talents"
        text={
          "Find your talents and hire from countries in crisis or need.\nStart your IT career @oakyard.\nFor a better future.\nWorldwide."
        }
        playTitle="In a nutshell."
      />
      <WhatWeDoAndWhy
        text="If you want to know about whakaako or bisonaide in general, we are
        always here for you. We would love to hear from you."
        isHorizantalBreak={true}
        isButtonDown={false}
      />
      <NewsUpdatesInsights/>
    </div>
  );
};

export default Oakyard;
