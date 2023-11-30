import Header from "@/components/header/header";
import backgroundImage from "../../../../public/photos/02_ForTalents/JobAndMorePhotos/background_header.jpg";
import FeaturesComponent from "@/components/featuresComponent/featuresComponent";
import jmImage from "../../../../public/photos/02_ForTalents/JobAndMorePhotos/how_can_we_help_you.jpg";
import { FeaturesItem } from './../../../components/featuresComponent/types';


const featuresList: FeaturesItem[] = [
  {
    iconPath: "/photos/Shared_Icons/bild4.svg",
    heading: "Start a global IT career",
    text: " Join Oakyard's talent pool to launch your remote IT career. Unlock exciting opportunities and access our expert support network. Your journey to success starts here.",
    flashGreenIcon: "/photos/Shared_Icons/flashGreenIcon.svg",
    link: true,
    linkText: "Start your career now",
    linkPath: "/fortalents/jointhecommunity",
  },
  {
    iconPath: "/photos/02_ForTalents/JobAndMorePhotos/certificate.svg",
    heading: "Get a course at Oakyard ACADEMY",
    text: "We offer courses at various levels to cater to your individual needs. From beginners to experts, you'll find the right course for your IT journey.",
    flashGreenIcon: "/photos/Shared_Icons/flashGreenIcon.svg",
    link: true,
    linkText: "More about ACADEMY",
    linkPath: "/fortalents/academy",
  },
  {
    iconPath: "/photos/Shared_Icons/Bild2.png",
    heading: "Hands-on at Oakyard BOOT CAMP",
    text: "We provide hands-on projects as training, allowing students and graduates to apply their knowledge and gain practical experience,bridging the gap between academia and real-world skills.",
    flashGreenIcon: "/photos/Shared_Icons/flashGreenIcon.svg",
    button: true,
    buttonText: "Training overview",
    collapsableText:
      "Currently no vacancies at Oakyard SKILL HUB. You can join the Community to enter the waiting list. Please apply her:",
    collapseLink: " Join the Community",
  },
];

const JobAndMore: React.FC = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="Job & More"
        text="Are you on the hunt for a job? Seeking to level up your IT skills? Eager
        to dive into projects for real-world experience before hitting the job
        market? Look no further – you're in the right place!
        "
      />
      <FeaturesComponent
        featuresList={featuresList}
        bgImage={jmImage.src}
        headerText={"How can we help you?"}
      />
    </>
  );
};

export default JobAndMore;
