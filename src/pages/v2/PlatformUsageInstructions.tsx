import SearchIcon from '@mui/icons-material/Search';

import PlatformInstructionCard from './PlatformInstructionCard';
const PlatformUsageInstructions = () => {
  return (
    <div className="w-[90%] h-[560px] rounded-lg bg-trans-white mt-4 p-2 pt-4 ml-15 min-[1400px]:mt-[40px]  ">
      <div className="flex justify-end pr-4">
        <div className="w-[40%] border text-grey-ghoose text-xs rounded-full bg-white pl-4 flex justify-between p-2">
          <input type="text" placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字" className=" w-[60%] outline-none" />
          <div className="border-l-2 w-[20%] flex justify-end ">
            <SearchIcon className="text-[26px]" />
          </div>
        </div>
      </div>

      <div className="h-[500px] overflow-y-scroll yellowScroll min-[1700px]:h-[780px] border">
        <div className="w-[100%] p-5 min-[1400px]:h-[884px] min-[1500]:h-[970px]  ">
          {INSTRUCTIONCARD_DATA.map((element) => {
            return (
              <PlatformInstructionCard
                Card_heading={element.Card_heading}
                Card_name={element.Card_name}
                Card_description={element.Card_description}
                Card_heading2={element.Card_heading2}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformUsageInstructions;

const INSTRUCTIONCARD_DATA = [
  {
    Card_heading: '平台使用說明',
    Card_name: ' 如何查詢舊訂單？',
    Card_description:
      '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。',
    Card_heading2: '如何取消訂單？'
  },
  {
    Card_heading: '權限設定說明',
    Card_name: ' 如何更改權限？',
    Card_description:
      '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。',
    Card_heading2: '權限的區分？'
  },
  {
    Card_heading: '帳號常見問題',
    Card_name: ' 如何修改會員資料？',
    Card_description:
      '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。',
    Card_heading2: '忘記密碼如何重新設定？'
  }
];
