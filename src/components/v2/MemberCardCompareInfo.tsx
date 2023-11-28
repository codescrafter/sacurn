import classNames from 'classnames';
import { useEffect } from 'react';

import { useMembershipStore } from '@/store/member';
import { usePlatformStore } from '@/store/platform';

const MemberCardCompareInfo = () => {
  const membershipComparison = useMembershipStore((state) => state.membershipComparison);
  const getMembershipComparison = useMembershipStore((state) => state.getMembershipComparison);
  // const toggleCardComparison = usePlatformStore((state) => state.toggleCardComparison);
  const isCardComparisonModalOpen = usePlatformStore((state) => state.isCardComparisonModalOpen);
  useEffect(() => {
    getMembershipComparison(1);
  }, []);

  return (
    <>
      {isCardComparisonModalOpen && (
        <div className="flex mt-16 sm:mr-3 xl:mr-12 ml-3 items-center bg-offwhite backdrop:blur-0 text-black rounded-2.5xl absolute top-14 right-5 max-w-[70vw]">
          <div className="w-full sm:mx-3 xl:mx-5 sm:mb-3 xl:mb-6 sm:mt-4 xl:mt-7 overscroll-x-none overflow-y-scroll yellowScroll h-[70vh] min-h-[730px]">
            <div className="flex flex-1 flex-col items-center bg-offwhite backdrop:blur-0 mb-2 w-[98%]">
              {MEMBERSHIP_DATA.map((data) => (
                <div key={data.id} className="flex flex-row w-full">
                  <div className="flex flex-row w-1/5">
                    {!data.variation && (
                      <h1 className="flex flex-1 border border-mildGrey justify-center items-center p-3">
                        {data.title}
                      </h1>
                    )}
                    {data.variation == 'duo' && (
                      <div className="flex flex-1 border border-mildGrey w-1/5 justify-center text-center items-center p-2">
                        <div className="relative whitespace-pre-wrap">
                          {data.title}
                          <span className="absolute text-xs -right-4 -top-3 whitespace-pre-wrap">{data.subtitle1}</span>
                          <span className="absolute text-xs -right-4 -bottom-3 whitespace-pre-wrap">
                            {data.subtitle2}
                          </span>
                        </div>
                      </div>
                    )}
                    {data.variation == 'mono' && (
                      <h1 className="flex flex-1 border border-mildGrey w-1/5 justify-center text-center items-center p-3">
                        {data.title}
                        <pre className="-top-1.5 -right-1.5 text-xs whitespace-pre-wrap">{data.subtitle3}</pre>
                      </h1>
                    )}
                  </div>
                  <div key={data.id} className="flex w-full border border-mildGrey ">
                    {membershipComparison.map((item) => (
                      <div className="w-full">
                        {data.id == 1 && (
                          <div>
                            {item.level == 1 && (
                              <div className="relative p-3 flex flex-col flex-1 justify-center items-center bg-bgYellow">
                                <img
                                  className="absolute mr-10 w-2 left-0 md:-left-[0.40px] md:w-2.5 lg:-left-0.5 lg:w-[14px] xl:-left-[0.20px] xl:w-4"
                                  src="/v2/cards/yellow-card-corner.svg"
                                  alt="CardCorner"
                                />
                                <img
                                  className="flex flex-1 px-3 pt-3"
                                  src="/v2/cards/white-card.svg"
                                  width={193}
                                  height={122}
                                  alt="Card"
                                />
                                <span className="flex uppercase text-navy-blue text-sm lg:text-base font-bold justify-center items-center">
                                  {item.name}
                                </span>
                              </div>
                            )}
                            {item.level == 2 && (
                              <div className="relative p-3 flex flex-col flex-1 justify-center items-center bg-bgLimeGreen">
                                <img
                                  className="absolute mr-10 w-2 left-0 md:-left-[0.40px] md:w-2.5 lg:-left-0.5 lg:w-[14px] xl:-left-[0.4px] xl:w-4"
                                  src="/v2/cards/yellow-card-corner.svg"
                                  alt="CardCorner"
                                />
                                <img
                                  className="flex flex-1 px-3 pt-3"
                                  src="/v2/cards/grey-card.svg"
                                  width={193}
                                  height={122}
                                  alt="Card"
                                />
                                <span className="flex uppercase text-navy-blue text-sm lg:text-base font-bold justify-center items-center">
                                  {item.name}
                                </span>
                              </div>
                            )}
                            {item.level == 3 && (
                              <div className="relative p-3 flex flex-col flex-1 justify-center items-center bg-bgBlue">
                                <img
                                  className="absolute mr-10 w-2 left-0 md:-left-[0.40px] md:w-2.5 lg:-left-0.5 lg:w-[14px] xl:-left-[0.20px] xl:w-4"
                                  src="/v2/cards/green-card-corner.svg"
                                  alt="CardCorner"
                                />
                                <img
                                  className="flex flex-1 px-3 pt-3"
                                  src="/v2/cards/blue-card.svg"
                                  width={193}
                                  height={122}
                                  alt="Card"
                                />
                                <span className="flex uppercase text-navy-blue text-sm lg:text-base font-bold justify-center items-center">
                                  {item.name}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        {data.id == 2 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              ${item.registration_fee}
                            </div>
                          </div>
                        )}
                        {data.id == 3 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              ${item.annual_renewal_fee}
                            </div>
                          </div>
                        )}
                        {data.id == 4 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              {item.duration}個月
                            </div>
                          </div>
                        )}
                        {data.id == 5 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              {item.recommend}
                            </div>
                          </div>
                        )}
                        {data.id == 6 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              {item.point}
                            </div>
                          </div>
                        )}
                        {data.id == 7 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              {item.identity}
                            </div>
                          </div>
                        )}
                        {data.id == 8 && (
                          <div className="flex flex-col flex-1 w-full h-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-col flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              {item.upgrade && item.upgrade.orders && (
                                <span className="flex whitespace-pre justify-center items-center text-sm lg:text-base font-bold">
                                  {item.upgrade.orders}張訂單/年
                                </span>
                              )}
                              {item.upgrade && item.upgrade.points && (
                                <span className="flex whitespace-pre justify-center items-center text-sm lg:text-base font-bold">
                                  積分{item.upgrade.points}點/年
                                </span>
                              )}
                              {item.upgrade && item.upgrade.renewal && (
                                <span className="flex whitespace-pre justify-center items-center text-sm lg:text-base font-bold">
                                  續會費/年
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                        {data.id == 9 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              訂單金額*{item.point_multiplier}%
                            </div>
                          </div>
                        )}
                        {data.id == 10 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              買{item.buy_cost}%、賣{item.sell_cost}%
                            </div>
                          </div>
                        )}
                        {data.id == 11 && (
                          <div className="flex flex-col flex-1 w-full h-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-col flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              <span>${item.trade_day_limit}</span>
                              <span>資本額*{item.trade_month_limit}%</span>
                            </div>
                          </div>
                        )}
                        {data.id == 12 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              {item.user_access_limit}人
                            </div>
                          </div>
                        )}
                        {data.id == 13 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div
                              className={classNames(
                                'flex flex-1 justify-center items-center text-sm lg:text-base font-bold p-3 whitespace-break-spaces',
                                {
                                  ['text-textYellow']: item.level === 1,
                                  ['text-textGreen']: item.level === 2,
                                  ['text-navy-blue']: item.level === 3
                                }
                              )}
                            >
                              {item.project_estimate}
                            </div>
                          </div>
                        )}
                        {data.id == 14 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div className="flex flex-1 justify-center items-center  text-sm lg:text-base text-navy-blue font-bold p-3 whitespace-break-spaces">
                              {item.e_news == 1 ? (
                                <img
                                  className="flex"
                                  src="\v2\permission-instruction-setting\TickButon.svg"
                                  alt="tick-icon"
                                />
                              ) : (
                                <div className="w-[25px] h-[24px]" />
                              )}
                            </div>
                          </div>
                        )}
                        {data.id == 15 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div className="flex flex-1 justify-center items-center text-sm lg:text-base text-navy-blue font-bold p-3 whitespace-break-spaces">
                              {item.market_trade == 1 ? (
                                <img
                                  className="flex"
                                  src="\v2\permission-instruction-setting\TickButon.svg"
                                  alt="tick-icon"
                                />
                              ) : (
                                <div className="w-[25px] h-[24px]" />
                              )}
                            </div>
                          </div>
                        )}
                        {data.id == 16 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div className="flex flex-1 justify-center items-center text-sm lg:text-base text-navy-blue font-bold p-3 whitespace-break-spaces">
                              {item.upcoming_release == 1 ? (
                                <img
                                  className="flex"
                                  src="\v2\permission-instruction-setting\TickButon.svg"
                                  alt="tick-icon"
                                />
                              ) : (
                                <div className="w-[25px] h-[24px]" />
                              )}
                            </div>
                          </div>
                        )}
                        {data.id == 17 && (
                          <div className="flex flex-col flex-1 w-full justify-between">
                            <div className="flex flex-1 justify-center items-center text-sm lg:text-base text-navy-blue font-bold p-3 whitespace-break-spaces">
                              {item.rebate_program == 1 ? (
                                <img
                                  className="flex"
                                  src="\v2\permission-instruction-setting\TickButon.svg"
                                  alt="tick-icon"
                                />
                              ) : (
                                <div className="w-[25px] h-[24px]" />
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex flex-col flex-1">
                <div className="flex flex-1 border border-mildGrey"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MemberCardCompareInfo;

export const MEMBERSHIP_DATA = [
  {
    id: 1,
    title: '會員級別'
  },
  {
    id: 2,
    title: '註冊費'
  },
  {
    id: 3,
    title: '年續會費'
  },
  {
    id: 4,
    title: '會員期限'
  },
  {
    id: 5,
    title: '推薦入會'
  },
  {
    id: 6,
    title: '專案積分'
  },
  {
    id: 7,
    title: '身份'
  },
  {
    id: 8,
    title: '續卡/升級'
  },
  {
    id: 9,
    title: '積分倍數'
  },
  {
    id: 10,
    title: '手續費'
  },
  {
    id: 11,
    title: '交易上限',
    subtitle1: '單日',
    subtitle2: '單月',
    variation: 'duo'
  },
  {
    id: 12,
    title: '系統權限'
  },
  {
    id: 13,
    title: '專屬報價'
  },
  {
    id: 14,
    title: '電子報',
    subtitle3: '(碳權、活動)',
    variation: 'mono'
  },
  {
    id: 15,
    title: '碳市場走勢'
  },
  {
    id: 16,
    title: '新碳權上架預告'
  },
  {
    id: 17,
    title: 'Rebate Program'
  }
];
