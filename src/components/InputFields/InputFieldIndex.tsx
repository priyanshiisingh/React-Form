import React from "react";
import InputField from "./InputFormat";
import CVInputField from "../RequiredFields/CVInput";
import InputReqField from "../RequiredFields/InputReqField";

const InputFieldIndex = () => {
  return (
    <div>
      <CVInputField
        label={"Resume/CV"}
        type={"file"}
        registerInput="resume"
        placeholder={"ATTACH RESUME/CV"}
        validations={{
          required: true,
          validate: {
            lessThan5MB: (files: any) => files[0]?.size < 5000000 || "Max 5MB",
            acceptedFormats: (files: any) =>
              ["application/pdf"].includes(files[0]?.type) || "Only PDF",
          },
        }}
      />

      <InputReqField
        label={"Full name"}
        type={"text"}
        registerInput="Name"
        placeholder={""}
        validations={{
          required: true,
          minLength: {
            value: 10,
          },
        }}
      />
      <InputReqField
        label="Email"
        type="email"
        registerInput="email"
        placeholder={""}
        validations={{ required: true }}
      />
      <InputField
        label="Phone"
        type={"text"}
        registerInput="phone"
        placeholder={""}
        validations={{
          required: false,
          pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
        }}
      />
      <InputField
        label="Current company"
        type={"text"}
        registerInput="current company"
        placeholder={""}
        validations={{ required: false }}
      />

      <InputField
        label="LinkedIn"
        type={"url"}
        registerInput="LinkedIn"
        placeholder={""}
        validations={{
          required: false,
          pattern: /^https:\/\/www.linkedin.com\/.*$/,
        }}
      />
      <InputField
        label="Twitter"
        type={"url"}
        registerInput="Twitter"
        placeholder={""}
        validations={{
          required: false,
          pattern: /^https:\/\/twitter.com\/.*$/,
        }}
      />
      <InputField
        label="Github"
        type={"url"}
        registerInput="github"
        placeholder={""}
        validations={{ required: false, pattern: /^https:\/\/github.com\/.*$/ }}
      />
      <InputField
        label="Portfolio"
        type={"url"}
        registerInput="Portfolio"
        placeholder={""}
        validations={{ required: false }}
      />
      <InputField
        label="Other"
        type={"url"}
        registerInput="other"
        placeholder={""}
        validations={{ required: false }}
      />
    </div>
  );
};

export default InputFieldIndex;

// pattern: {
//   value: /\+91\d{10}/,
// },
