import React from "react";
import useBmiCalculator from "./useBmiCalculator";
import "../CSS/BmiCalculator.css";

const BmiCalculator = () => {
  const { values, onChange, onSubmit, bmi, message, onClick } =
    useBmiCalculator();
  return (
    <div className="bmi-calculator-app">
      <div className="bmi-calculator-container">
        <h1>BMI Calculator</h1>
        <form onSubmit={onSubmit} className="bmi-calculator-form">
          <div className="inputs">
            {/* <label className="bmi-label">Weight(Kg)</label> */}
            <input
              value={values.weight}
              onChange={onChange}
              name="weight"
              type="text"
              className="bmi-input"
              placeholder="Weight in Kg"
            />
          </div>
          <div className="inputs">
            {/* <label className="bmi-label">Height(Cm)</label> */}
            <input
              value={values.height}
              onChange={onChange}
              name="height"
              type="text"
              className="bmi-input"
              placeholder="Height in Cm"
            />
          </div>

          <div className="bmi-calculator-button">
            <button type="submit" className="button-submit">
              Calculate
            </button>
            <button onClick={onClick} type="submit" className="button-clear">
              Clear
            </button>
          </div>
        </form>
        <div className="bmi-result">
          {bmi !== "NaN" && <h2>Your BMI is:{bmi}</h2>}
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;
