import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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

  return (
    <form className="mb-3">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(registerInput, validations)}
        id={label}
      />
      {errors.registerInput && <span>This field is required</span>}
    </form>
  );
};

export default InputField;
