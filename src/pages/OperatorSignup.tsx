import { useState } from 'react';

import InputField from '@/components/InputField';

const OperatorSignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [username, setUsername] = useState('馬斯克');
  const [password, setPassword] = useState('$1234567abc');
  const [confirmPassword, setConfirmPassword] = useState('**********');

  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col items-center justify-center min-[1550px]:ml-23.5 min-[1200px]:ml-19 ml-14">
        <img
          className="min-[1550px]:h-[485px] min-[1550px]:w-[515px] min-[1200px]h-[420px]  h-[320px] w-[390px]"
          src={'/images/operator-signup/background.png'}
        />
        <p className="text-silverstone min-[1550px]:text-xl min-[1200px]:text-lg text-base text-center font-bold min-[1500px]:w-[70%] w-[80%]">
          Adventure Comes with you! Join With Us!
        </p>
      </div>
      <div className="flex flex-col w-[70vw] min-[1550px]:px-22.5 min-[1200px]:px-18 px-13 min-[1550px]:pt-20 pt-14">
        <h1 className="min-[1550px]:text-5.2xl min-[1200px]:text-4xl text-3xl text-center text-navy-blue font-semibold  min-[1550px]:mb-8.2 min-[1200px]:mb-6 mb-5">
          Account sign up
        </h1>
        <Heading heading="公司名稱" />
        <InputField
          placeholder="艾克斯厚定股份有限公司"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full min-[1550px]:mb-10.7 min-[1200px]:mb-8 mb-6"
        />
        <div className="flex flex-row justify-between w-full min-[1550px]:mb-10.7 min-[1200px]:mb-8 mb-6">
          <div className="flex flex-col self-start w-[45%]">
            <Heading heading="帳號/email" />
            <InputField
              placeholder="maskholding＠gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex flex-col self-end w-[45%]">
            <Heading heading="統編" />
            <InputField
              placeholder="12345678"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <Heading heading="使用者姓名" />
        <InputField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full min-[1550px]:mb-10.7 min-[1200px]:mb-8 mb-6"
        />
        <div className="flex flex-row justify-between w-full min-[1550px]:mb-7.2 min-[1200px]:mb-6 mb-5">
          <div className="flex flex-col self-start w-[45%]">
            <Heading heading="密碼" />
            <InputField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex flex-col self-end w-[45%]">
            <Heading heading="再次輸入密碼" />
            <InputField
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <p className=" text-black min-[1550px]:text-base min-[1200px]:text-sm text-[12px] font-semibold ml-5">
          點擊「註冊」即表示你同意我們的《服務條款》、《隱私政策》和《Cookie政策》。
        </p>
        <p className="text-black min-[1550px]:text-base min-[1200px]:text-sm text-[12px] font-semibold ml-5">
          你可能會收到我們的簡訊通知，而且可以隨時選擇停止接收。
        </p>
        <button className="rounded-full bg-operator-signup shadow-operator-signup-button min-[1550px]:text-xl min-[1200px]:text-base text-base font-bold w-full min-[1550px]:h-13.2 h-10 mt-3.2">
          註冊
        </button>
      </div>
    </div>
  );
};

export default OperatorSignUp;

const Heading = ({ heading }: { heading: string }) => {
  return (
    <label className="text-navy-blue min-[1550px]:text-xl min-[1200px]:text-lg text-base font-semibold self-start ml-8 mb-2">
      {heading}
    </label>
  );
};
