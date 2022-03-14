import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Div, Form } from "../../assets/styles/InputStyles";

import { AddInfo } from "../../assets/styles/TextAreaStyles";

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
    <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <Label htmlFor={label}>{label}</Label>
        <AddInfo
          type={type}
          placeholder={placeholder}
          {...register(registerTextArea, validations)}
          id={label}
        />
        {errors.registerTextArea && <span>This field is required</span>}
        <input type="submit" />
      </Div>
    </Form>
  );
};

export default TextAreaField;
