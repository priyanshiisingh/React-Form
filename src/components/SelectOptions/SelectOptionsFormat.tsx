import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Label, Div, Form } from "../../assets/styles/InputStyles";
import { Option, Select, SVG } from "../../assets/styles/SelectOpStyles";

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
  const [raceInfo, setRaceInfo] = useState(false);

  return (
    <div>
      <Div>
        {/* <Label htmlFor={uqname}>{label}</Label> */}

        <div className="lcon">
          <Label htmlFor={uqname}>{label}</Label>
          {uqname === "race" ? (
            <span onClick={() => setRaceInfo(!raceInfo)}>
              <SVG viewBox="0 0 16 16">
                <path d="M2.34372 13.6571C-0.781242 10.5328 -0.781242 5.46508 2.34373 2.34174C5.46662 -0.780571 10.5323 -0.780571 13.6562 2.34168C16.7812 5.4651 16.7812 10.5348 13.6563 13.6571C10.5331 16.7808 5.46724 16.7811 2.34372 13.6571ZM3.03656 12.9639C5.77735 15.7051 10.2226 15.7048 12.9633 12.9637C15.7052 10.2242 15.7052 5.77554 12.9632 3.03502C10.2221 0.295293 5.77669 0.295293 3.03645 3.03502C0.294472 5.77556 0.294472 10.2223 3.03656 12.9639Z" />
                <path d="M9 7H7V12H9V7Z" />
                <path d="M8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6Z" />
              </SVG>
            </span>
          ) : (
            <></>
          )}
        </div>

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
