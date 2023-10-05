import Card from "./card";
import cardImage1 from "../../../public/photos/02_WhatWeDo/Illustrations/Coding workshop-pana.png";
import cardImage2 from "../../../public/photos/02_WhatWeDo/Illustrations/Online Doctor-pana.png";
import cardImage3 from "../../../public/photos/02_WhatWeDo/Illustrations/Course app-pana.png";
import cardImage4 from "../../../public/photos/02_WhatWeDo/Illustrations/Seminar-pana.png";

const CourseFinder = () => {
  return (
    <section
      id="courseFinder"
      style={{ backgroundColor: " rgba(221, 226, 237, 0.75)" }}
      className=" pt-16 pb-28"
    >
      <div className=" max-w-5xl mx-auto">
        <div className=" text-grayBodtText text-center mb-12 px-5">
          <h2 className=" text-display2 pb-8">Course Finder</h2>
          <p className=" pb-9">
            Find the right course for you and get to know your tutor!
          </p>
          <hr className=" w-20 h-1 bg-grayBodtText mx-auto rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-9 place-items-center max-w-[540px] mx-auto ">
          <Card
            title="Find Course"
            content="Search our course database to ﬁnd the right ﬁt for you. You can also search by location, course name, tutor or subject. All our courses require your whakkako access information."
            image={cardImage1.src}
          />
          <Card
            title="Beginner"
            content="Find courses that introduce you to IT and programming languages on a beginner level.
        "
            image={cardImage2.src}
          />
          <Card
            title="Intermediate"
            content="Find courses that introduce you to IT and programming languages on an intermediate level."
            image={cardImage3.src}
          />
          <Card
            title="Advanced"
            content="Find courses that introduce you to IT and programming languages on an advanced level."
            image={cardImage4.src}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseFinder;
