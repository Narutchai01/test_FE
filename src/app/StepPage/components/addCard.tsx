"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import RenderStep from "./RenderStep";
import dayjs from "dayjs";

interface IFormInput {
  firstName: string;
  date: any;
  age: number;
}
const AddCard = () => {
  const [step, setStep] = useState(0);
  const [age, setAge] = useState(0);

  const { register, handleSubmit ,watch ,setValue} = useForm<IFormInput>();

  const steps = [
    "Select master blaster campaign settings",
    "Create an ad group",
    "Create an ad",
  ];

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const nextStep = () => {
    setStep(step + 1);
  };

  const date = watch("date")

  const calculate = (date:any) =>{
    const now = dayjs();
    return `${now.diff(date,"year")}`
  }


  
  return (
    <>
      <h1>{step}</h1>
      <h1>{calculate(date)}</h1>
      <Stepper activeStep={step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <form onSubmit={handleSubmit(onSubmit)}>
        <RenderStep step={step} register={register} setValue={setValue} />
        {step === 2 ? (
          <button type="submit">Submit</button>
        ) : (
          <button
            type="button"
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
};

export default AddCard;
