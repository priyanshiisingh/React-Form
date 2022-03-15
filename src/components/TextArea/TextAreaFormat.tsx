import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Form } from "../../assets/styles/InputStyles";

import { AddInfo, Div, PrePro } from "../../assets/styles/TextAreaStyles";

interface FormProps {
  resume: FileList;
  fullName: string;
  email: string;
  phone: string;
  currentCompany: string;
  linkedInUrl: string;
  twitterUrl: string;
  githubUrl: string;
  portfolioUrl: string;
  otherUrl: string;
  prePronouns: string;
  addInfo: string;
  gender: string;
  race: string;
  veteran: string;
}

interface TextAreaProps {
  label: string;
  placeholder: string;
  registerTextArea: any;
  register: UseFormRegister<FormProps>;
  validations: any;
}

interface PrePronounsProps {
  label: string;
  type: string;
  placeholder: string;
  registerPrePronouns: any;
  register: UseFormRegister<FormProps>;
  validations: any;
}

const TextAreaField = ({
  label,
  placeholder,
  registerTextArea,
  register,
  validations,
}: TextAreaProps) => {
  const {
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
