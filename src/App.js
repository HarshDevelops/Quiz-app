import "./app.css";
import { useState } from "react";
import Trivia from "./componets/trivia";
function App() {
  const [qno, setqno] = useState(1);
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
          <Trivia />
        </div>
      </div>
      <div className="pyramid">
        <ul className="Moneylist">
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
