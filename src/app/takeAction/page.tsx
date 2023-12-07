import Header from "@/components/header/header";
import backgroundImage from "../../../public/photos/06_TakeAction/header_background.jpg";
import InspireTomorrow from "@/components/takeAction/inspireTomorrow";
import Volunteering from "@/components/takeAction/volunteering";

const TakeAction = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="Take Action"
        text="Ready to make a difference? Explore how you can support our mission, whether by donating, volunteering, or partnering. Your actions shape a brighter future."
      />
      <InspireTomorrow />
      <Volunteering />
    </>
  );
};

export default TakeAction;
