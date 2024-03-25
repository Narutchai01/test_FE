import React from "react";
import StepOnePage from "./StepOnepage";
import StepTwoPage from "./StepTwoPage";
import StepThreePage from "./StepThreePage";


interface RenderStepProps {
  step: number;
  register: any;
}

const RenderStep: React.FC<RenderStepProps> = ({ step, register }) => {
  switch (step) {
    case 0:
      return <StepOnePage register={register} />;
    case 1:
      return <StepTwoPage register={register} />;
    case 2:
      return <StepThreePage register={register} />;
  }
};



export default RenderStep;
