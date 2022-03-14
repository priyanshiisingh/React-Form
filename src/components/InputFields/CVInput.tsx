import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label, Div, Form } from "../../assets/styles/InputStyles";

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
        <Label htmlFor={label}>{label}</Label>
        <Input
          type={type}
          placeholder={placeholder}
          {...register(registerInput, validations)}
          id={label}
        />
        {errors.registerInput && <p>This field is required</p>}
        <input type="submit" />
      </Div>
    </Form>
  );
};

export default CVInputField;
