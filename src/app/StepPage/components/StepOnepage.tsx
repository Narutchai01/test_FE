"use client";

import React from "react";

interface StepOnePageProps {
    register: any;

}


const StepOnePage : React.FC<StepOnePageProps> = ({register}) => {
    return (
        <>
        <label>
            name
            <input type="text" {...register("firstName")} />
        </label>
        </>
    )
};

export default StepOnePage;