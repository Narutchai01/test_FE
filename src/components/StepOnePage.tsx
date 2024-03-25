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