import React, { useState } from "react";

const BMICalculatorPage = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiResult, setBMIResult] = useState(null);

  const calculateBMI = () => {
    // Check if weight and height are provided
    if (weight && height) {
      // Calculate BMI
      const weightInKg = parseFloat(weight);
      const heightInMeters = parseFloat(height) / 100; // Convert height to meters
      const bmi = weightInKg / (heightInMeters * heightInMeters);

      // Update BMI result state
      setBMIResult(bmi.toFixed(2));
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>

      <div>
        <label htmlFor="weight">Weight (kg): </label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="height">Height (cm): </label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <button onClick={calculateBMI}>Calculate BMI</button>

      {bmiResult !== null && (
        <div>
          <h3>Your BMI: {bmiResult}</h3>
          {/* You can add additional information or recommendations based on the BMI result */}
        </div>
      )}
    </div>
  );
};

export default BMICalculatorPage;
