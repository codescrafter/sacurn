import SearchIcon from '@mui/icons-material/Search';

import { InstructionCardTypes } from '@/type';

import PlatformCard from './PlatformCard';

const PlatformInstructions = () => {
  return (
    <div className="w-[90%] rounded-lg bg-trans-white mt-4 p-2 pt-4 ml-15 ">
      {/* min-[1400px]:mt[600px] min-[1700px]:!h-[800px]  */}
      <div className="flex justify-end pr-4">
        <div className="w-[40%] border text-grey-ghoose text-xs rounded-full bg-white pl-4 flex justify-between p-2">
          <input type="text" placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字" className=" w-[60%] outline-none" />
          <div className="border-l-2 w-[20%] flex justify-end ">
            <SearchIcon className="text-[26px]" />
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll yellowScroll border h-[500px]  [@media(min-width:1700px)]:h-[800px]">
        {/* lg:h-[540px] min-[1400px]: 2xl:h-[700px] */}
        {/* min-[1700px]:h-[712px]  */}
        <div className="w-[100%] p-5">
          {/* min-[1400px]:h-[884px] min-[1500]:h-[970px] */}
          {INSTRUCTION_CARD_DATA.map(({ title, name, description, subTitle }: InstructionCardTypes) => {
            return <PlatformCard title={title} name={name} description={description} subTitle={subTitle} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformInstructions;

const INSTRUCTION_CARD_DATA: InstructionCardTypes[] = [
  {
    title: '平台使用說明',
    name: ' 如何查詢舊訂單？',
    description:
      '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。',
    subTitle: '如何取消訂單？'
  },
  {
    title: '權限設定說明',
    name: ' 如何更改權限？',
    description:
      '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。',
    subTitle: '權限的區分？'
  },
  {
    title: '帳號常見問題',
    name: ' 如何修改會員資料？',
    description:
      '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。',
    subTitle: '忘記密碼如何重新設定？'
  }
];
