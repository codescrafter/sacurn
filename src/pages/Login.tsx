import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { useUserStore } from '@/store/user';

type LoginFormType = {
  username: string;
  password: string;
};

const schema = yup
  .object({
    username: yup.string().required('username required'),
    password: yup.string().required('password required')
  })
  .required();

const Login = () => {
  const { t } = useTranslation('login');
  const navigate = useNavigate();
  const login = useUserStore((state) => state.login);

  const { register, handleSubmit, formState } = useForm<LoginFormType>({ resolver: yupResolver(schema) });

  console.log(formState);

  const onSubmit = handleSubmit(async (data) => {
    const result = await login(data);
    if (result.isSuccess) {
      navigate(result.redirectUrl);
    }
  });

  return (
    <div className="bg-[url('../public/images/login/login-bg.png')] bg-no-repeat bg-center bg-cover w-screen min-h-screen 2xl:pt-[136px] pt-24 relative lg:pb-32 pb-20">
      <div className="2xl:w-[402px] 2xl:h-[660px] w-80 h-[500px] bg-login-white shadow-login-box rounded-[28px] 2xl:ml-60 ml-20 2xl:pt-3 relative z-40">
        <img
          className="2xl:w-[150px] 2xl:h-[150px] w-28 h-28 mx-auto mb-3"
          src="/images/login/login-logo.svg"
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
        <form onSubmit={onSubmit} className="flex flex-col items-center w-full mb-[22px]">
          <div className="w-4/5 bg-snowflake-grey shadow-input-box rounded-[18px] flex items-center 2xl:h-[53px] h-10">
            <img
              className="mr-3.5 ml-6 2xl:w-6 2xl:h-6 w-4 h-4"
              src="/images/login/user.svg"
              width={24}
              height={24}
              alt="user-icon"
            />
            <input
              {...register('username')}
              className="text-navy-blue !bg-transparent flex-1 h-full outline-none 2xl:text-xl text-base input-no-bg font-istok-web"
              type="text"
              placeholder={t('username')}
            />
            {/* <div>{formState.errors?.username?.message}</div> */}
          </div>

          <div className="w-4/5 bg-snowflake-grey shadow-input-box rounded-[18px] flex items-center 2xl:h-[53px] h-10 mt-5 mb-[22px]">
            <img
              className="mr-3.5 ml-6 2xl:w-6 2xl:h-6 w-4 h-4"
              src="/images/login/key.svg"
              width={24}
              height={24}
              alt="key-icon"
            />
            <input
              {...register('password')}
              className="text-navy-blue !bg-transparent flex-1 h-full outline-none 2xl:text-xl text-base input-no-bg font-istok-web"
              type="password"
              placeholder={t('password')}
            />
            {/* <div>{formState.errors?.password?.message}</div> */}
          </div>

          <button
            type="submit"
            className="w-4/5 2xl:h-[53px] h-10 bg-navy-blue rounded-[26px] 2xl:text-xl text-base font-bold bg-blue-btn shadow-btn text-white"
          >
            {t('login')}
          </button>
        </form>
        <p className="text-slate-blue-grey text-center font-bold text-sm leading-[22px] font-istok-web">
          <Link to="/password-recovery">Forgot password?</Link> <span className="text-black">or</span>{' '}
          <span>
            <button onClick={() => navigate('/sign-up')}>Sign Up</button>
          </span>
        </p>
      </div>
      <div className="bg-[url('../public/images/login/bg-bottom.png')] bg-cover bg-right absolute bottom-0 left-0 2xl:h-72 lg:h-60 h-40 w-full" />
      <img
        src="/images/login/sacurn-bottom.png"
        className="absolute lg:right-[90px] right-15 lg:bottom-14 bottom-10 lg:w-[262px] lg:h-22.5 w-40 h-13"
        width={262}
        height={88}
        alt="sacurn-logo"
      />
    </div>
  );
};

export default Login;
