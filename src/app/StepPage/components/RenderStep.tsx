import React from "react";
import StepOnePage from "./StepOnepage";
import StepTwoPage from "./StepTwoPage";
import StepThreePage from "./StepThreePage";
import { useContext } from "react";
import { DataContext } from "./addCard";




const RenderStep = () => {
  const { step } = useContext(DataContext);
  switch (step) {
    case 0:
      return <StepOnePage />;
    case 1:
      return <StepTwoPage />;
    case 2:
      return <StepThreePage />;
  }
};



export default RenderStep;
