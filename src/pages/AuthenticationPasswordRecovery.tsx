import CustomButton from '@/components/CustomButton';

const AuthenticationPasswordRecovery = () => {
  return (
    <div className="w-[90%]  mx-auto flex flex-col gap-5 py-5  ">
      <div className="shadow-completed-box bg-white rounded-[20px] py-28 px-10 flex gap-5 justify-center items-center min-[1700px]:h-[450px]">
        <div className="flex gap-7 items-center ">
          <div className="rounded-full h-13 w-13 border-4 border-pale-yellow flex items-center justify-center">
            <img src="/v2/icon/tick.svg" alt="" className="h-8 w-8 " />
          </div>
          <div className="text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl text-dark-grey">
            <p>申請成功</p>
            <p> 請立即至您的註冊信箱點擊重設密碼連結</p>
          </div>
        </div>
      </div>
      <div className="shadow-completed-box bg-white rounded-[20px] pt-10 flex gap-5 justify-start items-start px-16 pb-24 2xl:pb-32 ">
        <div className="flex flex-col gap-5 text-sm md:text-base lg:text-lg 2xl:text-xl 3xl:text-2xl">
          <h2 className="">提醒您</h2>
          <ul className="list-disc pl-9">
            <li>平台已寄信至您的信箱，請您點擊信件中的重設密碼連結後，重新設定密碼。</li>
            <li>密碼重設連結僅15分鐘有效，請您儘速重設密碼，逾時需重新申請。</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CustomButton variant="primary" className="rounded-xl px-17 py-0 h-12 text-base lg:text-xl font-bold">
          回到首頁
        </CustomButton>
      </div>
    </div>
  );
};

export default AuthenticationPasswordRecovery;
