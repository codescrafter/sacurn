import classNames from 'classnames';

import {
  MembershipDataCardContent,
  MembershipDataItems,
  MembershipDataMainContent,
  MembershipDataSubContent,
  MembershipDataTickContent
} from '@/type';
import { PRIMARY, QUATERNARY, SECONDARY, TERTIARY } from '@/util/constants';

const MemberCardCompareInfo = () => {
  return (
    <div className="flex mt-16 sm:mr-3 xl:mr-12 ml-3 items-center bg-offwhite backdrop:blur-0 text-black rounded-2.5xl">
      <div className="w-full sm:mx-3 xl:mx-5 sm:mb-3 xl:mb-6 sm:mt-4 xl:mt-7 overscroll-x-none overflow-y-scroll yellowScroll h-[570px]">
        <div className="flex-col gap-4 items-center bg-offwhite backdrop:blur-0 mb-2 w-[98%]">
          {MEMBERSHIP_DATA.map((data) => (
            <div key={data.id} className="flex flex-col w-full">
              <div className="flex w-full justify-between">
                {!data.variation && (
                  <h1 className="flex border border-mildGrey w-1/5 justify-center text-center items-center p-3">
                    {data.title}
                  </h1>
                )}
                {data.variation == 'duo' && (
                  <div className="flex border border-mildGrey w-1/5 justify-center text-center items-center p-2">
                    <div className="relative whitespace-pre-wrap">
                      {data.title}
                      <span className="absolute text-xs -right-4 -top-3 whitespace-pre-wrap">{data.subtitle1}</span>
                      <span className="absolute text-xs -right-4 -bottom-3 whitespace-pre-wrap">{data.subtitle2}</span>
                    </div>
                  </div>
                )}
                {data.variation == 'mono' && (
                  <h1 className="flex border border-mildGrey w-1/5 justify-center text-center items-center p-3">
                    {data.title}
                    <pre className="-top-1.5 -right-1.5 text-xs whitespace-pre-wrap">{data.subtitle3}</pre>
                  </h1>
                )}
                {data.variant === PRIMARY && (
                  <div className="flex flex-1 border border-mildGrey">
                    {data.cardContent?.map(
                      ({ id, source, className, detail, sourceColor }: MembershipDataCardContent) => (
                        <div
                          key={id}
                          className={classNames(
                            'relative p-3 flex flex-col flex-1 justify-center items-center',
                            className
                          )}
                        >
                          <img
                            className="absolute mr-10 w-2 left-0 md:-left-[0.40px] md:w-2.5 lg:-left-0.5 lg:w-[14px] xl:-left-[0.20px] xl:w-4"
                            src={`/v2/cards/${sourceColor}-card-corner.svg`}
                            alt="CardCorner"
                          />
                          <img
                            className="flex flex-1 px-3 pt-3"
                            src={`/v2/cards/${source}.svg`}
                            width={193}
                            height={122}
                            alt="Card"
                          />
                          <span className="flex uppercase text-navy-blue text-sm lg:text-base font-bold justify-center items-center">
                            {detail}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                )}
                {data.variant === SECONDARY && (
                  <div className="flex flex-col flex-1 w-full justify-between">
                    <div className="flex flex-1 justify-center items-center border border-mildGrey text-sm lg:text-base text-navy-blue font-bold p-3 whitespace-break-spaces">
                      {data.content}
                    </div>
                  </div>
                )}
                {data.variant === TERTIARY && (
                  <div className="flex flex-1 w-full justify-between border border-mildGrey">
                    {data.subContent?.map(({ id, detail, className }: MembershipDataSubContent) => (
                      <div key={id} className="flex flex-1 flex-wrap justify-evenly px-3 py-5 whitespace-break-spaces">
                        <h1
                          className={classNames(
                            'whitespace-pre items-center text-sm lg:text-base font-bold',
                            className
                          )}
                        >
                          {detail}
                        </h1>
                      </div>
                    ))}
                    {data.mainContent?.map(({ id, detail1, detail2, className }: MembershipDataMainContent) => (
                      <div key={id} className="flex flex-1 justify-evenly px-3 py-5 whitespace-break-spaces">
                        <div className="flex flex-col justify-center">
                          <h1
                            className={classNames(
                              'flex whitespace-pre justify-center items-center text-sm lg:text-base font-bold',
                              className
                            )}
                          >
                            {detail1}
                          </h1>
                          <h1
                            className={classNames(
                              'flex whitespace-pre justify-center items-center text-sm lg:text-base font-bold',
                              className
                            )}
                          >
                            {detail2}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {data.variant === QUATERNARY && (
                  <div className="flex flex-col flex-1">
                    <div className="flex border border-mildGrey justify-between py-3">
                      {data.tickContent?.map(({ id, isTick }: MembershipDataTickContent) => (
                        <div key={id} className="flex flex-1 justify-evenly p-3">
                          {isTick ? (
                            <img
                              className="flex"
                              src="\v2\permission-instruction-setting\TickButon.svg"
                              alt="tick-icon"
                            />
                          ) : (
                            <div className="w-[25px] h-[25px]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberCardCompareInfo;

export const MEMBERSHIP_DATA: MembershipDataItems[] = [
  {
    id: 1,
    title: '會員級別',
    variant: PRIMARY,
    cardContent: [
      {
        id: 1.1,
        source: 'white-card',
        sourceColor: 'yellow',
        className: 'bg-bgYellow',
        detail: 'ECOGREEN'
      },
      {
        id: 1.2,
        source: 'grey-card',
        sourceColor: 'yellow',
        className: 'bg-bgLimeGreen',
        detail: 'ECOLAND'
      },
      {
        id: 1.3,
        source: 'blue-card',
        sourceColor: 'green',
        className: 'bg-bgBlue',
        detail: 'ECOOCEAN'
      }
    ]
  },
  {
    id: 2,
    title: '註冊費',
    variant: SECONDARY,
    content: '$30,000'
  },
  {
    id: 3,
    title: '年續會費',
    variant: SECONDARY,
    content: '$80,000'
  },
  {
    id: 4,
    title: '會員期限',
    variant: SECONDARY,
    content: '12個月'
  },
  {
    id: 5,
    title: '推薦入會',
    variant: SECONDARY,
    content: '被推薦者入會成功後，推薦雙方各贈300積分(價值$30,000)'
  },
  {
    id: 6,
    title: '專案積分',
    variant: SECONDARY,
    content: '依據專案，提供積分條件'
  },
  {
    id: 7,
    title: '身份',
    variant: TERTIARY,
    subContent: [
      {
        id: 7.1,
        detail: '法人',
        className: 'text-textYellow'
      },
      {
        id: 7.2,
        detail: '法人/會員升級',
        className: 'text-textGreen'
      },
      {
        id: 7.3,
        detail: '法人/會員升級',
        className: 'text-textBlue'
      }
    ]
  },
  {
    id: 8,
    title: '續卡/升級',
    variant: TERTIARY,
    mainContent: [
      {
        id: 8.1,
        detail1: '續會費/年',
        detail2: '',
        className: 'text-textYellow'
      },
      {
        id: 8.2,
        detail1: '200張訂單/年',
        detail2: '積分100,000點/年',
        className: 'text-textGreen'
      },
      {
        id: 8.3,
        detail1: '350張訂單/年',
        detail2: '積分300,000點/年',
        className: 'text-textBlue'
      }
    ]
  },
  {
    id: 9,
    title: '積分倍數',
    variant: TERTIARY,
    subContent: [
      {
        id: 9.1,
        detail: '訂單金額*1%',
        className: 'text-textYellow'
      },
      {
        id: 9.2,
        detail: '訂單金額*1.5%',
        className: 'text-textGreen'
      },
      {
        id: 9.3,
        detail: '訂單金額*2%',
        className: 'text-textBlue'
      }
    ]
  },
  {
    id: 10,
    title: '手續費',
    variant: TERTIARY,
    subContent: [
      {
        id: 10.1,
        detail: '買5%、賣8%',
        className: 'text-textYellow'
      },
      {
        id: 10.2,
        detail: '買4%、賣6%',
        className: 'text-textGreen'
      },
      {
        id: 10.3,
        detail: '買3%、賣5%',
        className: 'text-textBlue'
      }
    ]
  },
  {
    id: 11,
    title: '交易上限',
    subtitle1: '單日',
    subtitle2: '單月',
    variant: TERTIARY,
    variation: 'duo',
    mainContent: [
      {
        id: 11.1,
        detail1: '$50,000',
        detail2: '資本額*1%',
        className: 'text-textYellow'
      },
      {
        id: 11.2,
        detail1: '$150,000',
        detail2: '資本額*3%',
        className: 'text-textGreen'
      },
      {
        id: 11.3,
        detail1: '$300,000',
        detail2: '資本額*8%',
        className: 'text-textBlue'
      }
    ]
  },
  {
    id: 12,
    title: '系統權限',
    variant: TERTIARY,
    subContent: [
      {
        id: 12.1,
        detail: '3人',
        className: 'text-textYellow'
      },
      {
        id: 12.2,
        detail: '5人',
        className: 'text-textGreen'
      },
      {
        id: 12.3,
        detail: '10人',
        className: 'text-textBlue'
      }
    ]
  },
  {
    id: 13,
    title: '專屬報價',
    variant: TERTIARY,
    subContent: [
      {
        id: 13.1,
        detail: '依平台條件',
        className: 'text-textYellow'
      },
      {
        id: 13.2,
        detail: '碳權優先購買權',
        className: 'text-textGreen'
      },
      {
        id: 13.3,
        detail: '碳權優先購買權',
        className: 'text-textBlue'
      }
    ]
  },
  {
    id: 14,
    title: '電子報',
    subtitle3: '(碳權、活動)',
    variation: 'mono',
    variant: QUATERNARY,
    tickContent: [
      {
        id: 14.1,
        isTick: true
      },
      {
        id: 14.2,
        isTick: true
      },
      {
        id: 14.3,
        isTick: true
      }
    ]
  },
  {
    id: 15,
    title: '碳市場走勢',
    variant: QUATERNARY,
    tickContent: [
      {
        id: 15.1,
        isTick: false
      },
      {
        id: 15.2,
        isTick: true
      },
      {
        id: 15.3,
        isTick: true
      }
    ]
  },
  {
    id: 16,
    title: '新碳權上架預告',
    variant: QUATERNARY,
    tickContent: [
      {
        id: 16.1,
        isTick: false
      },
      {
        id: 16.2,
        isTick: true
      },
      {
        id: 16.3,
        isTick: true
      }
    ]
  },
  {
    id: 17,
    title: 'Rebate Program',
    variant: QUATERNARY,
    tickContent: [
      {
        id: 17.1,
        isTick: false
      },
      {
        id: 17.2,
        isTick: false
      },
      {
        id: 17.3,
        isTick: true
      }
    ]
  }
];
