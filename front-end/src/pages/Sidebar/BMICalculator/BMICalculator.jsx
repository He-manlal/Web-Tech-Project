import React, { useState, useEffect } from 'react';


const bmiGroups = [
  { name: 'Underweight', range: [0, 18.49] },
  { name: 'Normal', range: [18.5, 24.99] },
  { name: 'Pre-Obesity', range: [25, 29.99] },
  { name: 'Obese I', range: [30, 34.99] },
  { name: 'Obese II', range: [35, 39.99] },
  { name: 'Obese III', range: [40, 100] },
];

const BMICalculator = () => {
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(75);
  const [bmi, setBMI] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState('Normal');

  const heightInFeet = ((0.393700787 * height) / 12).toFixed(0);
  const heightInInches = ((0.393700787 * height) % 12).toFixed(0);
  const weightInPounds = (2.2046 * weight).toFixed(2);

  useEffect(() => {
    calculateBMI();
  }, [height, weight]);

  const calculateBMI = () => {
    const bmiValue = parseFloat((weight / ((height / 100) ** 2)).toFixed(2));
    setBMI(bmiValue);
    


    const selectedGroupName = bmiGroups.find((group) => group.range[0] <= bmiValue && bmiValue < group.range[1]).name;
    setSelectedGroup(selectedGroupName);
  };

  return (
    <div className="container">
      
      <div className="row justify-content-center mt-5">
        <form className="c-bmi col-md-6">
          <div className="row">
            <div className="col-md-6">
              <label className="c-bmi__label">
                <strong>Height</strong>
                <input
                  className="c-bmi__range form-control"
                  type="range"
                  name="h"
                  min="150"
                  max="230"
                  step="0.5"
                  value={height}
                  onChange={(e) => setHeight(parseFloat(e.target.value))}
                />
                <output name="ho">{`${height} cm / ${heightInFeet}' ${heightInInches}"`}</output>
              </label>
            </div>
            <div className="col-md-6">
              <label className="c-bmi__label">
                <strong>Weight</strong>
                <input
                  className="c-bmi__range form-control"
                  type="range"
                  name="w"
                  min="35"
                  max="200"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                />
                <output name="wo">{`${weight} kg / ${weightInPounds} lb`}</output>
              </label>
            </div>
          </div>
          <div className="c-bmi__result mt-4">Your BMI Is: <output name="r">{bmi}</output></div>
          <div className="c-bmi__groups mt-4" readOnly>
            {bmiGroups.map((group, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  id={`bmi-g${index}`}
                  name="g"
                  checked={selectedGroup === group.name}
                  readOnly
                />
                <label htmlFor={`bmi-g${index}`}>{group.name}</label>
                <div className="c-bmi__group-text">{`Description for ${group.name}`}</div>
              </React.Fragment>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BMICalculator;
