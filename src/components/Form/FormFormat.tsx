import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputFieldIndex from "../InputFields/InputFieldIndex";
import TextAreaIndex from "../TextArea/TextAreaIndex";
import SelectOptionsIndex from "../SelectOptions/SelectOptionsIndex";

interface FormProps {
  input: any;
  textArea: any;
  select: any;
}

const FormFormat = ({ input, textArea, select }: FormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormFormat;
