import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label } from "../../assets/styles/InputStyles";
import { ErrorDiv } from "../../assets/styles/ErrorStyles";

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
  errors: any;
  message: string;
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
  errors,
  message,
}: TextAreaProps) => {
  const { handleSubmit, watch } = useForm<TextAreaProps>();

  return (
    <div>
      <Div>
        <AddInfo
          placeholder={placeholder}
          {...register(registerTextArea, validations)}
        />
      </Div>
      {errors ? <ErrorDiv>{message}</ErrorDiv> : null}
    </div>
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
