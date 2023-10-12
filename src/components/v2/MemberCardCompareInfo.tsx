import React from 'react';

import { MEMBERSHIPDATA } from '@/pages/v2/MembershipCardInfo';

const MemberCardCompareInfo = () => {
  return (
    <div className="flex mt-16 mr-12 ml-3 items-center bg-offwhite backdrop:blur-0 text-black rounded-2.5xl">
      <div className="w-full mx-5 mb-6 mt-7 overscroll-x-none overflow-y-scroll yellowScroll h-[570px]">
        <div className="flex-col gap-4 items-center bg-offwhite backdrop:blur-0 mb-2 w-[98%]">
          {MEMBERSHIPDATA.map((data) => (
            <div className="flex flex-col w-full">
              <div key={data.id} className="flex w-full justify-between">
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
                {data.variant === 'primary' && (
                  <div className="flex flex-1 border border-mildGrey">
                    {data.cardcontent?.map(({ id, source, classname, detail, sourceColor }) => (
                      <div
                        key={id}
                        className={`${classname} relative p-3 flex flex-col flex-1 justify-center items-center`}
                      >
                        <img
                          className="absolute mr-10 -left-[0.20px]"
                          src={`/v2/cards/${sourceColor}-card-corner.svg`}
                          width={16}
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
                    ))}
                  </div>
                )}
                {data.variant === 'secondary' && (
                  <div className="flex flex-col flex-1 w-full justify-between">
                    <div className="flex flex-1 justify-center items-center border border-mildGrey text-sm lg:text-base text-navy-blue font-bold p-3 whitespace-break-spaces">
                      {data.content}
                    </div>
                  </div>
                )}
                {data.variant === 'tertiary' && (
                  <div className="flex flex-1 w-full justify-between border border-mildGrey">
                    {data.subcontent?.map(({ id, detail, classname }) => (
                      <div key={id} className="flex flex-1 flex-wrap justify-evenly px-3 py-5 whitespace-break-spaces">
                        <h1 className={`whitespace-pre items-center text-sm lg:text-base ${classname} font-bold`}>
                          {detail}
                        </h1>
                      </div>
                    ))}
                    {data.maincontent?.map(({ id, detail1, detail2, classname }) => (
                      <div key={id} className="flex flex-1 justify-evenly px-3 py-5 whitespace-break-spaces">
                        <div className="flex flex-col justify-center">
                          <h1
                            className={`flex whitespace-pre justify-center items-center text-sm lg:text-base ${classname} font-bold`}
                          >
                            {detail1}
                          </h1>
                          <h1
                            className={`flex whitespace-pre justify-center items-center text-sm lg:text-base ${classname} font-bold`}
                          >
                            {detail2}
                          </h1>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {data.variant === 'quaternary' && (
                  <div className="flex flex-col flex-1">
                    <div className="flex border border-mildGrey justify-between py-3">
                      {data.tickcontent?.map(({ id, isTick }) => (
                        <div className="flex flex-1 justify-evenly p-3">
                          {isTick === 'true' ? (
                            <img
                              className="flex"
                              key={id}
                              src="\v2\permission-instruction-setting\TickButon.svg"
                              alt="tick-icon"
                            />
                          ) : (
                            <div className="w-[25px] h-[25px]"></div>
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
