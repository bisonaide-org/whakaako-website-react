import Image from "next/image";
import flashGreenIcon from "../../../../../public/photos/Shared_Icons/flashGreenIcon.svg";

interface Props {
  question: string;
  answer: string | boolean;
  answerDetails?: any;
  handleToggle: Function;
}

const Card: React.FC<Props> = ({
  question,
  answer,
  answerDetails,
  handleToggle,
}) => {
  return (
    <div className=" py-5">
      <button className="flex md:items-center" onClick={() => handleToggle()}>
        <Image src={flashGreenIcon} alt="section icon" width={31} height={48} />
        <p className=" pl-5 md:pl-11">{question}</p>
      </button>
      {answer && <p className=" text-small pl-10 md:pl-20 pb-5">{answer}</p>}
      {answerDetails && (
        <div className="text-small">
          <ol className=" list-decimal pl-16 md:pl-28">
            {answerDetails.criterias.map((criteria: string, i: number) => (
              <li key={i}>{criteria}</li>
            ))}
          </ol>
          <p className="pl-10 md:pl-20 pt-5">{answerDetails.last}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
