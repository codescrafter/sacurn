import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '@/components/CustomButton';
import { useForgotPasswordStore } from '@/store/forgotPassword';

const PasswordRecoveryCodeNotifier = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [secondsFromLastCode, setSecondsFromLastCode] = useState(0);

  const forgetPassword = useForgotPasswordStore((state) => state.forgetPassword);
  const handleSendVerification = async () => {
    const result = await forgetPassword();
    if (result) {
      setButtonClicked(true);
      return;
    }
  };

  const userEmail = useForgotPasswordStore((state) => state.userEmail);

  useEffect(() => {
    if (buttonClicked) {
      const timer = setInterval(() => {
        setSecondsFromLastCode((seconds) => seconds + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [buttonClicked]);

  return (
    <div className="w-[90%]  mx-auto flex flex-col gap-5 py-5 ">
      <div className="w-full shadow-completed-box bg-white rounded-[20px] px-18 py-6 2xl:py-10 flex flex-col gap-9 2xl:gap-15 min-[1700px]:h-[470px]">
        <div className="flex gap-5  justify-between items-center ">
          <h2 className="text-navy-blue font-bold text-base lg:text-lg xl:text-2xl 2xl:text-3xl">
            寄送通知信動態驗證碼
          </h2>
          <hr className="border-navy-blue border w-[75%]" />
        </div>
        <div className="flex justify-between items-center ">
          <p className="w-[500px] text-black font-normal leading-8 text-base lg:text-lg xl:text-xl ">
            系統將寄送驗證通知信至您留存於本行的電子郵件信箱
            <span className="text-bright-red">{userEmail}</span>，請確認電子信箱是否正確
          </p>
          <CustomButton
            onClick={handleSendVerification}
            variant="primary"
            className={`rounded-xl px-11 py-2 h-12 text-sm xl:text-lg mt-3 ${
              buttonClicked && secondsFromLastCode < 120 ? '!bg-white-smoke !text-grey border-gainsbro border' : ''
            }`}
          >
            {!buttonClicked || secondsFromLastCode > 120 ? '寄送驗證碼' : `${120 - secondsFromLastCode}秒後重寄`}
          </CustomButton>
        </div>
        <div className="flex flex-col gap-1 text-black  text-sm md:text-base lg:text-lg xl:text-xl ">
          <h2 className="">注意事項</h2>
          <ul className="list-disc pl-9 ">
            <li>若您的電子信箱已變更，請洽平台客服專線(02)2221-7000，或email至客服信箱 service@sacurn.com 。</li>
            <li>
              重新產生通知信驗證碼每日上限 <span className="text-bright-red">5</span>
              次，為確保您的交易安全，請立即至您的信箱收取通知信，並於10分鐘內完成動態驗證碼驗證，若未完成申請步驟，郵件內的動態驗證碼將會失效，請再重新申請。
            </li>
            <li>
              如未收到驗證信件，請確認您留存的電子郵件地址是否正確及電子郵件信箱是否正常使用，或是被您的郵件伺服器判斷為垃圾郵件。
            </li>
          </ul>
        </div>
      </div>

      <div className=" flex justify-center gap-10 font-bold">
        <Link to={'/'}>
          <CustomButton
            variant="primary"
            className="rounded-xl px-17 h-12 text-xl mt-3 border-2 bg-white !text-navy-blue "
          >
            取消申請
          </CustomButton>
        </Link>
      </div>
    </div>
  );
};

export default PasswordRecoveryCodeNotifier;
