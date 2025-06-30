import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);

    if (!h || !w) {
      setBmi(null);
      setStatus("Please enter valid height and weight.");
      return;
    }

    const result = w / (h * h);
    setBmi(result.toFixed(2));

    if (result < 18.5) setStatus("Underweight");
    else if (result < 24.9) setStatus("Normal weight");
    else if (result < 29.9) setStatus("Overweight");
    else setStatus("Obese");
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <input
        type="number"
        placeholder="Enter weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          Your BMI is: {bmi}
          <div className="status">{status}</div>
        </div>
      )}
    </div>
  );
}

export default App;
