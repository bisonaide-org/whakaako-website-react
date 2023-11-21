import Header from "@/components/header/header";
import backgroundImage from "../../../../public/photos/02_ForTalents/JobAndMorePhotos/background_header.jpg";

const JobAndMore = () => {
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
    </>
  );
};

export default JobAndMore;
