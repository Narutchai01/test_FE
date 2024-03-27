import React from "react";
import StepOnePage from "./StepOnepage";
import StepTwoPage from "./StepTwoPage";
import StepThreePage from "./StepThreePage";


interface RenderStepProps {
  step: number;
  register: any;
  setValue?: any;
}

const RenderStep: React.FC<RenderStepProps> = ({ step, register ,setValue}) => {
  switch (step) {
    case 0:
      return <StepOnePage register={register} />;
    case 1:
      return <StepTwoPage register={register}  setValue={setValue}/>;
    case 2:
      return <StepThreePage register={register} />;
  }
};



export default RenderStep;
