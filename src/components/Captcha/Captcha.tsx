import React, { useRef } from "react";
import ReCaptchaV2 from "react-google-recaptcha";
import axios from "axios";
import { Div } from "../../assets/styles/CaptchaStyles";

const CaptchaComponent = () => {
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  return (
    <Div>
      <ReCaptchaV2
        sitekey={"6Lf9P9ceAAAAALwzKavZ_IkfDYrB30dJ6OaWsNBf"}
        onChange={onChange}
      />
    </Div>
  );
};

export default CaptchaComponent;
