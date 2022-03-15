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

  return (
    <Div>
      <Label htmlFor={label}>{label}</Label>
      <AddInfo
        placeholder={placeholder}
        {...register(registerTextArea, validations)}
        id={label}
      />
    </Div>
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

  return (
    <Div>
      <Label htmlFor={label}>{label}</Label>
      <PrePro
        type={type}
        placeholder={placeholder}
        {...register(registerPrePronouns, validations)}
        id={label}
      />
    </Div>
  );
};

export { TextAreaField, PrePronounField };
