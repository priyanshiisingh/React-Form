import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputField from "../InputFields/InputFormat";
import SelectOptions from "../SelectOptions/SelectOptionsFormat";
import { TextAreaField, PrePronounField } from "../TextArea/TextAreaFormat";

interface FormProps {
  cv: FileList;
  fullName: string;
  email: string;
  phone: string;
  curComp: string;
  lurl: string;
  turl: string;
  gurl: string;
  purl: string;
  ourl: string;
  prePronouns: string;
  addInfo: string;
  gender: string;
  race: string;
  veteran: string;
}

const FormFormat = ({
  cv,
  fullName,
  email,
  phone,
  curComp,
  lurl,
  turl,
  gurl,
  purl,
  ourl,
  prePronouns,
  addInfo,
  gender,
  race,
  veteran,
}: FormProps) => {
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
        <h3>submit your application</h3>
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
          <h3>links</h3>
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

        <h3>textarea</h3>
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
            placeholder={
              "Add a cover letter or anything else you want to share"
            }
            validations={{ required: false }}
          />
        </div>

        <h3>selection</h3>
        <SelectOptions
          opKey={"s1"}
          label={"Gender"}
          uqname={"gender"}
          options={["female", "male", "other"]}
          registerOptions={"gender"}
        />
        <SelectOptions
          opKey={"s2"}
          label={"Race"}
          uqname={"race"}
          options={[
            "Hispanic or Latino",
            "White (Not Hispanic or Latino)",
            "Black or African American (Not Hispanic or Latino)",
            "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
            "Asian (Not Hispanic or Latino)",
            "American Indian or Alaska Native (Not Hispanic or Latino)",
            "Two or More Races (Not Hispanic or Latino)",
            "Decline to self-identify",
          ]}
          registerOptions={"race"}
        />
        {/* Veteran Status Field  */}
        <SelectOptions
          opKey={"s3"}
          label={"Veteran Status"}
          uqname={"veteran-status"}
          options={[
            "I am a veteran",
            "I am not a veteran",
            "Decline to self identify",
          ]}
          registerOptions={"veteran"}
        />

        <input type="submit" value="Submit Application" />
      </form>
    </div>
  );
};

export default FormFormat;
