import Image from "next/image";

function OperatorSignUp() {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col items-center justify-center ml-23.5">
        <Image
          src={require("./../public/images/operator-signup/background.png")}
        />
        <p className="text-silverstone text-xl font-bold">
          Adventure Comes with you! Join With Us!
        </p>
      </div>
      <div className="flex flex-col w-[70vw] px-22.5 pt-20">
        <h1 className="text-5.2xl text-center text-navy-blue font-semibold  mb-8.2">
          Account sign up
        </h1>
        <Heading heading={"公司名稱"} />
        <input id="co-name" type="text" className={`${Style} w-full mb-10.7`} />
        <div className="flex flex-row justify-between w-full mb-10.7">
          <div className="flex flex-col self-start w-[45%]">
            <Heading heading={"帳號/email"} />
            <input type="text" className={`${Style} w-full`} />
          </div>
          <div className="flex flex-col self-end w-[45%]">
            <Heading heading={"統編"} />
            <input type="text" className={`${Style} w-full`} />
          </div>
        </div>
        <Heading heading={"使用者姓名"} />
        <input type="text" className={`${Style} w-full mb-10.7`} />
        <div className="flex flex-row justify-between w-full mb-7.2">
          <div className="flex flex-col self-start w-[45%]">
            <Heading heading={"密碼"} />
            <input type="text" className={`${Style} w-full`} />
          </div>
          <div className="flex flex-col self-end w-[45%]">
            <Heading heading={"再次輸入密碼"} />
            <input type="text" className={`${Style} w-full`} />
          </div>
        </div>
        <p className=" text-black font-semibold ml-5">
          點擊「註冊」即表示你同意我們的《服務條款》、《隱私政策》和《Cookie政策》。
        </p>
        <p className="text-black font-semibold ml-5">
          你可能會收到我們的簡訊通知，而且可以隨時選擇停止接收。
        </p>
        <button className="rounded-full bg-operator-signup shadow-operator-signup-button text-xl font-bold w-full h-13.2 mt-3.2">
          註冊
        </button>
      </div>
    </div>
  );
}

export default OperatorSignUp;

const Heading = ({ heading }) => {
  return (
    <label className="text-navy-blue text-xl font-semibold self-start ml-8 mb-2">
      {heading}
    </label>
  );
};

const Style =
  "rounded-full shadow-operator-signup-input bg-white h-17.5 px-5 py-5.7 text-black text-xl outline-none";
