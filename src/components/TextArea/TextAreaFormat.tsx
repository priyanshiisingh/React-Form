import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Form } from "../../assets/styles/InputStyles";

import { AddInfo, Div, PrePro } from "../../assets/styles/TextAreaStyles";

interface TextAreaProps {
  label: string;
  placeholder: string;
  registerTextArea: any;
  validations: any;
}

interface PrePronounsProps {
  label: string;
  type: string;
  placeholder: string;
  registerPrePronouns: any;
  validations: any;
}

const TextAreaField = ({
  label,
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
          placeholder={placeholder}
          {...register(registerTextArea, validations)}
          id={label}
        />

        <input type="submit" />
      </Div>
    </Form>
  );
};

const PrePronounField = ({
  label,
  type,
  placeholder,
  registerPrePronouns,
  validations,
}: PrePronounsProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PrePronounsProps>();

  const onSubmit: SubmitHandler<PrePronounsProps> = (data) => console.log(data);

  return (
    <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <Label htmlFor={label}>{label}</Label>
        <PrePro
          type={type}
          placeholder={placeholder}
          {...register(registerPrePronouns, validations)}
          id={label}
        />

        <input type="submit" />
      </Div>
    </Form>
  );
};

export { TextAreaField, PrePronounField };
