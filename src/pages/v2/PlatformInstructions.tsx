import SearchIcon from '@mui/icons-material/Search';

import { PlatformAccordianTypes } from '@/type';

import PlatformAccordian from './PlatformAccordian';

const PlatformInstructions = () => {
  return (
    <div className="w-[88%] rounded-lg bg-trans-white mt-4 p-2 pt-4 ml-15 md:w-[80%] lg:w-[86%] [@media(min-width:1400px)]:w-[90%]">
      <div className="flex justify-end pr-4">
        <div className="w-[40%] border text-grey-ghoose text-xs rounded-full bg-white pl-4 flex justify-between p-2">
          <input
            type="text"
            placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字"
            className=" w-[60%] outline-none text-[12px] font-bold"
          />
          <div className="border-l-2 w-[20%] flex justify-end ">
            <SearchIcon className="text-[26px]" />
          </div>
        </div>
      </div>

      <div className=" mt-3 overflow-y-scroll yellowScroll h-[500px] [@media(min-width:1400px)]:h-[690px]  [@media(min-width:1700px)]:h-[710px]">
        <div className="w-full p-5">
          {INSTRUCTION_CARD_DATA.map(({ id, title, items }: PlatformAccordianTypes, index) => {
            return <PlatformAccordian key={index} currentIndex={id} title={title} items={items} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatformInstructions;

export const INSTRUCTION_CARD_DATA: PlatformAccordianTypes[] = [
  {
    id: 1,
    title: '平台使用說明',
    items: [
      {
        name: '如何查詢舊訂單？',
        description:
          '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。'
      },
      {
        name: '如何取消訂單？',
        description:
          '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。'
      }
    ]
  },
  {
    id: 2,
    title: '權限設定說明',
    items: [
      {
        name: '如何更改權限？',
        description:
          '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。'
      },
      {
        name: '權限的區分？',
        description:
          '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。'
      }
    ]
  },
  {
    id: 3,
    title: '帳號常見問題',
    items: [
      {
        name: '如何修改會員資料？',
        description:
          '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。'
      },
      {
        name: '忘記密碼如何重新設定？',
        description:
          '如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。如您欲查詢2020/11/29前的訂單紀錄，請點擊menu的 My Stock，可查詢到以往的訂單資訊。'
      }
    ]
  }
];
