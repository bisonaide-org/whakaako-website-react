import Header from "@/components/header/header";
import backgroundImage from "../../../../public/photos/02_ForTalents/JoinTheCommunityPhotos/background_header.jpg";
import CommunityApplicationForm from "@/components/forTalents/joinTheCommunityPage/communityAplicationForm";

const JoinTheCommunity = () => {
  return (
    <>
      <Header
        backgroundImage={backgroundImage.src}
        heading="Join the COMMUNITY"
        text="Join the Oakyard Community, your gateway to a world of
        opportunity! At Oakyard, we're dedicated to placing highly
        motivated individuals in exciting job roles. Be part of our community,
        and let us help you achieve your career aspirations
        "
        playTitle="The Oakyard COMMUNITY"
      />
      <CommunityApplicationForm />
    </>
  );
};

export default JoinTheCommunity;
