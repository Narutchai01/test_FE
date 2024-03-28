"use client";
import React from "react";
import { useContext } from "react";
import { DataContext } from "./addCard";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const StepOnePage = () => {
  const { control } = useContext(DataContext);

  return (
    <>
      <Controller
        name="firstName"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="First Name"
            variant="standard"
            fullWidth
            margin="normal"
          />
        )}
      />
    </>
  );
};

export default StepOnePage;
