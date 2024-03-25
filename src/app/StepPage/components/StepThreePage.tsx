import React from 'react'



interface StepThreePageProps {
  register: any;
};

const StepThreePage :React.FC<StepThreePageProps> = ({register}) => {
  return (
  <>
      <label>
        age
        <input type="number" {...register("age")} />
      </label>
    </>
  )
}

export default StepThreePage
