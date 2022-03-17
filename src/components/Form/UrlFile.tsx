import React from "react";
import {
  FieldErrors,
  Path,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

const Input = styled.input`
  display: none;
`;

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

interface URLProps {
  registerURL: any;
  register: UseFormRegister<FormProps>;
}

const URL = ({ register, registerURL }: URLProps) => {
  const {
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<URLProps>();

  return <Input type="url" {...register(registerURL)} />;
};

export default URL;
