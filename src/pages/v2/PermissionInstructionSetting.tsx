import React from 'react';

const PermissionInstructionSetting = () => {
  return (
    <div className="bg-vista-white p-3 rounded-lg shadow">
      <div className="">
        <div className="border px-4 ">
          <div className="border grid grid-rows-1">
            <div className="grid-cols-4 grid">
              <div className="border">1</div>
              {PERMISSION_CARD_INSTRUCTION_DATA.map(({ img, title, subtitle, text }) => {
                return (
                  <div className="border flex flex-col gap-1 justify-center items-center py-3">
                    <img src={img} alt="" className="h-9 " />
                    <h1 className="text-sm font-semibold text-deep-sea-blue">{title}</h1>
                    <div className="text-nobel flex flex-col items-center justify-center">
                      <p className="font-normal text-xs ">{subtitle}</p>
                      <p className="font-normal text-xs">{text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionInstructionSetting;
const PERMISSION_CARD_INSTRUCTION_DATA = [
  {
    img: '/v2/permission-instruction-setting/Group.svg',
    title: '管理員',
    subtitle: ' .',
    text: '最多授權2名'
  },
  {
    img: '/v2/permission-instruction-setting/Group (1).svg',
    title: '進階操作人員',
    subtitle: '.',
    text: '依會員卡別授權人數'
  },
  {
    img: '/v2/permission-instruction-setting/Group (2).svg',
    title: '基礎操作人員',
    subtitle: '*無後台操作權',
    text: '依會員卡別授權人數'
  }
];
