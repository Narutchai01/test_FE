import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, set } from "react-hook-form";
import { DateField } from "@mui/x-date-pickers";
import { useContext } from "react";
import { DataContext } from "./addCard";


const StepTwoPage = () => {
  const {control, setValue } = useContext(DataContext);
  return (
    <>
      <label>
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
      </label>
    </>
  );
};

export default StepTwoPage;
