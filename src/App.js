import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      setMessage("Please enter both weight and height");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setMessage('Underweight');
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setMessage('Normal');
    else if (bmiValue >= 25 && bmiValue < 29.9) setMessage('Overweight');
    else setMessage('Obese');
  };

  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div>
          <label>Weight (kg): </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>

      {bmi && (
        <div>
          <h2>Your BMI: {bmi}</h2>
          <p>Status: {message}</p>
        </div>
      )}
    </div>
  );
}

export default App;

