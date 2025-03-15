import { useState } from "react";

import CheckOtpForm from "src/components/CheckOtpForm";
import SendOtpForm from "src/components/SendOtpForm";

const AuthPage = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");

  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} setMobile={setMobile} mobile={mobile} />
      )}
      {step === 2 && (
        <CheckOtpForm
          setStep={setStep}
          mobile={mobile}
          code={code}
          setCode={setCode}
        />
      )}
    </div>
  );
};

export default AuthPage;
