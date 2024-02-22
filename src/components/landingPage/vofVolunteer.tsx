import Image from "next/image";
import profileImage from "../../../public/photos/01_landingPage/dr.neelam.png";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col justify-center items-center px-5 pt-16 pb-14 md:px-0">
      <div className="mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl">
        <div className="pt-12 flex flex-col justify-center items-center">
          <div className="rounded-full overflow-hidden w-24 h-24">
            <Image
              src={profileImage}
              alt="profile"
              className="object-cover"
              width={400}
              height={400}
            />
          </div>
          <p className="text-center font-semibold mt-2">Dr. Neelam Patil</p>
        </div>
        <div className="lg:col-span-2 md:col-span-2">
          <div className="text-center">
            <h2 className="text-display2 font-display pb-9">
              Voice of a volunteer
            </h2>
          </div>
          <div className="mr-5">
            <p className="text-justify">
              I pursued my love of research and earned a Doctorate in
              Biochemistry. I began instructing undergraduates as soon as I
              completed my master&apos;s degree, beginning my teaching career,
              and I piqued interest in writing at the young age of 22. I am
              thrilled to be a part of the Oakyard Project as it spearheads to
              bridge the gap between academic and industry needs by real-time
              project learning. I have been a part of several education projects
              and aspire to be a Project Manager. I am currently enjoying my
              volunteer role as Project Facilitator.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
