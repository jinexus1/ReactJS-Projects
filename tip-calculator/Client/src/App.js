import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = ((bill * (percentage1 + percentage2)) / 2) * 0.01;
  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="tip-calculator">
      <BillInputs bill={bill} onSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did u like the services
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the services
      </SelectPercentage>
      <Output bill={bill} tip={tip}></Output>
      <Reset onReset={handleReset} />
      <Pay>Proceed to pay</Pay>
    </div>
  );
}

function BillInputs({ bill, onSetBill }) {
  return (
    <div className="bill-inputs">
      <label htmlFor="">How much was the bill?</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div className="select-percentages">
      <p>
        {children}
        <select
          name=""
          id=""
          value={percentage}
          onChange={(e) => onSelect(Number(e.target.value))}
        >
          <option value="0">It was bad (0%)</option>
          <option value="5">It was okayish (5%)</option>
          <option value="10">It was descent (10%)</option>
          <option value="15">It was good (15%)</option>
        </select>
      </p>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div className="output">
      <p>
        You pay:${bill + tip} ({`Bill: $${bill}, tip: $${tip}`})
      </p>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div className="reset">
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
function Pay({ children }) {
  return (
    <div className="pay">
      <button>{children}</button>
    </div>
  );
}
