import backgroundImage from "../../../public/photos/02_WhatWeDo/_B7A8451.jpeg";

const Requirements = () => {
  return (
    <div className=" relative">
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
      <div className="relative z-10 text-white pt-16 pb-6 px-5 md:px-0 max-w-5xl md:mx-auto ">
        <div className="text-center mb-52">
          <h2 className=" text-display2 font-display pb-6">Requirements</h2>
          <p className="">Which course is the right one for me?</p>
          <p>Find out your skills!</p>
        </div>
        <div className="flex flex-col gap-12 mb-28 md:pl-32 max-w-[535px]">
          <div>
            <p className=" pb-8">
              We offer IT courses at different levels. So you can adapt your
              learning to your individual needs.
            </p>
            <p className=" pb-11">
              You want to know the requirements for each courses? You are not
              sure if you ﬁt the requirements?
            </p>
            <button className=" text-black px-5 py-2 bg-yellowGreen rounded-lg">
              test your level
            </button>
          </div>
          <div>
            <p className=" pb-8">
              You can`t afford the course? Here you can apply for a
              <span>scholarship</span>
            </p>
            <button className="text-black px-5 py-2 bg-yellowGreen rounded-lg">
              apply here
            </button>
          </div>
        </div>
        <div>
          <p className="text-center text-yellowGreen">
            Study, improve yourself and become your own best version!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
