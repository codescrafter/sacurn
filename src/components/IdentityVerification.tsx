import classNames from 'classnames';
import { useEffect, useState } from 'react';

import CustomButton from './CustomButton';

const IdentityVerification = () => {
  const [btnText, setBtnText] = useState('寄送驗證碼');
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (isClicked) {
      let seconds: number = 0;
      const intervalId = setInterval(() => {
        seconds += 1;
        setBtnText(`${120 - seconds}秒後重寄`);
        if (seconds == 120) {
          clearInterval(intervalId);
          setBtnText('寄送驗證碼');
          isClickedHandler();
        }
      }, 1000);
    }
  }, [isClicked]);
  const isClickedHandler = () => {
    setIsClicked((state) => !state);
  };
  return (
    <div className="w-[90%] mx-auto flex flex-col gap-4">
      <VerificationCard>
        <div>
          <div className="flex justify-between items-center mt-10">
            <div className="text-navy-blue text-xl">
              <p>系統將寄送驗證通知信至您留存於本行的電子郵件信箱</p>
              <span className="text-bright-red">{'example@gmail.com'}</span>
              <span>請確認電子信箱是否正確</span>
            </div>
            <CustomButton
              children={btnText}
              variant="primary"
              className={classNames('rounded-xl w-[197px] h-14 text-xl font-bold', {
                'disabled:border disabled:border-dark-grey disabled:text-dark-grey cursor-not-allowed': isClicked
              })}
              type="button"
              onClick={isClickedHandler}
              isDisabled={isClicked}
            />
          </div>
          <div className="mt-10">
            <p className="text-xl">注意事項</p>
            <ul className="text-xl list-disc mt-1 ml-8">
              {precautions.map((precaution) => {
                return <li>{precaution}</li>;
              })}
            </ul>
          </div>
        </div>
      </VerificationCard>
      {
        <VerificationCard>
          <div className="mt-10">
            <div className="flex gap-4.5 items-center">
              <label className="min-[1300px]:text-xl text-lg text-navy-blue font-bold">驗證碼</label>
              <input
                className="rounded-md border border-navy-blue min-[1600px]:w-[350px] min-[1400px]:w-[320px] min-[1200px]:w-[280px] min-[1300px]:text-xl text-lg min-[1300px]:px-3 px-1.5 min-[1300px]:py-2.5 py-1 "
                placeholder="請輸入驗證碼6碼"
              />
            </div>
            <div className="mt-10">
              <p className="text-xl">
                <span className="font-bold">*</span>通知信動態驗證碼有效時間至
                <span className="text-bright-red">15:30，</span>
                逾時未輸入，請點選重新寄送驗證碼。
              </p>
            </div>
          </div>
        </VerificationCard>
      }
    </div>
  );
};

export default IdentityVerification;

interface VerificationCardProps {
  children: JSX.Element;
}

const VerificationCard = ({ children }: VerificationCardProps) => {
  return (
    <div className="bg-white rounded-2.5xl shadow-completed-box flex flex-col px-18.7 py-4">
      <div className="flex w-full gap-6 justify-between mt-4">
        <h1 className="text-3.5xl font-bold text-navy-blue">寄送通知信動態驗證碼</h1>
        <div className="h-0.3 w-[calc(100%-20px)] flex-1 bg-navy-blue self-center mt-2.7" />
      </div>
      {children}
    </div>
  );
};

const precautions = [
  '若您的電子信箱已變更，請洽平台客服專線(02)2221-7000，或email至客服信箱 service@sacurn.com 。',
  '重新產生通知信驗證碼每日上限 5 次，為確保您的交易安全，請立即至您的信箱收取通知信，並於10分鐘內完成動態驗證碼驗證，若未完成申請步驟，郵件內的動態驗證碼將會失效，請再重新申請',
  '如未收到驗證信件，請確認您留存的電子郵件地址是否正確及電子郵件信箱是否正常使用，或是被您的郵件伺服器判斷為垃圾郵件。'
];
