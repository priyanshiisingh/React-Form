import React from "react";
import InputField from "./InputFormat";

const InputFieldIndex = () => {
  return (
    <div>
      <InputField
        label={"resume"}
        type={"file"}
        registerInput="resume"
        placeholder={"attach file"}
        validations={{
          required: true,
          validate: {
            lessThan10MB: (files: any) =>
              files[0]?.size < 10000000 || "Max 10MB",
            acceptedFormats: (files: any) =>
              [
                "image/jpeg",
                "image/png",
                "image/gif",
                "application/pdf",
              ].includes(files[0]?.type) || "Only PNG, JPEG e GIF, PDF",
          },
        }}
      />

      <InputField
        label={"full name"}
        type={"text"}
        registerInput="Name"
        placeholder={""}
        validations={{ required: true }}
      />
      <InputField
        label="email"
        type="email"
        registerInput="email"
        placeholder={""}
        validations={{ required: true }}
      />
      <InputField
        label="phone"
        type={"text"}
        registerInput="phone"
        placeholder={""}
        validations={{ required: false }}
      />
      <InputField
        label="current company"
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
        validations={{ required: false }}
      />
      <InputField
        label="Twitter"
        type={"url"}
        registerInput="Twitter"
        placeholder={""}
        validations={{ required: false }}
      />
      <InputField
        label="Github"
        type={"url"}
        registerInput="github"
        placeholder={""}
        validations={{ required: false }}
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
