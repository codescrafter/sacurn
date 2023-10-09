import React from 'react';

import { PermissionCardInstructionDataType } from '@/type';

const PermissionInstructionSetting = () => {
  return (
    <div className="bg-vista-white p-3 rounded-lg shadow">
      <div className="px-4 ">
        <table className="grid grid-rows-1 ">
          <tr className="grid-cols-4 grid px-10">
            {PERMISSION_CARD_INSTRUCTION_DATA.map(
              ({ img, title, subtitle, text }: PermissionCardInstructionDataType) => {
                return (
                  <th className="flex flex-col gap-1 justify-center items-center py-3">
                    <img src={img} alt="" className="h-9 " />
                    <h1 className="text-sm font-semibold text-deep-sea-blue">{title}</h1>
                    <td className="text-nobel flex flex-col items-center justify-center">
                      <p className="font-normal text-xs ">{subtitle}</p>
                      <p className="font-normal text-xs">{text}</p>
                    </td>
                  </th>
                );
              }
            )}
          </tr>

          {PERMISSION_TABLE_DATA.map(({ heading, data }) => {
            return (
              <>
                <tr className="flex justify-start items-start bg-geyser rounded-sm text-deep-sea-blue text-xs font-semibold ">
                  <th className="pl-5">{heading}</th>
                </tr>
                {data?.map(({ text, box1, box2, box3 }) => {
                  return (
                    <tr className="grid-cols-4 grid px-10 text-center text-xs font-normal text-nobel">
                      <td className="font-normal text-xs py-2 flex justify-center items-cente ">{text}</td>
                      <td className="font-normal text-xs flex justify-center items-center py-2">
                        {box1 && <img src="/v2/permission-instruction-setting/TickButon.svg" alt="Box1 Image" />}
                      </td>
                      <td className="font-normal text-xs  py-2 flex justify-center items-cente">
                        {box2 && <img src="/v2/permission-instruction-setting/TickButon.svg" alt="Box2 Image" />}
                      </td>
                      <td className="font-normal text-xs py-2 flex justify-center items-cente">
                        {box3 && <img src="/v2/permission-instruction-setting/TickButon.svg" alt="Box3 Image" />}
                      </td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default PermissionInstructionSetting;
const PERMISSION_CARD_INSTRUCTION_DATA: PermissionCardInstructionDataType[] = [
  {
    img: '',
    title: '',
    subtitle: ' ',
    text: ''
  },
  {
    img: '/v2/permission-instruction-setting/Group.svg',
    title: '管理員',
    subtitle: ' ',
    text: '最多授權2名'
  },
  {
    img: '/v2/permission-instruction-setting/Group (1).svg',
    title: '進階操作人員',
    subtitle: '',
    text: '依會員卡別授權人數'
  },
  {
    img: '/v2/permission-instruction-setting/Group (2).svg',
    title: '基礎操作人員',
    subtitle: '*無後台操作權',
    text: '依會員卡別授權人數'
  }
];
const PERMISSION_TABLE_DATA = [
  {
    heading: '交易',
    data: [
      {
        text: '購買結帳',
        box1: true,
        box2: false,
        box3: false
      },
      {
        text: '取消訂單',
        box1: true,
        box2: false,
        box3: false
      },
      {
        text: '販售商品',
        box1: true,
        box2: false,
        box3: false
      },
      {
        text: '下架商品',
        box1: true,
        box2: false,
        box3: false
      },
      {
        text: '預付儲值',
        box1: true,
        box2: false,
        box3: false
      }
    ]
  },
  {
    heading: '管理',
    data: [
      {
        text: '會員管理',
        box1: true,
        box2: false,
        box3: false
      },
      {
        text: '成員授權',
        box1: true,
        box2: false,
        box3: false
      },
      {
        text: '庫存檢視',
        box1: true,
        box2: true,
        box3: false
      },
      {
        text: '賣場分析',
        box1: true,
        box2: true,
        box3: false
      },
      {
        text: '交易紀錄',
        box1: true,
        box2: true,
        box3: false
      }
    ]
  },
  {
    heading: '操作',
    data: [
      {
        text: '放購物車',
        box1: true,
        box2: true,
        box3: false
      },
      {
        text: '平台瀏覽',
        box1: true,
        box2: true,
        box3: true
      },
      {
        text: '我的最愛',
        box1: true,
        box2: true,
        box3: true
      }
    ]
  }
];
