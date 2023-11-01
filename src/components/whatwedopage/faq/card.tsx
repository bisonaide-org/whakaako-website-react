import Image from "next/image";
import flashGreenIcon from "../../../../public/photos/02_WhatWeDo/Icons/flashGreenIcon.svg";

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
    <div className=" py-7">
      <button
        className="flex items-center gap-2"
        onClick={() => handleToggle()}
      >
        <Image src={flashGreenIcon} alt="section icon" width={25} height={25} />
        <p className=" pl-5">{question}</p>
      </button>
      {answer && <p className=" text-small pl-14 pb-5">{answer}</p>}
      {answerDetails && (
        <div className="text-small pl-14">
          <ol className=" list-decimal pl-10">
            {answerDetails.criterias.map((criteria: string, i: number) => (
              <li key={i}>{criteria}</li>
            ))}
          </ol>
          <p className=" pt-5">{answerDetails.last}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
