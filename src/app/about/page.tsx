import Header from "@/components/header/header";
import backgroundImage from "../../../public/photos/04_About/background_header.jpg";
import WhatThrivesUs from "@/components/about/whatThrivesUs";
import TheTeam from "@/components/about/theTeam";

const About = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="About Oakyard"
        text="Oakyard is not just a name; it's a symbol of innovation and
        collaboration. This platform was born from the desire to bridge the
        gap between academic knowledge and the real-world needs of
        industries. Oakyard is all about nurturing talent, providing
        opportunities, and connecting skilled individuals with companies
        hungry for their expertise."
      />
      <WhatThrivesUs/>
      <TheTeam/>
    </>
  );
};

export default About;
