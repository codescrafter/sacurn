import { yupResolver } from '@hookform/resolvers/yup';
import Checkbox from '@mui/material/Checkbox';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { useUserStore } from '@/store/user';

type SignupFormType = {
  username: string;
  email: string;
  password1: string;
  password2: string;
  phone: string;
  last_name: string;
  check: boolean;
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object({
    username: yup
      .string()
      .required('username required')
      .max(20, 'username must be at most 20 characters')
      .matches(/^[a-zA-Z0-9_.@]{1,20}$/, 'username can only contain letters, numbers, and the symbols: _ . @'),
    email: yup.string().email('email format should be correct').required('email required'),
    password1: yup
      .string()
      .required('password required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/,
        'Must contain at least 12 characters, at least one uppercase letter, one lowercase letter, and one number'
      ),
    password2: yup
      .string()
      .oneOf([yup.ref('password1')], 'password must match')
      .required('password required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{12,}$/,
        'Must contain at least 12 characters, at least one uppercase letter, one lowercase letter, and one number'
      ),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('phoneNumber required'),
    last_name: yup.string().required('name required'),

    check: yup.boolean().oneOf([true], 'checkbox needs to be checked').required('checkbox needs to be checked')
  })
  .required();

const OperatorSignUp = () => {
  const { register, handleSubmit, formState } = useForm<SignupFormType>({ resolver: yupResolver(schema) });
  console.log(formState.errors);
  const signup = useUserStore((state) => state.signup);
  const login = useUserStore((state) => state.login);

  const navigate = useNavigate();
  const onSubmit = handleSubmit(async (data) => {
    const isSuccess = await signup(data);
    if (isSuccess) {
      const result = await login({ username: data.username, password: data.password1 });
      if (result.isSuccess) {
        navigate(result.redirectUrl);
      }
    }
  });

  return (
    <div>
      <div className="flex items-center gap-4 pl-13 pt-11 ">
        <button
          className="flex justify-center items-center border-navy-blue border py-2 px-17 gap-2 text-xl text-navy-blue rounded-[3px]"
          onClick={() => navigate('/login')}
        >
          <img src="images/login/🦆 icon _log in_.svg" alt="" />
          回到登入
        </button>
        <img src="/images/certificate/bar.svg" alt="certificate-title" className="" />
        <h2 className="text-navy-blue text-[28px] font-normal">請填寫管理者資料</h2>
      </div>
      <div className="flex flex-row h-screen">
        <div className="flex flex-col items-center justify-center min-[1550px]:ml-23.5 min-[1200px]:ml-19 ml-14">
          <img
            className="min-[1550px]:h-[485px] min-[1550px]:w-[515px] min-[1200px]h-[420px]  h-[320px] w-[390px]"
            src="/images/operator-signup/background.png"
          />
          <p className="text-silverstone min-[1550px]:text-xl min-[1200px]:text-lg text-base text-center font-bold min-[1500px]:w-[70%] w-[80%]">
            Adventure Comes with you! <br />
            Join With Us!
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col w-[70vw] min-[1550px]:px-21.7 min-[1200px]:px-18 px-13">
          <h1 className="min-[1550px]:text-5.2xl min-[1200px]:text-4xl text-3xl text-center text-navy-blue font-semibold  min-[1550px]:mb-8.2 min-[1200px]:mb-6 mb-5">
            Account sign up
          </h1>
          {/* <Heading heading="公司名稱" />
        <input
          id="co-name"
          type="text"
          placeholder="艾克斯厚定股份有限公司"
          className={classNames(Style, 'w-full min-[1550px]:mb-10.7 min-[1200px]:mb-8 mb-6')}
        /> */}
          <div className="flex flex-row justify-between w-full min-[1550px]:mb-6 min-[1200px]:mb-8 mb-6">
            <Field
              heading="管理者姓名"
              type="text"
              className="self-start"
              register={register}
              id="last_name"
              error={formState?.errors?.last_name?.message}
            />

            <Field
              heading="管理者手機"
              type="text"
              className="self-end"
              register={register}
              id="phone"
              downText="此欄位在多項服務提供時將進行驗證，請正確填寫"
              error={formState?.errors?.phone?.message}
            />
          </div>
          <div className="flex flex-row justify-between w-full min-[1550px]:mb-6 min-[1200px]:mb-8 mb-6">
            <Field
              heading="帳號"
              type="text"
              className="self-start"
              register={register}
              id="username"
              downText="英數混合，最長請勿超過20個字元，可接受 ”_” “.” “@” 三種符號"
              error={formState?.errors?.username?.message}
            />
            <Field
              heading="Email"
              type="email"
              className="self-start"
              register={register}
              id="email"
              downText="此欄位在多項服務提供時將進行驗證，請正確填寫"
              error={formState?.errors?.email?.message}
            />
          </div>
          <div className="flex flex-row justify-between w-full min-[1550px]:mb-7.2 min-[1200px]:mb-6 mb-5">
            <div className="flex flex-col self-start w-[45%]">
              <Heading heading="設定密碼" />
              <PasswordInput register={register} id="password1" error={formState?.errors?.password1?.message} />
              <p className="text-grey ml-5.5 mt-2 w-[100%] min-[1500px]:text-base min-[1200px]:text-sm text-[12px]">
                提示：密碼需至少有12字元，請混和使用大小寫字母、數字，使密碼更加安全。
              </p>
            </div>
            <div className="flex flex-col self-start w-[45%]">
              <Heading heading="再次輸入密碼" />
              <PasswordInput register={register} id="password2" error={formState?.errors?.password2?.message} />
              <div className="ml-5.5">
                <div className="flex mt-2 w-[100%] justify-start items-baseline gap-1">
                  <div>
                    <Checkbox
                      sx={{
                        width: '20px',
                        height: '20px',
                        color: formState?.errors?.check?.message ? '#FF0000' : '#005487',
                        '&.Mui-checked': {
                          color: '#005487'
                        },
                        '& .MuiSvgIcon-root': {
                          width: '20px',
                          height: '20px'
                        }
                      }}
                      {...register('check')}
                    />
                  </div>
                  <p className="text-navy-blue min-[1500px]:text-base min-[1200px]:text-sm text-[12px] font-bold">
                    我已知悉並同意個人資料將被平台搜集、處理及利用。
                  </p>
                </div>
                <div className="ml-6">
                  {formState?.errors?.check?.message && (
                    <p className="text-bright-red min-[1500px]:text-xs min-[1200px]:text-xms text-xxs">
                      請務必確認勾選此框，才能點選下一步。
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="rounded-full bg-operator-signup shadow-operator-signup-button text-white min-[1550px]:text-xl min-[1200px]:text-base text-base font-bold w-full min-[1550px]:h-13.2 h-10 mt-3.2"
          >
            註冊
          </button>
          <p className=" text-dark-grey text-center min-[1550px]:text-base min-[1200px]:text-sm text-[12px] font-semibold mt-3 ml-5">
            點擊「註冊」即表示你同意我們的
            <Link
              to="/pdf/Membership_Terms_Service.pdf"
              target="_blank"
              download="土星_平台條款內容"
              className="hover:underline"
            >
              《服務條款》
            </Link>
            、
            <Link
              to="/pdf/Membership_Terms_Service.pdf"
              target="_blank"
              download="土星_平台條款內容"
              className="hover:underline"
            >
              《隱私政策》
            </Link>
            和
            <Link
              to="/pdf/Membership_Terms_Service.pdf"
              target="_blank"
              download="土星_平台條款內容"
              className="hover:underline"
            >
              《Cookie政策》
            </Link>
            。
          </p>
        </form>
      </div>
    </div>
  );
};

export default OperatorSignUp;

interface HeadingProps {
  heading: string;
}
const Heading = ({ heading }: HeadingProps) => {
  return (
    <label className="text-navy-blue min-[1550px]:text-xl min-[1200px]:text-lg text-base font-semibold self-start ml-5 mb-2">
      {heading}
    </label>
  );
};

interface FieldProps {
  heading: string;
  type: string;
  className: string;
  downText?: string;
  register?: UseFormRegister<SignupFormType>;
  id?: 'username' | 'email' | 'password1' | 'password2' | 'last_name' | 'phone';
  error?: string;
}
interface PasswordInputProps {
  className?: string;
  register?: UseFormRegister<SignupFormType>;
  id?: 'password1' | 'password2';
  error?: string;
}

const Field = ({ heading, type, className, downText, register, id, error }: FieldProps) => {
  const registeringObject = register && id ? { ...register(id) } : {};
  return (
    <div className={classNames('relative flex flex-col w-[45%]', className)}>
      <Heading heading={heading} />
      <input disabled={!id} {...registeringObject} type={type} className={classNames(Style, 'w-full')} />
      {error && <p className="text-bright-red text-xs mt-1 ml-5">{error}</p>}
      <p className="text-grey ml-5.5 mt-2 w-[100%] min-[1500px]:text-base min-[1200px]:text-sm text-[12px] input-no-bg">
        {downText}
      </p>
    </div>
  );
};

const PasswordInput = ({ className, register, id, error }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const registeringObject = register && id ? { ...register(id) } : {};

  return (
    <>
      <div className="rounded-full shadow-operator-signup-input bg-white min-[1550px]:h-17.5 min-[1200px]:h-13.2 h-11.5 px-5 py-3 text-black min-[1550px]:text-xl min-[1200px]:text-lg text-base outline-none flex justify-between w-[100%]">
        <input
          {...registeringObject}
          className={classNames('outline-none w-[85%] input-no-bg', className)}
          type={showPassword ? 'text' : 'password'}
        />
        <img
          src={showPassword ? '/images/operator-signup/visible.svg' : '/images/operator-signup/invisible.svg'}
          onClick={() => setShowPassword((prev) => !prev)}
        />
      </div>
      {error && <p className="text-bright-red text-xs mt-1 ml-5">{error}</p>}
    </>
  );
};

const Style =
  'rounded-full shadow-operator-signup-input bg-white min-[1550px]:h-17.5 min-[1200px]:h-13.2 h-11.5 px-5 py-5.7 text-black min-[1550px]:text-xl min-[1200px]:text-lg text-base outline-none input-no-bg';
