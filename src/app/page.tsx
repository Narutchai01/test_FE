"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

export default function Home() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const rederStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </label>
        );
      case 1:
        return (
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            ;
          </label>
        );
      case 2:
        return (
          <label>
            Password:
            <input
              type="text"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </label>
        );
      default:
        return (
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </label>
        );
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(data);
  };

  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  return (
    <>
      <h1>{step}</h1>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <form onSubmit={handleSubmit}>
        {rederStep(step)}
        {step === 2 ? (
          <button type="submit">Submit</button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              nextStep();
            }}
          >
            Next
          </button>
        )}
      </form>
    </>
  );
}
