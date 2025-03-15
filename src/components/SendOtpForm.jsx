const SendOtpForm = ({ mobile, setMobile, setStep }) => {
  return (
    <form>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار لطفاً شماره موبایل خود را وارد کنید. کد
        تایید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor='input'>شماره موبایل خود را وارد کنید</label>
      <input
        type='text'
        id='input'
        value={mobile}
        onChange={(event) => setMobile(event.target.value)}
      />
    </form>
  );
};

export default SendOtpForm;
