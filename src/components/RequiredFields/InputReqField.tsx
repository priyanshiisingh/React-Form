import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Input,
  Label,
  Div,
  ReqSpan,
  IDiv,
} from "../../assets/styles/InputStyles";
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

interface InputReqProps {
  label: string;
  type: string;
  placeholder: string;
  registerInput: any;
  register: UseFormRegister<FormProps>;
  validations: any;
  errors: any;
  message: string;
}

const InputReqField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
  register,
  errors,
  message,
}: InputReqProps) => {
  const { handleSubmit, watch } = useForm<InputReqProps>();

  return (
    <div>
      <Div>
        <div>
          <Label htmlFor={label}>
            {label} <ReqSpan>✱</ReqSpan>
          </Label>
        </div>

        <IDiv>
          <Input
            type={type}
            placeholder={placeholder}
            {...register(registerInput, validations)}
            id={label}
            required
          />
        </IDiv>
      </Div>
      {errors ? <ErrorDiv>{message}</ErrorDiv> : null}
    </div>
  );
};

export default InputReqField;
