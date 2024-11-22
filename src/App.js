import "./App.css";
import { useState } from "react";

function App() {
  const buttonConfig = [
    { name: "clear", symbol: "C" },
    { name: "delete", symbol: "DEL" },
    { name: "divide", symbol: "/" },
    { name: "multiply", symbol: "*" },
    { name: "seven", symbol: 7 },
    { name: "eight", symbol: 8 },
    { name: "nine", symbol: 9 },
    { name: "subtract", symbol: "-" },
    { name: "four", symbol: 4 },
    { name: "five", symbol: 5 },
    { name: "six", symbol: 6 },
    { name: "add", symbol: "+" },
    { name: "one", symbol: 1 },
    { name: "two", symbol: 2 },
    { name: "three", symbol: 3 },
    { name: "equals", symbol: "=" },
    { name: "zero", symbol: 0 },
    { name: "decimal", symbol: "." },
  ];

  const [displayValue, setDisplayValue] = useState("");

  const handleButtonClick = (e) => {
    const { name } = e.target;

    switch (name) {
      case "C":
        resetCalculator();
        break;
      case "DEL":
        deleteLastChar();
        break;
      case "=":
        evaluateExpression();
        break;
      default:
        appendValue(name);
        break;
    }
  };

  const resetCalculator = () => setDisplayValue("");
  const deleteLastChar = () => setDisplayValue((prev) => prev.slice(0, -1));
  const appendValue = (value) => setDisplayValue((prev) => prev + value);

  const evaluateExpression = () => {
    try {
      const result = Function(`"use strict"; return (${displayValue})`)();
      console.log(result);
      setDisplayValue(result.toString());
    } catch {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="container">
      <h1>JavaScript Calculator</h1>
      <div id="calculator">
        <input type="text" id="display" value={displayValue} disabled />
        <div className="buttons">
          {buttonConfig.map((btn) => (
            <button
              key={btn.name}
              className="btn"
              id={btn.name}
              name={btn.symbol}
              onClick={handleButtonClick}
            >
              {btn.symbol}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
