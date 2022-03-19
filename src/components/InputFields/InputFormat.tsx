import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label, Div, IDiv } from "../../assets/styles/InputStyles";
import { ErrorDiv } from "../../assets/styles/ErrorStyles";

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

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FormProps>;
  registerInput: any;
  validations: any;
  errors: any;
  message: string;
}

const InputField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
  register,
  errors,
  message,
}: InputProps) => {
  const { handleSubmit, watch } = useForm<InputProps>();

  return (
    <div>
      <Div>
        <Label htmlFor={label}>{label}</Label>
        <IDiv>
          <Input
            type={type}
            placeholder={placeholder}
            {...register(registerInput, validations)}
            id={label}
          />
        </IDiv>
      </Div>
      {errors ? <ErrorDiv>{message}</ErrorDiv> : null}
    </div>
  );
};

export default InputField;
