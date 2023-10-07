const RegistrationCompleted = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2.5xl flex items-center justify-center min-[1500px]:gap-8.2 gap-6.5 bg-white mt-3 mb-4 h-[40vh] w-[95%]">
        <img
          className="min-[1500px]:h-auto min-[1500px]:w-auto h-12 w-12"
          src="/images/company-registration/completed.svg"
        />
        <p className="min-[1500px]:text-3.5xl text-2.5xl">已完成法人用戶會員註冊申請。(審核中)</p>
      </div>
      <div className="rounded-2.5xl items-center min-[1500px]py-8.2 min-[1500px]:px-19 py-6 px-15 bg-white w-[95%]">
        <p className="min-[1500px]:text-xl text-lg min-[1500px]:leading-8 leading-6">提醒您</p>
        <ol className="list-decimal ml-5 mt-2 min-[1500px]:text-xl text-lg min-[1500px]:leading-8 leading-6">
          <li>會員申請程序約七個工作天，我們將盡速為您處理。</li>
          <li>會員申請通過後，我們將以email通知，並寄發會員卡至會員登記地址。</li>
          <li>如有任何問題，歡迎您致電或來信客服</li>
          <li>客服 : 周一到週五(平日) 9:30~17:30</li>
          <li>電話 : 02-2221-7000</li>
          <li>信箱：service@sacurn.com</li>
        </ol>
      </div>
    </div>
  );
};

export default RegistrationCompleted;
