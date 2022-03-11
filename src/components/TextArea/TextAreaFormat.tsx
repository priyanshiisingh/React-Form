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

  const onSubmit: SubmitHandler<TextAreaProps> = (data) => console.log(data);

  return (
    <form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register(registerTextArea, validations)}
        id={label}
      />
      {errors.registerTextArea && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default TextAreaField;
