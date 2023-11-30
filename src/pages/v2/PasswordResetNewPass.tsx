import classNames from 'classnames';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import SimpleNav from '@/components/SimpleNav';
import { useForgotPasswordStore } from '@/store/forgotPassword';

const PasswordResetNewPass = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [uid, setUid] = useState('');
  const [token, setToken] = useState('');

  const createNewPassword = useForgotPasswordStore((state) => state.createNewPassword);

  const isPasswordValid = useCallback(() => {
    const length = password.length >= 12;
    const containLettersAndNumbers = /^[A-Za-z0-9]+$/.test(password);
    const mixOfUpperAndLower = password !== password.toLowerCase() && password !== password.toUpperCase();
    const match = password === confirmPassword;
    return [length, containLettersAndNumbers, mixOfUpperAndLower, match];
  }, [password, confirmPassword]);

  const navigate = useNavigate();

  useEffect(() => {
    const url = window.location.href;

    const uid = url?.split('uid=')[1]?.split('&token=')[0];
    const token = url?.split('token=')[1];
    setUid(uid);
    setToken(token);
  }, []);

  const submitHandler = async () => {
    console.log(uid, token, password, confirmPassword);
    await createNewPassword({ uid, token, new_password1: password, new_password2: confirmPassword });
    navigate('/password-recovery');
  };
  return (
    <div className="flex flex-col min-h-screen">
      <SimpleNav heading="會員密碼重設" />
      <div className="flex-1 bg-smoke flex justify-center items-center">
        <div className="bg-white w-[867px] h-[487px] px-11 py-9 max-w-[90%] mx-auto rounded-[20px]">
          <div className="flex items-center gap-[34px]">
            <h3 className="text-[32px] font-bold text-navy-blue">會員密碼設定</h3>
            <hr className="border-navy-blue border flex-1" />
          </div>
          <div className="w-full flex flex-col flex-1 max-w-[377px] mx-auto gap-[18px] mt-16">
            <div className="w-full relative">
              <input
                className="border border-navy-blue text-navy-blue pl-2 rounded-[10px] h-[50px] !px-5 py-2.5 text-xl w-full"
                placeholder="輸入新的密碼"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                className="absolute top-[15px] right-[15px] cursor-pointer"
                src={showPassword ? '/images/operator-signup/visible.svg' : '/images/operator-signup/invisible.svg'}
                alt=""
                width={20}
                height={20}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            </div>
            <div className="w-full relative">
              <input
                className="border border-navy-blue text-navy-blue pl-2 rounded-[10px] h-[50px] !px-5 py-2.5 text-xl w-full"
                placeholder="再次輸入新的密碼"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <img
                className="absolute top-[15px] right-[15px] cursor-pointer"
                src={
                  showConfirmPassword ? '/images/operator-signup/visible.svg' : '/images/operator-signup/invisible.svg'
                }
                alt=""
                width={20}
                height={20}
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              />
            </div>
            <div>
              <p className="text-base text-black">密碼需滿足以下要求：</p>
              <div className="flex items-center gap-1">
                <img
                  src={
                    isPasswordValid()[0]
                      ? '/images/password-reset/password-tick-black.svg'
                      : '/images/password-reset/password-tick.svg'
                  }
                  alt=""
                />
                <p
                  className={classNames(
                    'text-sm',

                    isPasswordValid()[0] ? 'text-black' : 'text-[#888888]'
                  )}
                >
                  至少12個字元
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src={
                    isPasswordValid()[1]
                      ? '/images/password-reset/password-tick-black.svg'
                      : '/images/password-reset/password-tick.svg'
                  }
                  alt=""
                />
                <p
                  className={classNames(
                    'text-sm',

                    isPasswordValid()[1] ? 'text-black' : 'text-[#888888]'
                  )}
                >
                  至少含字母和數字，不能包含空格
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src={
                    isPasswordValid()[2]
                      ? '/images/password-reset/password-tick-black.svg'
                      : '/images/password-reset/password-tick.svg'
                  }
                  alt=""
                />
                <p
                  className={classNames(
                    'text-sm',

                    isPasswordValid()[2] ? 'text-black' : 'text-[#888888]'
                  )}
                >
                  混和使用大小寫字母、數字，使密碼更加安全。
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="rounded-[14px] text-xl font-bold h-[40px] border-navy-blue border text-navy-blue flex-1">
                取消
              </button>
              <button
                disabled={
                  !isPasswordValid()[0] || !isPasswordValid()[1] || !isPasswordValid()[2] || !isPasswordValid()[3]
                }
                className="rounded-[14px] text-xl font-bold h-[40px] bg-navy-blue disabled:bg-silk-blue text-white flex-1"
                onClick={submitHandler}
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordResetNewPass;
