import React, { useState } from "react";
import "./CalculatorReact.css";

function CalculatorReact() {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString()); // 式を計算
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput(""); // クリア
    } else {
      setInput(input + value); // 入力を更新
    }
  };

  const buttons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  const formatValue = (value) => {
    if (value === "÷") return "/";
    if (value === "×") return "*";
    return value;
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{input || "0"}</div>
      <div className="calculator-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={btn === "C" ? "button-clear" : "button"}
            onClick={() => handleButtonClick(formatValue(btn))}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CalculatorReact;
