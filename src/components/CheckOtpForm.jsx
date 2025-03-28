import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import styles from "./CheckOtpForm.module.css";
import { checkOtp } from "src/services/auth";
import { getProfile } from "src/services/user";
import { setCookie } from "src/utils/cookie";

const CheckOtpForm = ({ code, setCode, mobile, setStep }) => {
  const navigate = useNavigate();
  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  const submitHandler = async (event) => {
    event.preventDefault();

    if (code.length !== 5) return;
    const { response, error } = await checkOtp(code, mobile);

    if (response) {
      setCookie(response.data);
      navigate("/");
      refetch();
    }

    if (error) console.log(error.response.data.message);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <p>تایید کد پیامک شده</p>
      <span>
        کد پیامک شده به شماره «{mobile}» را وارد کنید. کد تایید را وارد کنید.
      </span>
      <label htmlFor='input'>کد تایید را وارد کنید.</label>
      <input
        type='text'
        value={code}
        id='input'
        onChange={(event) => setCode(event.target.value)}
      />
      <button type='submit'>ورود</button>
      <button className={styles.backButton} onClick={() => setStep(1)}>
        تغییر شماره تلفن
      </button>
    </form>
  );
};

export default CheckOtpForm;
