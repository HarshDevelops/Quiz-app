import "./app.css";
import { useState } from "react";
import Trivia from "./componets/trivia";
function App() {
  const [qno, setqno] = useState(1);
  const [timeout, settimeout] = useState(false);
  const data = [
    {
      id: 1,
      question: "Which planet is known as the 'Red Planet'?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Mars",
          correct: true,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "Mark Twain",
          correct: false,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Which gas do plants use for photosynthesis?",
      answers: [
        {
          text: "Carbon Monoxide",
          correct: false,
        },
        {
          text: "Oxygen",
          correct: false,
        },
        {
          text: "Nitrogen",
          correct: false,
        },
        {
          text: "Carbon Dioxide",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "What is the capital city of Japan?",
      answers: [
        {
          text: "Beijing",
          correct: false,
        },
        {
          text: "Tokyo",
          correct: true,
        },
        {
          text: "Seoul",
          correct: false,
        },
        {
          text: "Bangkok",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which famous scientist developed the theory of general relativity?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Marie Curie",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Nikola Tesla",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which novel is often referred to as the 'Great American Novel'?",
      answers: [
        {
          text: "To Kill a Mockingbird",
          correct: false,
        },
        {
          text: "The Catcher in the Rye",
          correct: false,
        },
        {
          text: "Moby-Dick",
          correct: true,
        },
        {
          text: "Pride and Prejudice",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which famous artist painted the Mona Lisa?",
      answers: [
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Michelangelo",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "In which year did the Titanic sink?",
      answers: [
        {
          text: "1912",
          correct: true,
        },
        {
          text: "1914",
          correct: false,
        },
        {
          text: "1920",
          correct: false,
        },
        {
          text: "1908",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who is known as the 'Father of Modern Physics'?",
      answers: [
        {
          text: "Niels Bohr",
          correct: false,
        },
        {
          text: "Max Planck",
          correct: false,
        },
        {
          text: "Erwin Schrödinger",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which famous scientist formulated the laws of motion and universal gravitation?",
      answers: [
        {
          text: "Isaac Newton",
          correct: true,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Johannes Kepler",
          correct: false,
        },
        {
          text: "Stephen Hawking",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which river is the longest in the world?",
      answers: [
        {
          text: "Amazon River",
          correct: false,
        },
        {
          text: "Nile River",
          correct: true,
        },
        {
          text: "Mississippi River",
          correct: false,
        },
        {
          text: "Yangtze River",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which planet is known as the 'Morning Star' or 'Evening Star'?",
      answers: [
        {
          text: "Mercury",
          correct: true,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: false,
        },
      ],
    },
  ];

  
  const moneypyramid = [
    { id: 12, amount: "2,00,00,000 Rs" },
    { id: 11, amount: "50,00,000 Rs" },
    { id: 10, amount: "25,00,000 Rs" },
    { id: 9, amount: "12,50,000 Rs" },
    { id: 8, amount: "6,40,000 Rs" },
    { id: 7, amount: "3,20,000 Rs" },
    { id: 6, amount: "1,60,000 Rs" },
    { id: 5, amount: "80,000 Rs" },
    { id: 4, amount: "40,000 Rs" },
    { id: 3, amount: "20,000 Rs" },
    { id: 2, amount: "10,000 Rs" },
    { id: 1, amount: "5,000 Rs" },
  ];

  return (
    <div className="app">
      <div className="main"> 
        <div className="top">
          <div className="timer">30 </div>
        </div>
        <div className="answer-area">
          <Trivia  data={data} 
          qno={qno}
          setqno={setqno}
          timeout={timeout}
          settimeout={settimeout}
          />
        </div>
      </div>
      <div className="pyramid">
        <ul className="Moneylist">
          <h3 style={{color:'#FFF7D4'}}> <u>Winnable Amount</u></h3>
          {moneypyramid.map((money) => (
            <li className={qno ==  money.id ? "moneylistitem active" : "moneylistitem"} key={money.id}>
              <span>{money.id}</span> {money.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
