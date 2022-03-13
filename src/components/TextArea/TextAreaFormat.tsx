import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface TextAreaProps {
  label: string;
  type: string;
  placeholder: string;
  registerTextArea: any;
  validations: any;
}

const TextAreaField = ({
  label,
  type,
  placeholder,
  registerTextArea,
  validations,
}: TextAreaProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TextAreaProps>();

  return (
    <form className="mb-3">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(registerTextArea, validations)}
        id={label}
      />
      {errors.registerTextArea && <span>This field is required</span>}
    </form>
  );
};

export default TextAreaField;
