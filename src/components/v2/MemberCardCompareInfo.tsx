import React from 'react';

import { MEMBERSHIPDATA } from '@/pages/v2/MembershipCardInfo';

const MemberCardCompareInfo = () => {
  return (
    <div className="flex mt-16 mr-12 items-center bg-offwhite backdrop:blur-0 text-black rounded-2.5xl">
      <div className="flex-col gap-4 items-center bg-offwhite backdrop:blur-0 mt-12 mb-6 mx-8 w-full">
        {MEMBERSHIPDATA.map((data) => (
          <div className="flex flex-col w-full">
            <div key={data.id} className="flex w-full justify-between">
              {!data.variation && (
                <h1 className="flex border border-mildGrey w-1/5 justify-center text-center items-center p-3">
                  {data.title}
                </h1>
              )}
              {data.variation == 'duo' && (
                <div className="flex border border-mildGrey w-1/5 justify-center text-center items-center p-3">
                  <div className="relative">
                    {data.title}
                    <span className="absolute text-xs whitespace-nowrap -right-8 -top-2 ">{data.subtitle1}</span>
                    <span className="absolute text-xs whitespace-nowrap -right-8  -bottom-2 ">{data.subtitle2}</span>
                  </div>
                </div>
              )}
              {data.variation == 'mono' && (
                <h1 className="flex border border-mildGrey w-1/5 justify-center text-center items-center whitespace-nowrap p-3">
                  {data.title}
                  <pre className="-top-1.5 -right-1.5 text-xs">{data.subtitle3}</pre>
                </h1>
              )}
              {data.variant === 'primary' && (
                <div className="flex flex-1 border border-mildGrey">
                  {data.cardcontent?.map(({ id, source, classname, detail }) => (
                    <div key={id} className={`${classname} p-3 flex flex-col flex-1 justify-center items-center`}>
                      <img
                        className="flex flex-1 px-3 pt-3"
                        src={`/v2/cards/${source}.svg`}
                        width={193}
                        height={122}
                        alt="Card"
                      />
                      <span className="flex uppercase text-navy-blue text-base font-bold justify-center items-center">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {data.variant === 'secondary' && (
                <div className="flex flex-col flex-1 w-full justify-between">
                  <div className="flex flex-1 justify-center items-center border border-mildGrey text-base text-navy-blue font-bold p-3">
                    {data.content}
                  </div>
                </div>
              )}
              {data.variant === 'tertiary' && (
                <div className="flex flex-1 w-full justify-between border border-mildGrey">
                  {data.subcontent?.map(({ id, detail, classname }) => (
                    <div key={id} className="flex flex-1  justify-evenly px-3 py-5 ">
                      <span className={`space-x-7 items-center text-base ${classname} font-bold wrap-issue`}>
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              {data.variant === 'quaternary' && (
                <div className="flex flex-col flex-1 w-full justify-between">
                  <div className="flex flex-1 border border-mildGrey justify-evenly space-x-14 py-3">
                    {data.tickcontent?.map(({ id, isTick }) => (
                      <div>
                        {isTick === 'true' ? (
                          <img key={id} src="\v2\icon\green-tick-icon.svg" alt="tick-icon" />
                        ) : (
                          <img hidden key={id} src="\v2\icon\green-tick-icon.svg" alt="tick-icon" />
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
  );
};

export default MemberCardCompareInfo;
