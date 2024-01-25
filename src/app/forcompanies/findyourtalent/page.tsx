import Header from "@/components/header/header";
import backgroundImage from "../../../../public/photos/03_ForCompanies/background_header.jpg";
import Quote from "@/components/quote/quote";
import AskForARemoteAssistantForm from "@/components/forCompaniesPage/askForARemoteAsistantForm";
import FeaturesComponent from "@/components/featuresComponent/featuresComponent";
import BgImage from "../../../../public/photos/03_ForCompanies/bg-people.jpg";
import { FeaturesItem } from "@/components/featuresComponent/types";
import Faq from "@/components/faq/faq";
import { forCompaniesQuestions } from "../../../helper/faqData";

const featuresList: FeaturesItem[] = [
  {
    iconPath: "/photos/03_ForCompanies/1_line.png",
    heading: "Remote talent",
    text: "Hire a wonderful remote talent and change a life. No matter if you need support in office work, programming, data input or graphic design. We have lots of extremely talented individuals that can support you.",
    flashGreenIcon: "/photos/Shared_Icons/flashGreenIcon.svg",
    link: true,
    linkText: "Let us hand-pick you the perfect match",
    linkPath: "#Howitworks",
  },
  {
    iconPath: "/photos/03_ForCompanies/2_line.png",
    heading: "SKILL HUB",
    text: "Oakyard SKILL HUB excels in molding professionals to align with your specific company requirements, offering a tailored approach to skill development.",
    flashGreenIcon: "/photos/Shared_Icons/flashGreenIcon.svg",
    link: true,
    linkText: "Get in touch with us",
    linkPath: "#Howitworks", // Opens contact form
  },
  {
    iconPath: "/photos/03_ForCompanies/3_line.png",
    heading: "Software projects",
    text: "At Oakyard, we excel in IT development for smaller projects. We invite companies to share their precise requirements, and rest assured, our unbeatable prices make turning your vision into reality both affordable and efficient. Plus, by working with us, you also help us provide real-world experience for our emerging talents.",
    flashGreenIcon: "/photos/Shared_Icons/flashGreenIcon.svg",
    link: true,
    linkText: "Get in touch with us",
    linkPath: "#Howitworks", // Opens contact form
  },
];

const ForCompanies = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="Find your Talent"
        text="We're focused on finding you talented workers from countries in
        crisis where the work really matters. Hire a wonderful virtual
        assistant or talented software expert and change a life."
        isButton={true}
      />
      <Quote
        quote="Investing in the potential of individuals who face adversity is not only a moral imperative, but also a smart business strategy that unlocks untapped talent and drives innovation."
        originator="Stefan Eichenhofer"
      />
      <FeaturesComponent
        featuresList={featuresList}
        bgImage={BgImage.src}
        headerText={"What we offer"}
        startingAt={true}
      />

      <AskForARemoteAssistantForm />
      <Faq data={forCompaniesQuestions} />
    </>
  );
};

export default ForCompanies;
