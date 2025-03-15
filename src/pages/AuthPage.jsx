import CheckOtpForm from "src/components/CheckOtpForm";
import SendOtpForm from "src/components/SendOtpForm";

const AuthPage = () => {
  return (
    <div>
      <SendOtpForm />
      <CheckOtpForm />
    </div>
  );
};

export default AuthPage;
