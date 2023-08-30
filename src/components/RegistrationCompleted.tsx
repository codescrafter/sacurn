const RegistrationCompleted = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-2.5xl flex items-center justify-center min-[1500px]:gap-8.2 gap-6.5 bg-white mt-3 mb-4 h-[40vh] w-[95%]">
        <img
          className="min-[1500px]:h-auto min-[1500px]:w-auto h-12 w-12"
          src="/images/company-registration/completed.svg"
        />
        <p className="min-[1500px]:text-3.5xl text-2.5xl">已完成法人用戶會員註冊申請。</p>
      </div>
      <div className="rounded-2.5xl items-center min-[1500px]py-8.2 min-[1500px]:px-19 py-6 px-15 bg-white w-[95%]">
        <p className="min-[1500px]:text-xl text-lg min-[1500px]:leading-8 leading-6">提醒您</p>
        <ol className="list-decimal ml-5 mt-2 min-[1500px]:text-xl text-lg min-[1500px]:leading-8 leading-6">
          <li>會員申請程序約七個工作天，我們將盡速為您處理。</li>
          <li>申請通過後我們將以Email通知，並寄發會員卡至會員登記地址。</li>
          <li>如有任何問題請於於上班時間致電02-9876-5432，由專人為您處理。</li>
          <li>說明事項說明事項說明事項說明事項</li>
        </ol>
      </div>
    </div>
  );
};

export default RegistrationCompleted;
