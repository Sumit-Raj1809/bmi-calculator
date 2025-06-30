import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [color, setColor] = useState('');

  const calculateBMI = () => {
    if (!weight || !height || height <= 0 || weight <= 0) {
      alert('Please enter valid height and weight!');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setCategory('Underweight');
      setColor('#fbc02d');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory('Normal weight');
      setColor('#4caf50');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setCategory('Overweight');
      setColor('#ff9800');
    } else {
      setCategory('Obese');
      setColor('#f44336');
    }
  };

  return (
    <div className="App" style={{ fontFamily: 'Poppins', padding: '2rem' }}>
      <h1>BMI Calculator</h1>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="number"
          placeholder="Enter weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '1rem' }}
        />
        <input
          type="number"
          placeholder="Enter height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          style={{ padding: '0.5rem' }}
        />
      </div>

      <button onClick={calculateBMI} style={{ padding: '0.5rem 1rem' }}>
        Calculate BMI
      </button>

      {bmi && (
        <div style={{ marginTop: '1.5rem' }}>
          <h2>Your BMI: {bmi}</h2>
          <h3 style={{ color }}>{category}</h3>
        </div>
      )}
    </div>
  );
}

export default App;
