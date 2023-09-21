import Image from "next/image";
import quoteImage from "../../public/photos/Quote.svg";

const Quote = () => {
  return (
    <section>
      <div className="text-small max-w-[750px] pt-20 pb-14 px-5 flex justify-center m-auto gap-5 md:gap-11 md:px-0">
        <div>
          <Image
            src={quoteImage}
            alt="quote icon"
            width={112.045}
            height={99.768}
          />
        </div>
        <div>
          <p className=" text-grayBodtText pb-14">
            People with passion can change the world for the better. The people
            who are crazy enough to think they can change the world are the ones
            who do.
          </p>
          <p className=" text-lightGrayBodyText italic text-center">
            -Steve Jobs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
