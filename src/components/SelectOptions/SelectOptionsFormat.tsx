import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Div, Form } from "../../assets/styles/InputStyles";
import { Option, Select } from "../../assets/styles/SelectOpStyles";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}
enum Race {
  hispanic = "Hispanic or Latino",
  white = "White (Not Hispanic or Latino)",
  black = "Black or African American (Not Hispanic or Latino)",
  hawaiian = "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
  asian = "Asian (Not Hispanic or Latino)",
  american = "American Indian or Alaska Native (Not Hispanic or Latino)",
  mixed = "Two or More Races (Not Hispanic or Latino)",
  decline = "Decline to self-identify",
}

enum Veteran {
  veteran = "I am a veteran",
  notVeteran = "I am not a veteran",
  decline = "Decline to self identify",
}

interface SelectOptionsProps {
  opKey: string;
  uqname: string;
  label: string;
  options: string[];
  registerOptions: any;
}

const SelectOptions = ({
  opKey,
  uqname,
  label,
  options,
  registerOptions,
}: SelectOptionsProps) => {
  const { register, handleSubmit } = useForm<SelectOptionsProps>();

  return (
    <div>
      <Div>
        <Label htmlFor={uqname}>{label}</Label>
        <Select id={uqname} {...register(registerOptions)}>
          <Option value="">Select...</Option>
          {/*default selct*/}
          {options.map((value, num) => {
            return (
              <Option key={opKey + num} value={value}>
                {value}
              </Option>
            );
          })}
        </Select>
      </Div>
    </div>
  );
};

export default SelectOptions;
