import React, { useContext } from "react";
import { DataContext } from "./addCard";
import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const StepThreePage = () => {
  const { control } = useContext(DataContext);

  return (
    <>
      <Controller
        name="lastName"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Last Name"
            variant="standard"
            fullWidth
            margin="normal"
          />
        )}
      />
    </>
  );
};

export default StepThreePage;
