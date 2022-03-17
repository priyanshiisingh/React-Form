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
  resumeURL: string;
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
  placeholder: string;
  registerTextArea: any;
  register: UseFormRegister<FormProps>;
  validations: any;
}

interface PrePronounsProps {
  type: string;
  placeholder: string;
  registerPrePronouns: any;
  register: UseFormRegister<FormProps>;
  validations: any;
}

const TextAreaField = ({
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
      <AddInfo
        placeholder={placeholder}
        {...register(registerTextArea, validations)}
      />
    </Div>
  );
};

const PrePronounField = ({
  type,
  placeholder,
  register,
  registerPrePronouns,
  validations,
}: PrePronounsProps) => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<PrePronounsProps>();

  return (
    <Div>
      <PrePro
        type={type}
        placeholder={placeholder}
        {...register(registerPrePronouns, validations)}
      />
    </Div>
  );
};

export { TextAreaField, PrePronounField };
