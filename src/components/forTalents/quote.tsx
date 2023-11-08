import Image from "next/image";
import quoteImage from "../../../public/photos/Quote.svg";

const Quote = () => {
  return (
    <section>
      <div className=" text-quote max-w-[640px] pt-20 pb-14 px-5 flex justify-center m-auto gap-5 md:gap-11 md:px-0">
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
            Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today.
          </p>
          <p className=" text-small text-lightGrayBodyText italic text-center">
            - Malcom X
          </p>
        </div>
      </div>
    </section>
  );
};

export default Quote;
