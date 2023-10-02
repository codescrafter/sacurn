import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { PRECAUTIONS } from '@/util/constants';

import CustomButton from './CustomButton';

const IdentityVerification = () => {
  const [btnText, setBtnText] = useState('寄送驗證碼');
  const [isClicked, setIsClicked] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (isClicked) {
      if (!isOpened) {
        setIsOpened(true);
      }
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
              <span className="text-bright-red">example@gmail.com</span>
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
              {PRECAUTIONS.map((precaution, index) => {
                return <li key={index}>{precaution}</li>;
              })}
            </ul>
          </div>
        </div>
      </VerificationCard>
      {isOpened && (
        <div className="flex flex-col gap-4">
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

          <div className="w-max flex mx-auto mb-8 mt-6 gap-7">
            <CustomButton
              className="rounded-xl min-[1300px]:text-xl text-lg font-bold border-2 min-[1300px]:w-[197px] w-[175px] h-[40px]"
              children="取消申請"
              variant="secondary"
            />
            <CustomButton
              className="rounded-xl min-[1300px]:text-xl text-lg font-bold min-[1300px]:w-[197px] w-[175px] h-[40px]"
              children="下一步"
              variant="primary"
              type="submit"
            />
          </div>
        </div>
      )}
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
