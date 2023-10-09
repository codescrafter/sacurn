import SearchIcon from '@mui/icons-material/Search';

import { InstructionCardTypes } from '@/type';

import PlatformCard from './PlatformCard';

const PlatformInstructions = () => {
  return (
    <div className="w-[88%] rounded-lg bg-trans-white mt-4 p-2 pt-4 ml-15 md:w-[80%] lg:w-[86%] [@media(min-width:1400px)]:w-[90%]">
      <div className="flex justify-end pr-4">
        <div className="w-[40%] border text-grey-ghoose text-xs rounded-full bg-white pl-4 flex justify-between p-2">
          <input type="text" placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字" className=" w-[60%] outline-none" />
          <div className="border-l-2 w-[20%] flex justify-end ">
            <SearchIcon className="text-[26px]" />
          </div>
        </div>
      </div>

      <div className="overflow-y-scroll yellowScroll h-[507px] [@media(min-width:1400px)]:h-[690px]  [@media(min-width:1700px)]:h-[710px]">
        <div className="w-full p-5">
          {INSTRUCTION_CARD_DATA.map(({ title, name, description, subTitle }: InstructionCardTypes, index) => {
            return (
              <PlatformCard
                key={index}
                currentIndex={index}
                title={title}
                name={name}
                description={description}
                subTitle={subTitle}
              />
            );
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
