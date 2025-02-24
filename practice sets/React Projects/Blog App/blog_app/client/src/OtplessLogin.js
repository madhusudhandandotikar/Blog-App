import { useEffect } from "react";

const OtplessLogin = ({ onSuccess }) => {
  useEffect(() => {
    window.otpless = (otplessUser) => {
      console.log("OTPLESS User Data:", otplessUser);
      if (onSuccess) {
        onSuccess(otplessUser);
      }
    };
  }, []);

  return <div id="otpless-login-page"></div>;
};

export default OtplessLogin;
