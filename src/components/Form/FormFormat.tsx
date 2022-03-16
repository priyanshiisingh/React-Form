import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

//styles
import {
  Form,
  DivBody,
  Heading,
  InputBtn,
  InputDiv,
  PPText,
  HR,
} from "../../assets/styles/FormStyles";

//components
import InputField from "../InputFields/InputFormat";
import CVInputField from "../RequiredFields/CVInput";
import InputReqField from "../RequiredFields/InputReqField";
import SelectOptions from "../SelectOptions/SelectOptionsFormat";
import { TextAreaField, PrePronounField } from "../TextArea/TextAreaFormat";
import CaptchaComponent from "../Captcha/ReCaptcha";

//firebase
import { getDatabase, ref, set } from "firebase/database";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "./Firestore";
// const database = getDatabase();

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
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<FormProps>();

  const onSubmit: SubmitHandler<FormProps> = async (data) => {
    console.log(data);
    try {
      await addDoc(collection(db, "users"), {
        resume: data.resume,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        currentCompany: data.currentCompany,
        linkedInUrl: data.linkedInUrl,
        twitterUrl: data.twitterUrl,
        githubUrl: data.githubUrl,
        portfolioUrl: data.portfolioUrl,
        otherUrl: data.otherUrl,
        prePronouns: data.prePronouns,
        addInfo: data.addInfo,
        gender: data.gender,
        race: data.race,
        veteran: data.veteran,
      });
    } catch (err) {
      alert(err);
    }
  };
  return (
    <DivBody>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading>SUBMIT YOUR APPLICATION</Heading>
        <div>
          <CVInputField
            label={"Resume/CV"}
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
            label={"Full name"}
            type={"text"}
            registerInput={"fullName"}
            register={register}
            placeholder={""}
            validations={{ required: true }}
          />
          <InputReqField
            label="Email"
            type="email"
            registerInput={"email"}
            register={register}
            placeholder={""}
            validations={{ required: true }}
          />
          <InputField
            label="Phone"
            type={"text"}
            registerInput={"phone"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
          <InputField
            label="Current Company"
            type={"text"}
            registerInput={"currentCompany"}
            register={register}
            placeholder={""}
            validations={{ required: false }}
          />
          <Heading>LINKS</Heading>
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
        <div>
          <Heading>PREFFERED PRONOUNS</Heading>
          <PPText>If you'd like, please share your pronouns with us.</PPText>
          <PrePronounField
            type="text"
            registerPrePronouns={"prePronouns"}
            register={register}
            placeholder={"Type your response"}
            validations={{ required: false }}
          />
          <Heading>ADDITIONAL INFORMATION</Heading>
          <TextAreaField
            registerTextArea={"addInfo"}
            register={register}
            placeholder={
              "Add a cover letter or anything else you want to share"
            }
            validations={{ required: false }}
          />
        </div>
        <HR />
        <Heading>U.S. EQUAL EMPLOYMENT OPPORTUNITY INFORMATION</Heading>
        {/* (Completion is voluntary and will not subject you to adverse treatment) */}
        <PPText>
          Our company values diversity. To ensure that we comply with reporting
          requirements and to learn more about how we can increase diversity in
          our candidate pool, we invite you to voluntarily provide demographic
          information in a confidential survey at the end of this application.
          Providing this information is optional. It will not be accessible or
          used in the hiring process, and has no effect on your opportunity for
          employment.
        </PPText>
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

        <CaptchaComponent />
        <InputDiv>
          <InputBtn type="submit" value="Submit Application" />
        </InputDiv>
      </Form>
    </DivBody>
  );
};

export default FormFormat;
