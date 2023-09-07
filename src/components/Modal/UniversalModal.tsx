import classNames from 'classnames';
import React from 'react';

import { useModalStore } from '@/store/modal';
import { UniversalModalStatus } from '@/types';

export type UniversalModalProps = {
  status: UniversalModalStatus;
  icon: string;
  title: string;
  description: string;
  errorText?: string;
  buttons: {
    text: string;
    isOutline?: boolean;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    isNotCloseAfterClick?: boolean;
  }[];
};

function UniversalModal() {
  const { isOpen, data, close } = useModalStore();

  if (!data) return null;

  const { status, icon, title, description, errorText, buttons } = data;

  const isLoading = status === UniversalModalStatus.Loading;

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#3D3D3D99] flex justify-center items-center">
          <div className="relative p-[60px] bg-white max-w-[600px] rounded-[10px] flex flex-col items-center">
            {!isLoading && (
              <img
                src="/images/products-page/ic_circle_close.svg"
                alt="close"
                width={32}
                height={32}
                className="absolute top-2.5 right-3 cursor-pointer"
                onClick={close}
              />
            )}

            <img src={icon} alt="icon" width={80} height={80} className={isLoading ? 'animate-spin' : ''} />
            <h3 className="text-[32px] leading-[38px] font-semibold text-navy-blue mt-[24px] mb-[24px] tracking-wide">
              {title}
            </h3>
            {!isLoading && <p className="text-[26px] leading-[39px] font-semibold text-black">{description}</p>}

            {!isLoading && errorText && (
              <p className="text-[20px] leading-[39px] font-semibold  text-bright-red mt-[15px]">{errorText}</p>
            )}

            {!isLoading && (
              <div className="flex justify-center gap-[26px] mt-[35px]">
                {buttons.map((button) => {
                  return (
                    <button
                      key={button.text}
                      className={classNames('min-w-[180px] h-[44px] rounded-[60px] text-xl font-normal', {
                        'text-white bg-navy-blue': !button.isOutline,
                        'text-navy-blue bg-white border-2	border-current': !!button.isOutline
                      })}
                      onClick={(e) => {
                        button.onClick?.(e);
                        if (button.isNotCloseAfterClick) {
                          return;
                        }
                        close();
                      }}
                    >
                      {button.text}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default UniversalModal;
