import Header from "@/components/header/header";
import backgroundImage from "../../../public/photos/03_ForCompanies/background_header.jpg";

const JoinTheCommunity = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="Find your Talent"
        text="We’re focused on finding you talented workers from countries in
        crisis where the work really matters. Hire a wonderful virtual
        assistant or talented software expert and change a life."
        isButton={true}
      />
    </>
  );
};

export default JoinTheCommunity;
