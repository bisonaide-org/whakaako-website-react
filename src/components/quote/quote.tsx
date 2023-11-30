import Image from "next/image";
import quoteImage from "../../../public/photos/Shared_Icons/Quote.svg";

interface Props {
  quote: string;
  originator: string;
}

const Quote: React.FC<Props> = ({ quote, originator }) => {
  return (
    <section className=" text-quote max-w-5xl pt-20 pb-14 px-5 flex justify-center m-auto gap-5 md:gap-11 md:px-0">
      <div>
        <Image src={quoteImage} alt="quote icon" width={100} height={85} />
      </div>
      <div className=" max-w-[520px]">
        <p className=" text-grayBodtText pb-14 whitespace-pre-wrap">{quote}</p>
        <p className=" text-small text-lightGrayBodyText italic text-center">
          {originator}
        </p>
      </div>
    </section>
  );
};

export default Quote;
