import React, { useEffect, useState } from 'react';

export default function Trivia({ data, qno, setqno, timeout, settimeout, handleWrongAnswer }) {
  const [question, setQuestion] = useState(null);
  const [answerss, setAnswers] = useState([]);
  const [className, setClassName] = useState("answer");

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  }

  const ans = (answer) => {
    setAnswers(answer);
    setClassName("answer active");
    delay(1000, () => setClassName(answer.correct ? "answer correct" : "answer wrong"));
    delay(2000, () => {
      if (answer.correct) {
        if (qno === data.length) {
          settimeout(true); // Set timeout to true only if it's the final question
        } else {
          setqno((prev) => prev + 1);
        }
      } else {
        handleWrongAnswer(); // Call the handleWrongAnswer function
      }
    });
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
