import { useState, useRef } from "react";

function Calculator() {
  const inputRef = useRef();
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  const [value, setValue] = useState(null);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    inputRef.current.focus();
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    if (result === 0) {
      setResult(1);
    }
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function reset(e) {
    e.preventDefault();
    inputRef.current.value = null;
    setValue(null);
    setResult(0);
  }

  const handleChange = (e) => {
    const handler = e ? e.target.value : null;
    setValue(handler);
  };

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>Result: {result}</p>
        <p>Value: {value}</p>
        <input
          onChange={handleChange}
          value={value == null ? "" : value}
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={reset}>Reset</button>
        {/* Add the resetResult button */}
      </form>
    </div>
  );
}

export default Calculator;
