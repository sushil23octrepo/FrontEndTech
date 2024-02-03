import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];
  const [step, setstep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  const onPreviousBtn = () => {
    if (step > 1) {
      setstep((prev) => prev - 1);
    }
  };

  const onNextBtn = () => {
    if (step <= 2) {
      setstep((prev) => prev + 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setisOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}:{messages[step - 1]}
          </p>
          <div className="buttons">
            <button onClick={() => onPreviousBtn()}>Previous</button>
            <button onClick={() => onNextBtn()}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
