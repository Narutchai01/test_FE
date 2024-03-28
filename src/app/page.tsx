"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { TextField } from "@mui/material";

export default function Home() {
  const {
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    control,
  } = useForm();

  const onSubmit: SubmitHandler<any> = (data: any) => {
    console.log(data);
  };

  const date = watch("date");

  const calculateAge = (date: any) => {
    const now = dayjs();
    return now.diff(date, "year");
  };

  return (
    <>
      <h1>hello</h1>
      <h2>{date ? date.format("YYYY-MM-DD") : "not value"}</h2>
      <h2>{date ? calculateAge(date) : "not value"}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="date"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                {...field}
                label="Date"
                onChange={(newValue) => setValue("date", newValue)}
              />
            </LocalizationProvider>
          )}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
