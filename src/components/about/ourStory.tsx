import Image from "next/image";
import profileImage from "../../../public/photos/01_landingPage/photos/dr.neelam.png";
import threeGrennArrow from "../../../public/photos/04_About/flashes.png";
import obstacle from "../../../public/photos/04_About/Stefan_2.png";

const OurStory: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-grayBodtText px-5 pt-16 pb-14 md:px-5">
      <div className="flex items-center justify-center w-full max-w-5xl">
        <h2 className="text-display2 font-display mb-12">This is our story</h2>
      </div>
      <div className="flex flex-col text-p max-w-5xl">
        <p>
          Stefan Eichenhofer is director and initiator of Oakyard. He has a
          strong background in IT, likes to bring together people and has a
          vision to bring more equality on the planet. He has spent several
          years in Mozambique with his familiy, volunteered in disaster relief
          and believes in the potential of people that started the journey of
          life behind the start line.
        </p>
        <hr className="m-2 mb-12 w-20 h-1 bg-grayBodtText mx-auto rounded" />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-7 max-w-5xl">
        <Image src={obstacle} width={300} height={280} alt="obstacle" />
        <div className="flex flex-col text-p gap-2">
          <p>
            Let&apos;s dive into our story! It all started when three friends joined
            forces to create bisonaire GmbH, a cutting-edge consultancy and IT
            firm. With our deep roots in the IT and production industry, and at
            the same time a genuine desire to help folks looking for a fresh
            start, we gave birth to bisonaide – a platform with a big heart.
          </p>
          <p>
            Running a business, we quickly figured out that the key to success
            is having folks with real passion on board., and unfortunately, they
            were becoming increasingly rare to find.
          </p>
          <p>
            Now, you just have to put one and one together: There&apos;s a shortage
            of skilled workers in many places, but there&apos;s also a whole bunch of
            untapped talent who are waiting for a chance. So, we put our heads
            together and had this awesome idea – create a platform to nurture
            that talent and connect them with companies in need.
            <br />
            Boom, Oakyard was born!
          </p>
        </div>
      </div>
      <div className="flex flex-col text-p max-w-5xl mt-10">
        <p>
          Meanwhile, people from all corners of the world have joined our team.
          Without their contributions, this vision would have never come to
          fruition. We extend our heartfelt thanks to everyone who is investing
          in this wonderful mission.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
