import React from "react";

interface StepTwoPageProps {
  register: any;
}

const StepTwoPage: React.FC<StepTwoPageProps> = ({ register }) => {
  return (
    <>
      <label>
        email
        <input type="text" {...register("lastName")} />
      </label>
    </>
  );
};

export default StepTwoPage;