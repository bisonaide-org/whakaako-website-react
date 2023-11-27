import Header from "@/components/header/header";
import backgroundImage from "../../../../public/photos/02_ForTalents/JobAndMorePhotos/background_header.jpg";
import Quote from "@/components/quote/quote";

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
      <Quote
        quote={
          "Dreams without goals are just dreams.\nAnd ultimately they fuel disappointment.\nOn the road to achieving your dreams you must apply discipline.\nBut more importantly consistency.\nBecause without commitment you'll never start.\nBut without consistency you'll never finish."
        }
        originator="Denzel Washington"
      />
    </>
  );
};

export default JobAndMore;
