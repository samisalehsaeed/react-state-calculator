import "./App.css";
import { useState } from "react";

function App() {
  const [displayedNum, setDisplayedNum] = useState(0);
  const [currentOp, setCurrentOp] = useState("+");
  const [displayedNum2, setDisplayedNum2] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(0);

  const calculation = () => {
    let result;
    if (currentOp === "+") {
      result = displayedNum + displayedNum2;
    } else if (currentOp === "-") {
      result = displayedNum - displayedNum2;
    } else if (currentOp === "*") {
      result = displayedNum * displayedNum2;
    } else if (currentOp === "÷") {
      if (displayedNum2 === 0) {
        result = "Can't divide by zero m8";
      } else {
        result = displayedNum / displayedNum2;
      }
    } else {
      result = "0";
    }
    setCurrentAnswer(result);
  };

  return (
    <div className="calculator">
      {/* First Number */}

      <div className="panel">
        <p className="displayNum">{displayedNum}</p>
        <div className="numbers">
          <button onClick={() => setDisplayedNum(1)}>1</button>
          <button onClick={() => setDisplayedNum(2)}>2</button>
          <button onClick={() => setDisplayedNum(3)}>3</button>
          <button onClick={() => setDisplayedNum(4)}>4</button>
          <button onClick={() => setDisplayedNum(5)}>5</button>
          <button onClick={() => setDisplayedNum(6)}>6</button>
          <button onClick={() => setDisplayedNum(7)}>7</button>
          <button onClick={() => setDisplayedNum(8)}>8</button>
          <button onClick={() => setDisplayedNum(9)}>9</button>
          <button onClick={() => setDisplayedNum(0)}>0</button>
          <button onClick={() => setDisplayedNum(0)}>Clear</button>
        </div>
      </div>
      {/* Operators */}
      <div className="panel">
        <p className="defaultOp">{currentOp}</p>
        <div className="numbers">
          <button onClick={() => setCurrentOp("+")}>+</button>
          <button onClick={() => setCurrentOp("-")}>-</button>
          <button onClick={() => setCurrentOp("*")}>*</button>
          <button onClick={() => setCurrentOp("÷")}>÷</button>
        </div>
      </div>

      {/* Second Number */}

      <div className="panel">
        <p className="displayNum2">{displayedNum2}</p>
        <div className="numbers">
          <button onClick={() => setDisplayedNum2(1)}>1</button>
          <button onClick={() => setDisplayedNum2(2)}>2</button>
          <button onClick={() => setDisplayedNum2(3)}>3</button>
          <button onClick={() => setDisplayedNum2(4)}>4</button>
          <button onClick={() => setDisplayedNum2(5)}>5</button>
          <button onClick={() => setDisplayedNum2(6)}>6</button>
          <button onClick={() => setDisplayedNum2(7)}>7</button>
          <button onClick={() => setDisplayedNum2(8)}>8</button>
          <button onClick={() => setDisplayedNum2(9)}>9</button>
          <button onClick={() => setDisplayedNum2(0)}>0</button>
          <button onClick={() => setDisplayedNum2(0)}>Clear</button>
        </div>
      </div>

      {/* Answer */}

      <div className="panel answer">
        <p>{currentAnswer}</p>
        <div>
          <button onClick={calculation}>=</button>
        </div>
      </div>
    </div>
  );
}
export default App;
