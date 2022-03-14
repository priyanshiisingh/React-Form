import React, { useRef } from "react";
import ReCaptchaV2 from "react-google-recaptcha";
// require("dotenv").config();
import axios from "axios";

const CaptchaComponent = () => {
  //   const recaptchaRef = useRef(null);
  //   const key = process.env.YOUR_SITE_KEY;

  //   const handleSubmit = async () => {
  //     null;
  //     const captchaToken = await recaptchaRef.current.getValue();
  //     recaptchaRef.current.reset();

  // Pass this token to your server for validation...

  // Sample
  //   };
  //   const key = process.env.YOUR_SITE_KEY;

  /*const handleToken = (token) => {
    setForm((currentForm: any) => {
      return { ...currentForm, token };
    });
  };

  const handleExpire = () => {
    setForm((currentForm: any) => {
      return { ...currentForm, token: null };
    });
  };*/
  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <ReCaptchaV2
        sitekey={"6Lf9P9ceAAAAALwzKavZ_IkfDYrB30dJ6OaWsNBf"}
        onChange={onChange}
        // onExpired={handleExpire}
      />
    </div>
  );
};

export default CaptchaComponent;

// ref={recaptchaRef}
