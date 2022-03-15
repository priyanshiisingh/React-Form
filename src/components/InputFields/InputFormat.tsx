import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, Label, Div, Form } from "../../assets/styles/InputStyles";

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

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FormProps>;
  registerInput: any;
  validations: any;
}

const InputField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
  register,
}: InputProps) => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputProps>();

  return (
    <Div>
      <div>
        <Label htmlFor={label}>{label}</Label>
      </div>

      <div>
        <Input
          type={type}
          placeholder={placeholder}
          {...register(registerInput, validations)}
          id={label}
        />
      </div>

      {errors.registerInput && <span>This field is required</span>}
    </Div>
  );
};

export default InputField;
