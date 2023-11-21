import React, { useState } from 'react';

import CustomButton from '@/components/CustomButton';
import ProgressBar from '@/components/ProgressBar';
import SimpleNav from '@/components/SimpleNav';

const DynamicCodeNotifier = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState('寄送驗證碼');
  const handleSendVerification = () => {
    setShowVerification(true);
    setButtonClicked(true);
    setButtonText('120秒後重寄');
  };

  return (
    <div className="w-full  bg-neutral-150 min-h-[100vh]">
      <SimpleNav heading="忘記密碼" className="relative mb-20 z-50" />
      <ProgressBar steps={3} stepNumber={2} stepName="身分驗證" gap="small" width="normal" />

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
              <span className="text-bright-red">risire@gmail.com</span>，請確認電子信箱是否正確
            </p>
            <CustomButton
              onClick={handleSendVerification}
              variant="primary"
              className={`rounded-xl px-11 py-2 h-12 text-sm xl:text-lg mt-3 ${
                buttonClicked ? '!bg-white-smoke !text-grey border-gainsbro border' : ''
              }`}
            >
              {buttonText}
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
        {showVerification && (
          <div className="w-full shadow-completed-box bg-white rounded-[20px] px-18 py-7 flex flex-col justify-between gap-10 min-[1700px]:h-[300px]">
            <div className="flex gap-5 justify-between items-center">
              <h2 className="text-navy-blue font-bold text-base lg:text-lg xl:text-2xl 2xl:text-3xl">
                寄送通知信動態驗證碼
              </h2>
              <hr className="border-navy-blue border w-[75%]" />
            </div>
            <div className="flex justify-start gap-5 items-center text-sm md:text-base lg:text-lg xl:text-xl ">
              <label htmlFor="" className="text-navy-blue font-normal ">
                驗證碼
              </label>
              <input
                type="text"
                placeholder="請輸入驗證碼6碼"
                className="border border-navy-blue rounded-md font-bold py-2 pl-2 w-[359px]"
              />
            </div>
            <div className="">
              <p className="text-black text-sm md:text-base lg:text-lg xl:text-xl">
                *通知信動態驗證碼有效時間至 <span className="text-bright-red">15:30</span>
                ，逾時未輸入，請點選重新寄送驗證碼。
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicCodeNotifier;
