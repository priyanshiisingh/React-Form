import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label, Div, Form } from "../../assets/styles/InputStyles";

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  registerInput: any;
  validations: any;
}

const InputField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
}: InputProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputProps>();

  const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data);

  return (
    <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <div>
          <Label htmlFor={label}>{label}</Label>
        </div>

        <div>
          <Input
            type={type}
            placeholder={placeholder}
            {...register(registerInput, validations)}
            id={label}
          />
        </div>

        {errors.registerInput && <span>This field is required</span>}
        <input type="submit" />
      </Div>
    </Form>
  );
};

export default InputField;
