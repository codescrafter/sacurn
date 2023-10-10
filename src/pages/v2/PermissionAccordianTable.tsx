import { PermissionTableBodyType, PermissionTableHeadingType } from '@/type';
interface IProps {
  CardHeading: PermissionTableHeadingType[];
}
const PermissionAccordianTable = ({ CardHeading }: IProps) => {
  return (
    <div className="bg-vista-white p-3 rounded-lg shadow">
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
                {data?.map(({ text, box1, box2, box3 }, itemIndex) => {
                  return (
                    <tr key={itemIndex} className="grid-cols-4 grid px-10 text-xs font-normal text-dark-grey">
                      <td className="font-normal text-xs py-2 text-center  ">{text}</td>
                      <td className="font-normal text-xs flex justify-center items-center py-2">
                        {box1 && <img src="/v2/permission-instruction-setting/TickButon.svg" alt="Box1 Image" />}
                      </td>
                      <td className="font-normal text-xs  py-2 flex justify-center items-center">
                        {box2 && <img src="/v2/permission-instruction-setting/TickButon.svg" alt="Box2 Image" />}
                      </td>
                      <td className="font-normal text-xs py-2 flex justify-center items-center">
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

export default PermissionAccordianTable;

const PERMISSION_TABLE_BODY: PermissionTableBodyType[] = [
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
