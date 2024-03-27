"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useForm, SubmitHandler } from "react-hook-form";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function Home() {
  const { register, handleSubmit, watch, formState: { errors },setValue } = useForm();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  const date = watch("date");

  const calculateAge = (date: any ) => {
    const now = dayjs();
    return now.diff(date, 'year');
  };

  

  return (
    <>
      <h1>hello</h1>
      <h2>{date ? date.format('YYYY-MM-DD') : 'not value'}</h2>
      <h2>{date ? calculateAge(date) : 'not value'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            {...register("date")}
            onChange={(newValue) => {
              setValue("date", newValue);
            }}
          />
        </LocalizationProvider>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}