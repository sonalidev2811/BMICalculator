import { useState } from "react";

const useBmiCalculator = () => {
  const [values, setValues] = useState({
    weight: "",
    height: "",
  });

  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const onClick = (e) => {
    window.location.reload();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let bmi = (values.weight / (values.height * values.height)) * 10000;
    setBmi(bmi.toFixed(2));
    if (!values.height && !values.weight) {
      setMessage("Please enter a valid height and weight");
    } else if (bmi < 18.5) {
      setMessage(" You are underweight");
    } else if (bmi > 18.5 && bmi <= 24.9) {
      setMessage(" You are a healthy weight");
    } else if (bmi > 25 && bmi <= 29.9) {
      setMessage("You are overweight");
    } else {
      setMessage("You are obese");
    }
  };
  return { values, onChange, onSubmit, bmi, message, onClick };
};

export default useBmiCalculator;
