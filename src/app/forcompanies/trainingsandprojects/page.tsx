import Header from "@/components/header/header";
import headerBackground from "../../../../public/photos/03_ForCompanies/TrainingsAndProjects/header_background.jpg";
import Quote from "@/components/quote/quote";
import FeaturesComponent from "@/components/featuresComponent/featuresComponent";
import { FeaturesItem } from "@/components/featuresComponent/types";
import whatWeOfferBackground from "../../../../public/photos/03_ForCompanies/TrainingsAndProjects/whatWeOfferBackground.jpg";
import AskForARemoteAssistantForm from "@/components/forCompaniesPage/askForARemoteAsistantForm";
import HowItWorks from "@/components/forCompaniesPage/HowItWorks";
import { howItWorksData } from "@/helper/trainingsAndProjects/howItWorksData";
import { featuresList } from "@/helper/trainingsAndProjects/featureList";

const TrainingsAndProjects = () => {
  return (
    <>
      <Header
        backgroundImage={headerBackground.src}
        heading="Trainings & Projects"
        text="Oakyard enhances your team's capabilities and outsources simpler project tasks. They optimize team performance, allowing you to focus on core activities while managing routine project work."
        isButton={true}
      />
      <Quote
        quote="The only thing worse than training your employees and having them leave is not training them and having them stay."
        originator="- Henry Ford, Founder, Ford Motor Company"
      />
      <FeaturesComponent
        featuresList={featuresList}
        bgImage={whatWeOfferBackground.src}
        headerText="Standard IT-Trainings"
      />
      <HowItWorks howItWorksData={howItWorksData} />
      <AskForARemoteAssistantForm />
    </>
  );
};

export default TrainingsAndProjects;
