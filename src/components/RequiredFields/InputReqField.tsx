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
  Form,
  ReqSpan,
  IDiv,
} from "../../assets/styles/InputStyles";

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
}

const InputReqField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
  register,
}: InputReqProps) => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputReqProps>();

  return (
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
        />
      </IDiv>

      {errors.registerInput && <span>This field is required</span>}
    </Div>
  );
};

export default InputReqField;
