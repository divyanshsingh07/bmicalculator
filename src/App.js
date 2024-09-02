import React, { useState } from "react";
import './index.css'

function App() {
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");
  let img = "";

  let calcbmi = (event) => {
    event.preventDefault();
    if (Weight === 0 || Height === 0) {
      alert("Please enter valid entry");
    } else {
      let heightInMeters = Height * 0.0254; // Convert height to meters
      let bmi = Weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));

      // Determine the message and image based on BMI
      if (bmi < 18.5) {
        setMessage("You are underweight");
        img = "path_to_underweight_image";
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage("You have a normal weight");
        img = "path_to_normal_weight_image";
      } else if (bmi >= 25 && bmi < 29.9) {
        setMessage("You are overweight");
        img = "path_to_overweight_image";
      } else {
        setMessage("You are obese");
        img = "path_to_obese_image";
      }
    }
  };

  let reload = () => {
    setWeight("");
    setHeight("");
    setBmi("");
    setMessage("");
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="center">BMI Calculator</h1>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight(kg)</label>
            <input type="number"
              value={Weight}
              onChange={(event) => setWeight(parseFloat(event.target.value))}
            />
          </div>
          <div>
            <label>Height(inch)</label>
            <input type="number"
              value={Height}
              onChange={(event) => setHeight(parseFloat(event.target.value))}
            />
          </div>
          <div className="btt">
            <button className="btn" type="submit">Submit</button>
            <button className="btn out-line" type="button" onClick={reload}>Reload</button>
          </div>
        </form>
        <div className="center">
          <h2>Your BMI is: {bmi}</h2>
          <p>{message}</p>
        </div>
        <div className="img-container">
          {img && <img src={img} alt="BMI Result"></img>}
        </div>
      </div>
    </div>
  );
}

export default App;
