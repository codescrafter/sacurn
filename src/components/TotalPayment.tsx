import CustomButton from './CustomButton';

const TotalPayment = () => {
  return (
    <div className="px-3">
      <p className="text-navy-blue text-xl font-bold text-center">付款資訊</p>
      <div className="pt-4">
        <div className="border rounded-[10px] border-silverstone p-4 flex justify-between mb-4">
          <p className="text-navy-blue text-lg font-bold">付款總額：</p>
          <p className="text-bright-red text-lg font-bold">$13,119,000</p>
        </div>
        <div className="border rounded-[10px] border-silverstone p-4 flex justify-between mb-4">
          <p className="text-navy-blue text-lg font-bold">付款期限：</p>
          <div className="text-end">
            <p className="text-bright-red text-lg font-bold">30分鐘00秒</p>
            <p className="text-[#525050] text-sm font-bold">在2023年03月25日 12:07到期</p>
          </div>
        </div>
        <div className="border rounded-[10px] border-silverstone p-4 flex justify-between mb-4">
          <p className="text-navy-blue text-lg font-bold">付款方式：</p>
          <div className="flex gap-2 items-center">
            <CustomButton variant="outline" className="rounded px-5 py-1">
              匯款/轉帳
            </CustomButton>
            <span>或</span>
            <CustomButton variant="outline" className="rounded px-5 py-1">
              信託帳戶
            </CustomButton>
          </div>
        </div>
        <div className="border rounded-[10px] border-silverstone p-4 mb-4">
          <div>
            <p className="text-navy-blue text-lg font-bold mb-1">銀行名稱：</p>
            <div className="text-black text-lg font-bold flex gap-4 items-center">
              <p>OOOOOOOO銀行</p>
              <p>OO分行</p>
            </div>
          </div>
          <div className="h-[1px] w-full bg-light-grey my-5" />
          <div className="flex justify-between gap-4">
            <div>
              <p className="text-navy-blue text-lg font-bold mb-1">銀行代碼：</p>
              <p className="text-bright-red text-lg font-bold">000</p>
            </div>
            <div>
              <p className="text-navy-blue text-lg font-bold mb-1">帳戶號碼：</p>
              <p className="text-bright-red text-lg font-bold">0000 0000 0000 0000</p>
            </div>
            <div className="flex items-end">
              <p className="text-[#61A1CB] text-lg font-bold">複製</p>
            </div>
          </div>
        </div>
        <ol className="list-decimal px-5">
          {DETAILS.map((detail) => (
            <li key={detail.id} className="text-dark-grey text-justify font-bold mb-2">
              {detail.content}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default TotalPayment;

const DETAILS = [
  {
    id: 1,
    content: '請使用網路銀行或實體ATM將金額轉入以上帳戶。'
  },
  {
    id: 2,
    content:
      '轉帳完成後30分鐘可至訂單頁面查詢付款狀態，並請保留轉帳收據直到帳款入帳，若轉帳後48小時仍未入帳，請再與我們聯繫查詢。'
  },
  {
    id: 3,
    content:
      '安全提醒：若第三方對您提出以下要求，請勿直接遵照他方指示，如：第三方要求您轉帳至私人帳號、在ATM解除分期、描Qr Code進入非蝦皮官方網站或提早要求您按下『完成訂單』等。'
  }
];
