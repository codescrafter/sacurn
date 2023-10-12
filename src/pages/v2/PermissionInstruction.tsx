import SearchIcon from '@mui/icons-material/Search';
import React from 'react';

import PermissionAccordian from './PermissionAccordian';
const PermissionInstruction = () => {
  return (
    <div className="w-[88%] rounded-lg bg-trans-white mt-4 p-2 pt-4 ml-15 md:w-[80%] lg:w-[86%] [@media(min-width:1400px)]:w-[90%]">
      <div className="flex justify-end pr-4">
        <div className="w-[45%] border text-grey-ghoose text-xs rounded-full bg-white pl-4 flex justify-between p-2">
          <input type="text" placeholder="輸入想要搜尋的碳權名稱,代號或是關鍵字" className=" w-[80%] outline-none" />
          <div className="border-l-2 w-[20%] flex justify-end ">
            <SearchIcon className="text-[26px]" />
          </div>
        </div>
      </div>

      <div className=" mt-3 overflow-y-scroll yellowScroll h-[500px] [@media(min-width:1400px)]:h-[690px]  [@media(min-width:1700px)]:h-[710px]">
        <div className="w-full p-5">
          <PermissionAccordian title="權限設定說明" subTitle="權限的區分？" />
        </div>
      </div>
    </div>
  );
};

export default PermissionInstruction;
