import React, { useRef } from "react";
import ReCaptchaV2 from "react-google-recaptcha";
// require("dotenv").config();
import axios from "axios";

const CaptchaComponent = () => {
  //   const recaptchaRef = useRef(null);

  //   const handleSubmit = async () => {
  //     const captchaToken = await recaptchaRef.current.getValue();
  //     recaptchaRef.current.reset();

  //     //Pass this token to your server for validation...

  //     //Sample
  //     const res = await axios.post(API_URL, {
  //       FormData,
  //       captchaToken,
  //     });
  //   };

  function onChange(value: any) {
    console.log("Captcha value:", value);
  }

  return (
    <div>
      <ReCaptchaV2
        sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
        onChange={onChange}
        // onExpired={handleExpire}
      />
    </div>
  );
};

export default CaptchaComponent;

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
// ref={recaptchaRef}
