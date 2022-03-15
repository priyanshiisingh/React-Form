import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CVInput,
  Label,
  Div,
  Form,
  ReqSpan,
} from "../../assets/styles/InputStyles";

interface CVInputProps {
  label: string;
  type: string;
  placeholder: string;
  registerInput: any;
  validations: any;
}

const CVInputField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
}: CVInputProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CVInputProps>();

  const onSubmit: SubmitHandler<CVInputProps> = (data) => console.log(data);

  return (
    <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <Label htmlFor={label}>
          {label}
          <ReqSpan>✱</ReqSpan>
        </Label>

        <label className="btn">
          <svg width="15px" height="15px" viewBox="0 0 16 16">
            <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5 2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z" />
          </svg>
          ATTACH CV/RESUME
          <CVInput
            type={type}
            placeholder={placeholder}
            {...register(registerInput, validations)}
            id={label}
          />
        </label>

        {errors.registerInput && <p>This field is required</p>}
        <input type="submit" />
      </Div>
    </Form>
  );
};

export default CVInputField;
