import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Input,
  Label,
  Div,
  Form,
  ReqSpan,
} from "../../assets/styles/InputStyles";

interface InputReqProps {
  label: string;
  type: string;
  placeholder: string;
  registerInput: any;
  validations: any;
}

const InputReqField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
}: InputReqProps) => {
  const {
    register,
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

export default InputReqField;
