import { Box } from '@mui/material';

import { PermissionTableBodyType, PermissionTableHeadingType } from '@/type';
interface IProps {
  CardHeading: PermissionTableHeadingType[];
}
const PermissionAccordianTable = ({ CardHeading }: IProps) => {
  return (
    <Box
      className="bg-vista-white p-3 rounded-lg shadow"
      sx={{
        boxShadow: '2.67939px 3.57253px 12.50384px 0px rgba(0, 0, 0, 0.25), 0px 0px 12.50384px 0px rgba(0, 0, 0, 0.05)',

        backdropFilter: 'blur(2.232828378677368px)',
        '-webkit-backdrop-filter': 'blur(2.232828378677368px)',

        Opacity: '0.1'
      }}
    >
      <div className="px-4 ">
        <table className="grid grid-rows-1 ">
          <tr className="grid-cols-4 grid px-10">
            {CardHeading.map(({ img, title, subtitle, text }: PermissionTableHeadingType, index) => {
              return (
                <th key={index} className="flex flex-col gap-1 justify-center items-center py-3">
                  <img src={img} alt="" className="h-9 " />
                  <h1 className="text-sm font-semibold text-navy-blue max-[1400px]:text-xs">{title}</h1>
                  <td className="text-dark-grey flex flex-col items-center justify-center ">
                    <p className="font-normal text-xs max-[1400px]:text-[10px]">{subtitle}</p>
                    <p className="font-normal text-xs max-[1400px]:text-[10px]">{text}</p>
                  </td>
                </th>
              );
            })}
          </tr>

          {PERMISSION_TABLE_BODY.map(({ heading, data }, index) => {
            return (
              <>
                <tr
                  key={index}
                  className="flex justify-start items-start bg-geyser rounded-sm text-navy-blue text-xs font-semibold "
                >
                  <th className="pl-5">{heading}</th>
                </tr>
                {data?.map(({ text, administratorPermissions, advancedPermissions, basicPermisssions }, itemIndex) => {
                  return (
                    <tr key={itemIndex} className="grid-cols-4 grid px-10 text-xs font-normal text-dark-grey">
                      <td className="font-normal text-xs py-2 text-center  ">{text}</td>
                      <td className="font-normal text-xs flex justify-center items-center py-2">
                        {administratorPermissions && (
                          <img
                            src="/v2/permission-instruction-setting/TickButon.svg"
                            alt="administratorPermissions Image"
                          />
                        )}
                      </td>
                      <td className="font-normal text-xs  py-2 flex justify-center items-center">
                        {advancedPermissions && (
                          <img src="/v2/permission-instruction-setting/TickButon.svg" alt="advancedPermissions Image" />
                        )}
                      </td>
                      <td className="font-normal text-xs py-2 flex justify-center items-center">
                        {basicPermisssions && (
                          <img src="/v2/permission-instruction-setting/TickButon.svg" alt="basicPermisssions Image" />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </table>
      </div>
    </Box>
  );
};

export default PermissionAccordianTable;

const PERMISSION_TABLE_BODY: PermissionTableBodyType[] = [
  {
    heading: '交易',
    data: [
      {
        text: '購買結帳',
        administratorPermissions: true,
        advancedPermissions: false,
        basicPermisssions: false
      },
      {
        text: '取消訂單',
        administratorPermissions: true,
        advancedPermissions: false,
        basicPermisssions: false
      },
      {
        text: '販售商品',
        administratorPermissions: true,
        advancedPermissions: false,
        basicPermisssions: false
      },
      {
        text: '下架商品',
        administratorPermissions: true,
        advancedPermissions: false,
        basicPermisssions: false
      },
      {
        text: '預付儲值',
        administratorPermissions: true,
        advancedPermissions: false,
        basicPermisssions: false
      }
    ]
  },
  {
    heading: '管理',
    data: [
      {
        text: '會員管理',
        administratorPermissions: true,
        advancedPermissions: false,
        basicPermisssions: false
      },
      {
        text: '成員授權',
        administratorPermissions: true,
        advancedPermissions: false,
        basicPermisssions: false
      },
      {
        text: '庫存檢視',
        administratorPermissions: true,
        advancedPermissions: true,
        basicPermisssions: false
      },
      {
        text: '賣場分析',
        administratorPermissions: true,
        advancedPermissions: true,
        basicPermisssions: false
      },
      {
        text: '交易紀錄',
        administratorPermissions: true,
        advancedPermissions: true,
        basicPermisssions: false
      }
    ]
  },
  {
    heading: '操作',
    data: [
      {
        text: '放購物車',
        administratorPermissions: true,
        advancedPermissions: true,
        basicPermisssions: false
      },
      {
        text: '平台瀏覽',
        administratorPermissions: true,
        advancedPermissions: true,
        basicPermisssions: true
      },
      {
        text: '我的最愛',
        administratorPermissions: true,
        advancedPermissions: true,
        basicPermisssions: true
      }
    ]
  }
];
