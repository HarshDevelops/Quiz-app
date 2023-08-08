import React, { useEffect, useState } from 'react';

export default function Trivia({ data, qno, setqno, timeout, settimeout }) {
  const [question, setQuestion] = useState(null);
  const [answerss, setAnswers] = useState([]);
  const [className, setClassName] = useState("answer");

  const ans = (answer) => {
    setAnswers(answer);
    setClassName("answer active");
    setTimeout(() => {
      setClassName(answer.correct ? "answer correct" : "answer wrong");
    }, 3000);
  };

  useEffect(() => {
    if (data.length > 0 && qno >= 1 && qno <= data.length) {
      setQuestion(data[qno - 1]);
      setAnswers(data[qno - 1].answers);
    }
  }, [data, qno]);

  return (
    <div className="trivia">
      <div className="questions">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div
            key={answer.text}
            className={answerss === answer ? className : "answer"}
            onClick={() => ans(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  );
}
