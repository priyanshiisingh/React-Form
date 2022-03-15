import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, DivBody } from "../../assets/styles/FormStyles";

import InputField from "../InputFields/InputFormat";
import CVInputField from "../RequiredFields/CVInput";
import InputReqField from "../RequiredFields/InputReqField";
import SelectOptions from "../SelectOptions/SelectOptionsFormat";
import { TextAreaField, PrePronounField } from "../TextArea/TextAreaFormat";

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

const FormFormat = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = (data) => console.log(data);
  return (
    <DivBody>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>submit your application</h3>
        <div>
          <CVInputField
            label={"resume"}
            type={"file"}
            registerInput={"resume"}
            register={register}
            placeholder={"attach file"}
            validations={{
              required: true,
              validate: {
                lessThan5MB: (files: any) =>
                  files[0]?.size < 5000000 || "Max 5MB",
                acceptedFormats: (files: any) =>
                  ["application/pdf"].includes(files[0]?.type) || "Only PDF",
              },
            }}
          />

          <InputReqField
            label={"full name"}
            type={"text"}
            registerInput={"fullName"}
            register={register}
            placeholder={""}
            validations={{ required: true }}
          />
          <InputReqField
            label="email"
            type="email"
            registerInput={"email"}
            register={register}
            placeholder={""}
            validations={{ required: true }}
          />
          <InputField
            label="phone"
            type={"text"}
            registerInput={"phone"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
          <InputField
            label="current company"
            type={"text"}
            registerInput={"currentCompany"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
          <h3>links</h3>
          <InputField
            label="LinkedIn"
            type={"url"}
            registerInput={"linkedInUrl"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
          <InputField
            label="Twitter"
            type={"url"}
            registerInput={"twitterUrl"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
          <InputField
            label="Github"
            type={"url"}
            registerInput={"githubUrl"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
          <InputField
            label="Portfolio"
            type={"url"}
            registerInput={"portfolioUrl"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
          <InputField
            label="Other"
            type={"url"}
            registerInput={"otherUrl"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
        </div>

        <h3>textarea</h3>
        <div>
          <PrePronounField
            type="text"
            label="Preferred Pronous"
            registerPrePronouns={"prePronouns"}
            register={register}
            placeholder={"Type your response"}
            validations={{ required: false }}
          />
          <TextAreaField
            label="Additional Information"
            registerTextArea={"addInfo"}
            register={register}
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
          options={["Female", "Male", "Other"]}
          registerOptions={"gender"}
          register={register}
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
          register={register}
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
          register={register}
        />

        <input type="submit" value="Submit Application" />
      </Form>
    </DivBody>
  );
};

export default FormFormat;

/*
{
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
}: FormProps
*/
