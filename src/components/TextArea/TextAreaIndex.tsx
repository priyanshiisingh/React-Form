import React from "react";
import TextAreaField from "./TextAreaFormat";

const TextAreaIndex = () => {
  return (
    <div>
      <TextAreaField
        label="Preferred Pronous"
        type={"text"}
        registerTextArea="Preferred Pronous"
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
