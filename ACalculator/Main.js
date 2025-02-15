import React, { useState } from "react";

const Main = () => {
  const [inputValue, setInputvalue] = useState("");

  function display(value) {
    setInputvalue(inputValue + value);
  }
  function calculate() {
    try {
      setInputvalue(eval(inputValue)); 
    } catch (error) {
      setInputvalue("Error");
    }
  }
  function clear() {
    setInputvalue("");
  }

  return (
    <div className="calculator-container">
      <form className="calculator" name="calc">
        <input type="text" className="value" value={inputValue} readOnly />
        <div className="buttons-container">
          <span className="numClear" onClick={clear}>
            C
          </span>
          <span onClick={() => display("/")}>/</span>
          <span onClick={() => display("*")}>*</span>
          <span onClick={() => display("-")}>-</span>

          <span onClick={() => display("7")}>7</span>
          <span onClick={() => display("8")}>8</span>
          <span onClick={() => display("9")}>9</span>
          <span className="plus" onClick={() => display("+")}>
            +
          </span>

          <span onClick={() => display("4")}>4</span>
          <span onClick={() => display("5")}>5</span>
          <span onClick={() => display("6")}>6</span>

          <span onClick={() => display("1")}>1</span>
          <span onClick={() => display("2")}>2</span>
          <span onClick={() => display("3")}>3</span>

          <span onClick={() => display("0")}>0</span>
          <span onClick={() => display("00")}>00</span>
          <span onClick={() => display(".")}>.</span>
          <span className="equal" onClick={() => calculate()}>
            =
          </span>
        </div>
      </form>
    </div>
  );
};

export default Main;
