import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CVInput,
  Input,
  Label,
  Div,
  Form,
  ReqSpan,
} from "../../assets/styles/InputStyles";

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

interface CVInputProps {
  label: string;
  type: any;
  placeholder: string;
  register: UseFormRegister<FormProps>;
  registerInput: any;
  validations: any;
}

const CVInputField = ({
  label,
  type,
  placeholder,
  registerInput,
  validations,
  register,
}: CVInputProps) => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CVInputProps>();

  return (
    <Div>
      <Label htmlFor={label}>
        {label}
        <ReqSpan>✱</ReqSpan>
      </Label>

      <div>
        <label className="btn" htmlFor={label}>
          <svg width="15px" height="15px" viewBox="0 0 16 16">
            <path d="M5 5V9C5 10.7 6.3 12 8 12C9.7 12 11 10.7 11 9V4.5C11 2 9 0 6.5 0C4 0 2 2 2 4.5V10C2 13.3 4.7 16 8 16C11.3 16 14 13.3 14 10V4H12V10C12 12.2 10.2 14 8 14C5.8 14 4 12.2 4 10V4.5C4 3.1 5.1 2 6.5 2C7.9 2 9 3.1 9 4.5V9C9 9.6 8.6 10 8 10C7.4 10 7 9.6 7 9V5H5Z" />
          </svg>
          ATTACH CV/RESUME
        </label>
        <Input
          type={type}
          placeholder={placeholder}
          {...register(registerInput, validations)}
          id={label}
        />
      </div>
      {errors.registerInput && <p>This field is required</p>}
    </Div>
  );
};

export default CVInputField;

/*
<div class="input-group">
  <input type="file" class="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload">
</div>
*/
