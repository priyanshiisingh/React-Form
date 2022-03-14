import React from "react";
import TextAreaField from "./TextAreaFormat";
import InputField from "../InputFields/InputFormat";

const TextAreaIndex = () => {
  return (
    <div>
      <InputField
        label="Preferred Pronous"
        type={"text"}
        registerInput="Preferred Pronous"
        placeholder={"Type your response"}
        validations={{ required: false }}
      />
      <TextAreaField
        label="Additional Information"
        type={"text"}
        registerTextArea="Additional Information"
        placeholder={"Add a cover letter or anything else you want to share"}
        validations={{ required: false }}
      />
    </div>
  );
};

export default TextAreaIndex;
