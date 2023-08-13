import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { t } = useTranslation("login");
  const navigate = useNavigate();

  return (
    <div className="bg-[url('../public/images/login/login-bg.png')] bg-no-repeat bg-center bg-cover w-screen min-h-screen 2xl:pt-[136px] pt-24">
      <div className="2xl:w-[402px] 2xl:h-[660px] w-80 h-[500px] bg-login-white shadow-login-box rounded-[28px] blur-xxs 2xl:ml-60 ml-20 2xl:pt-3">
        <img
          className="2xl:w-[150px] 2xl:h-[150px] w-28 h-28 mx-auto mb-3"
          src={"/images/login/login-logo.svg"}
          width={150}
          height={150}
          alt="login-sacurn"
        />
        <h3 className="font-semibold 2xl:text-[40px] text-[30px] 2xl:leading-[43px] leading-8 text-center text-navy-blue 2xl:mb-2.5 mb-1.5">
          碳資產管理平台
        </h3>
        <p className="font-bold 2xl:text-[15px] text-xs leading-[10px] text-navy-blue text-center 2xl:mb-16 mb-8">
          Carbon Offset Management Platform
        </p>
        <div className="flex flex-col items-center w-full mb-[22px]">
          <div className="w-4/5 bg-snowflake-grey shadow-input-box blur-xxs rounded-[18px] flex items-center 2xl:h-[53px] h-10">
            <img
              className="mr-3.5 ml-6 2xl:w-6 2xl:h-6 w-4 h-4"
              src="/images/login/user.svg"
              width={24}
              height={24}
              alt="user-icon"
            />
            <input
              className="text-navy-blue !bg-transparent flex-1 h-full outline-none 2xl:text-xl text-base"
              type="text"
              placeholder={t("username")}
            />
          </div>

          <div className="w-4/5 bg-snowflake-grey shadow-input-box blur-xxs rounded-[18px] flex items-center 2xl:h-[53px] h-10 mt-5 mb-[22px]">
            <img
              className="mr-3.5 ml-6 2xl:w-6 2xl:h-6 w-4 h-4"
              src="/images/login/key.svg"
              width={24}
              height={24}
              alt="key-icon"
            />
            <input
              className="text-navy-blue !bg-transparent flex-1 h-full outline-none 2xl:text-xl text-base"
              type="text"
              placeholder={t("password")}
            />
          </div>

          <button
            onClick={() => {
              console.log("redirecting");
              navigate("/dashboard");
            }}
            className="w-4/5 2xl:h-[53px] h-10 bg-navy-blue rounded-[26px] 2xl:text-xl text-base font-bold bg-blue-btn shadow-btn text-white"
          >
            {t("login")}
          </button>
        </div>
        <p className="text-slate-blue-grey text-center font-bold text-sm leading-[22px]">
          Forgot password? <span className="text-black">or</span> Sign Up
        </p>
      </div>
      <div className="bg-[url('../public/images/login/bg-bottom.png')] bg-cover bg-right absolute bottom-0 left-0 h-60 w-full" />
      <img
        src="/images/login/sacurn-bottom.png"
        className="absolute right-[90px] bottom-14"
        width={262}
        height={88}
        alt="sacurn-logo"
      />
    </div>
  );
};

export default Login;
