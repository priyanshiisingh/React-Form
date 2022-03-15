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

  const onSubmit: SubmitHandler<InputReqProps> = (data) => console.log(data);

  return (
    <Form className="mb-3" onSubmit={handleSubmit(onSubmit)}>
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
        <input type="submit" />
      </Div>
    </Form>
  );
};

export default InputReqField;
