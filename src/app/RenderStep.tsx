import React from 'react'

interface RenderStepProps {
    step: number;
    data : { name: string; email: string; password: string };
    handleChange: React.ChangeEventHandler;
}


const Step1 : React.FC<RenderStepProps> = ({ data, handleChange }) => {
    return (
        <label>
            Name:
            <input
                type="text"
                name="name"
                value={data.name}
                onChange={handleChange}
            />
        </label>
    );
}

const Step2 : React.FC<RenderStepProps> = ({ data, handleChange }) => {
    return (
        <label>
            Email:
            <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            
        </label>
    );
};


const Step3 : React.FC<RenderStepProps> = ({ data, handleChange }) => {
    return (
        <label>
            Password:
            <input
                type="text"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
        </label>
    );
};

const RenderStep: React.FC<RenderStepProps> = ({ step ,data , handleChange}) => {
    switch (step) {
        case 0:
            return (
                <Step1 step={step} data={data} handleChange={handleChange} />
            );
        case 1:
            return (
                <Step2 step={step} data={data} handleChange={handleChange} />
            );
        case 2:
            return (
                <Step3 step={step} data={data} handleChange={handleChange} />
            );
        default:
            return null;
    }
}

export default RenderStep
