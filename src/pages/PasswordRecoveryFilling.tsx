import classNames from 'classnames';
import React, { useState } from 'react';

import CustomButton from '@/components/CustomButton';
import { useForgotPasswordStore } from '@/store/forgotPassword';

const PasswordRecoveryFilling = () => {
  const [isChecked, setIsChecked] = useState(false);
  const isCheckedHandler = (value: boolean) => {
    setIsChecked(value);
  };

  const setIsTermsModalOpen = useForgotPasswordStore((state) => state.setIsTermsModalOpen);
  return (
    <div>
      <div className=" w-[90%] mx-auto flex flex-col gap-7  min-[1700px]:gap-10 py-5 ">
        <div className="w-full px-20 py-8 min-[1700px]:py-12 flex  justify-center gap-18 min-[1400px]:gap-44 rounded-2.5xl bg-white shadow-completed-box">
          {INPUT_DATA.map(({ label, placeholder }) => {
            return (
              <>
                <div className="flex gap-5 text-  sm lg:text-base xl:text-xl items-center">
                  <label htmlFor="" className="text-navy-blue font-bold">
                    <span className="text-bright-red"> *</span>
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    className=" text-grey border border-navy-blue py-2 pl-2 w-[355px]  lg:w-[290px] xl:w-[355px] rounded-md"
                  />
                </div>
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-8  ">
          <div className="flex gap-12 h-[400px] min-[1400px]:h-[430px] min-[1700px]:h-[480px] ">
            <div className="shadow-completed-box rounded-2.5xl bg-white py-13 px-7 w-[50%]  flex flex-col justify-between">
              <div className="">
                <p className="pb-20 text-justify text-dark-grey text-sm md:text-base xl:text-xl 2xl:text-3xl leading-[34px] ">
                  <span className="text-bright-red font-bold">*</span> 本人已於合理期間(至少五日)詳細審閱個人
                  <span className="text-bright-red font-bold relative inline-block border-b">「Sacurn服務條款」</span>
                  內容，並充分瞭解且確認同意遵守，並已詳閱Sacurn服務條款中以顯著字體表示之重要約定事項，有疑問之處業經本人向貴司提出詢問並業經貴司說明及解答，對重要約定事項已充分理解並同意其內容。
                </p>
              </div>
              <div className=" flex justify-center gap-10 font-bold ">
                <div className="w-max relative">
                  {isChecked && <img src="/images/password-reset/confirm.svg" className="absolute -top-1 right-6" />}
                  <CustomButton
                    variant="primary"
                    className={classNames(
                      'rounded-full px-10 lg:px-12 xl:px-17 h-12 text-sm lg:text-base xl:text-xl mt-3 border-2 bg-white !text-navy-blue ',
                      { 'border-bright-red': isChecked, 'border-navy-blue': !isChecked }
                    )}
                    type="button"
                    onClick={() => isCheckedHandler(true)}
                  >
                    我同意
                  </CustomButton>
                </div>

                <CustomButton
                  variant="primary"
                  className="rounded-full px-8 lg:px-10 xl:px-15 h-12 text-sm lg:text-base xl:text-xl mt-3 border-2 bg-white !text-navy-blue "
                  onClick={() => isCheckedHandler(false)}
                >
                  我不同意
                </CustomButton>
              </div>
            </div>
            <div className="py-11 text-xl flex flex-col gap-1 w-[50%] text-dark-grey">
              <h2 className="">提醒您</h2>
              <ul className="list-disc  px-9">
                <li>若您忘記密碼，需請您填寫您的帳號及註冊信箱。</li>
                <li>完成身分驗證後，平台將寄信至您的信箱，請您點擊信件中的重設密碼連結後，重新設定密碼。</li>
                <li>密碼重設連結僅15分鐘內有效，請您成功送出申請後，儘速完成重設密碼。</li>
              </ul>
            </div>
          </div>

          <div className=" flex justify-center gap-10 font-bold ">
            <CustomButton
              variant="primary"
              className="rounded-xl px-17 h-12 text-xl mt-3 border-2 bg-white !text-navy-blue "
            >
              取消申請
            </CustomButton>
            <CustomButton
              variant="primary"
              className="rounded-xl px-18 h-13 text-xl mt-3 border-2 "
              onClick={() => setIsTermsModalOpen(true)}
            >
              下一步
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecoveryFilling;
const INPUT_DATA = [
  { label: '帳號', placeholder: '請輸入帳號' },
  { label: 'email', placeholder: '請輸入完整email' }
];
