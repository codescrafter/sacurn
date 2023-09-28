import CustomButton from './CustomButton';

const PasswordResetApplicationCompleted = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2.5xl flex items-center justify-center min-[1500px]:gap-8.2 gap-6.5 bg-white mt-3 mb-4 h-[35vh] w-[90%]">
        <img
          className="min-[1500px]:h-auto min-[1500px]:w-auto h-12 w-12"
          src="/images/company-registration/completed.svg"
        />
        <div>
          <p className="min-[1500px]:text-3.5xl text-2.5xl">申請成功</p>
          <p className="min-[1500px]:text-3.5xl text-2.5xl">請立即至您的註冊信箱點擊重設密碼連結</p>
        </div>
      </div>
      <div className="rounded-2.5xl items-center min-[1500px]py-8.2 min-[1500px]:px-19 py-6 px-15 bg-white h-[25vh] w-[90%]">
        <p className="min-[1500px]:text-xl text-lg min-[1500px]:leading-8 leading-6">提醒您</p>
        <ul className="ml-8 mt-2 min-[1500px]:text-xl text-lg min-[1500px]:leading-8 leading-6 list-disc">
          <li>平台已寄信至您的信箱，請您點擊信件中的重設密碼連結後，重新設定密碼。</li>
          <li>密碼重設連結僅15分鐘有效，請您儘速重設密碼，逾時需重新申請。</li>
        </ul>
      </div>
      <CustomButton
        className="rounded-xl min-[1300px]:text-xl text-lg font-bold min-[1300px]:w-[197px] w-[175px] h-[40px] mt-7.5 mb-5"
        children="回到首頁"
        variant="primary"
        type="submit"
      />
    </div>
  );
};

export default PasswordResetApplicationCompleted;
