"use client";

import { useState } from "react";
import Card from "./card";

interface Props {
  question: string;
  answer: string | boolean;
  answerDetails?: any;
}

const Question: React.FC<Props> = ({ question, answer, answerDetails }) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      {show ? (
        <Card
          question={question}
          answer={answer}
          answerDetails={answerDetails ?? null}
          handleToggle={handleToggle}
        />
      ) : (
        <Card question={question} answer={false} handleToggle={handleToggle} />
      )}
    </div>
  );
};

export default Question;
