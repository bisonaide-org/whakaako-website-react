import Header from "@/components/header/header";
import backgroundImage from "../../../../public/photos/02_ForTalents/JoinTheCommunityPhotos/background_header.jpg";

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
    </>
  );
};

export default JoinTheCommunity;
