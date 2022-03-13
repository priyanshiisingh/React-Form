import React from "react";
import SelectOptions from "./SelectOptionsFormat";

const SelectOptionsIndex = () => {
  return (
    <div>
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
    </div>
  );
};

export default SelectOptionsIndex;
