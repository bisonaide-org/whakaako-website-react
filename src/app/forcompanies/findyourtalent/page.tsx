import Header from "@/components/header/header";
import backgroundImage from "../../../../public/photos/03_ForCompanies/FindYourTalent/background_header.jpg";
import Quote from "@/components/quote/quote";
import AskForARemoteAssistantForm from "@/components/forCompaniesPage/askForARemoteAsistantForm";
import FeaturesComponent from "@/components/featuresComponent/featuresComponent";
import BgImage from "../../../../public/photos/03_ForCompanies/FindYourTalent/bg-people.jpg";
import { FeaturesItem } from "@/components/featuresComponent/types";
import Faq from "@/components/faq/faq";
import { forCompaniesQuestions } from "../../../helper/findYourTalent/faq";
import HowItWorks from "@/components/forCompaniesPage/HowItWorks";
import { howItWorksData } from "@/helper/findYourTalent/howItWorksData";
import { featuresList } from "@/helper/findYourTalent/featureList";

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
      <HowItWorks howItWorksData={howItWorksData} />
      <AskForARemoteAssistantForm />
      <Faq data={forCompaniesQuestions} />
    </>
  );
};

export default ForCompanies;
