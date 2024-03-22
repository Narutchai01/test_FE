import React from 'react'

interface RenderStepProps {
    step: number;
    data : { name: string; email: string; password: string };
    handleChange: React.ChangeEventHandler;
}

const RenderStep: React.FC<RenderStepProps> = ({ step ,data , handleChange}) => {
    switch (step) {
        case 0:
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
        case 1:
            return (
                <label>
                    Email:
                    <input
                        type="text"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    ;
                </label>
            );
        case 2:
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
        default:
            return null;
    }
}

export default RenderStep
