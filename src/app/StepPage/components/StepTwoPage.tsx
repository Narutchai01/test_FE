import React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, set } from "react-hook-form";
import { DateField } from "@mui/x-date-pickers";

interface StepTwoPageProps {
  register: any;
  setValue: any;
}

const StepTwoPage: React.FC<StepTwoPageProps> = ({ register ,setValue }) => {
  return (
    <>
      <label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date"
            // {...register("date")}
            onChange={(newValue) => {
              setValue("date", newValue);
            }}
          />
        </LocalizationProvider>
      </label>
    </>
  );
};

export default StepTwoPage;
