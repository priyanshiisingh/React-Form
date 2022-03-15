import React from "react";
import { TextAreaField, PrePronounField } from "./TextAreaFormat";

const TextAreaIndex = () => {
  return (
    <div>
      <PrePronounField
        type="text"
        label="Preferred Pronous"
        registerPrePronouns="Preferred Pronous"
        placeholder={"Type your response"}
        validations={{ required: false }}
      />

      <TextAreaField
        label="Additional Information"
        registerTextArea="Additional Information"
        placeholder={"Add a cover letter or anything else you want to share"}
        validations={{ required: false, minLength: 30 }}
      />
    </div>
  );
};

export default TextAreaIndex;
