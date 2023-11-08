import Header from "@/components/header/header";
import backgroundImage from "../../public/photos/01_landingPage/photos/header_background.jpg";
import BreakingBarriers from "@/components/landingPage/breakingBarriers";

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
      <BreakingBarriers />
    </div>
  );
};

export default Oakyard;
