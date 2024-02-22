import Header from "@/components/header/header";
import React from "react";
import backgroundImage from "../../../../public/photos/02_ForTalents/AcademyPhotos/background_header.jpg";
import Quote from "@/components/quote/quote";
import CourseFinder from "@/components/forTalents/academyPage/courseFinder/courseFinder";
import Faq from "@/components/faq/faq";
import FeaturesComponent from "@/components/featuresComponent/featuresComponent";
import academyImage from "../../../../public/photos/02_ForTalents/AcademyPhotos/background_academy_features.jpg";
import { FeaturesItem } from "./../../../components/featuresComponent/types";
import { academyQuestions } from "./../../../helper/academy/faq";

const featuresList: FeaturesItem[] = [
  {
    iconPath: "/photos/Shared_Icons/4_academy/1.svg",
    heading: "Diverse Course Selection",
    text: " We offer courses at various levels to cater to your individual needs. From beginners to experts, you'll ﬁnd the right course for your IT journey",
    flashGreenIcon: "/photos/Shared_Icons/1_landingPage/arrow_green.svg",
    link: true,
    linkText: "Course Finder",
    linkPath: "#CourseFinder",
  },
  {
    iconPath: "/photos/Shared_Icons/4_academy/2.svg",
    heading: "Mentored Courses",
    text: "We believe that the most effective learning occurs when you can ask questions and receive practical tasks to demonstrate your ability to apply theory. Our experienced IT professionals provide guidance and assistance in this process.",
  },
  {
    iconPath: "/photos/Shared_Icons/4_academy/3.svg",
    heading: "Hands-On",
    text: "We provide hands-on projects, allowing students and graduates to apply their knowledge and gain practical experience, bridging the gap between academia and real-world skills.",
    flashGreenIcon: "/photos/Shared_Icons/1_landingPage/arrow_green.svg",
    button: true,
    buttonText: "Training overview",
    collapsableText: "Currently no trainings open",
  },
  {
    iconPath: "/photos/Shared_Icons/4_academy/4.svg",
    heading: "Global Career",
    text: " Our goal is to prepare you for the global job market. We provide job search support and connect you with companies worldwide.",
  },
];

const Academy: React.FC = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="ACADEMY"
        text="The oakyard ACADEMY is committed to providing mentor-led IT
        courses for young people with restricted access to IT education and
        Jobs . We also instructs on other essential subjects that the world of
        tomorrow requires."
        playTitle="The Oakyard ACADEMY"
      />
      <Quote
        quote="Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
        originator="Malcom X"
      />
      <FeaturesComponent
        featuresList={featuresList}
        bgImage={academyImage.src}
        headerText={"ACADEMY features"}
        isButtonInclude={true}
      />
      <Faq data={academyQuestions} />
      <CourseFinder />
    </>
  );
};

export default Academy;
