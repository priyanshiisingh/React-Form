import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
require("dotenv").config();
import axios from "axios";

const YourComponent = () => {
  const recaptchaRef = useRef(null);
  const key = process.env.YOUR_SITE_KEY;

  const handleSubmit = async () => {
    null;
    const captchaToken = await recaptchaRef.current.getValue();
    recaptchaRef.current.reset();

    // Pass this token to your server for validation...

    // Sample
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ReCAPTCHA ref={recaptchaRef} sitekey={key} />
      </form>
    </div>
  );
};
