import Card from "./card";
import newbieImage from "../../../../../public/photos/Shared_Icons/4_academy/newbie.png";
import skilledImage from "../../../../../public/photos/Shared_Icons/4_academy/skilled.png";
import expertImage from "../../../../../public/photos/Shared_Icons/4_academy/expert.png";
import backgroundImage from "../../../../../public/photos/02_ForTalents/AcademyPhotos/background_courseFinder.jpg";

const courseCategories = [
  {
    title: "Newbie",
    content: "Explore beginner-level IT and programming courses",
    image: newbieImage,
  },
  {
    title: "Skilled",
    content: "Discover intermediate level IT and programming topics.",
    image: skilledImage,
  },
  {
    title: "Expert",
    content: "Discover advanced IT courses and become an expert.",
    image: expertImage,
  },
];

const CourseFinder = () => {
  return (
    <section id="CourseFinder" className=" relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(47, 61, 86, 0.75)" }}
      ></div>
      <div className="relative z-10 text-white text-p pt-16 pb-6 px-5 md:px-0 max-w-[720px] md:mx-auto ">
        <div className=" mb-24">
          <h2 className=" text-center text-display2 font-display pb-6">
            Course Finder
          </h2>
          <div className="flex flex-col gap-3  mx-auto">
            <p>
              At Oakyard Academy, we are committed to providing young
              individuals who face barriers in accessing IT education with a
              unique opportunity to learn and thrive in the field of Information
              Technology.
            </p>
            <p>
              To ensure that this vision is realized, we exclusively offer
              course scholarships to those who meet the specific criteria we
              have in place.
            </p>
            <p>
              Our focus is to empower aspiring IT professionals, and we look
              forward to working with dedicated individuals who share our
              passion and determination to succeed in this dynamic industry
            </p>
          </div>
        </div>
        <div className="flex justify-center md:justify-between flex-wrap gap-y-5 mb-24">
          {courseCategories.map((category) => (
            <Card
              key={category.title}
              title={category.title}
              content={category.content}
              image={category.image.src}
            />
          ))}
        </div>
        <div className="text-p text-yellowGreen text-center">
          <p>Study, improve yourself and become your own best version</p>
        </div>
      </div>
    </section>
  );
};

export default CourseFinder;
