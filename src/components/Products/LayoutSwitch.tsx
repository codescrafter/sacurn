import classNames from 'classnames';
import { useState } from 'react';

import { LayoutSwitchTypes } from '@/type';

import CustomButton from '../CustomButton';

enum SWITCH {
  GREEN = 'green',
  YELLOW = 'yellow',
  BLUE = 'blue'
}

const LayoutSwitch = () => {
  const [active, setActive] = useState<LayoutSwitchTypes>(SWITCH.GREEN);

  return (
    <div className="px-10 pb-4 flex gap-6 items-center justify-end h-[46px]">
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-dark-green', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: active === SWITCH.GREEN,
          ['w-[90px] h-[18px]']: active !== SWITCH.GREEN
        })}
        onClick={() => setActive(SWITCH.GREEN)}
      >
        {active === SWITCH.GREEN ? '綠碳' : ''}
      </CustomButton>
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-yellow', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: active === SWITCH.YELLOW,
          ['w-[90px] h-[18px]']: active !== SWITCH.YELLOW
        })}
        onClick={() => setActive(SWITCH.YELLOW)}
      >
        {active === SWITCH.YELLOW ? '黃碳' : ''}
      </CustomButton>
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-blue', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: active === SWITCH.BLUE,
          ['w-[90px] h-[18px]']: active !== SWITCH.BLUE
        })}
        onClick={() => setActive(SWITCH.BLUE)}
      >
        {active === SWITCH.BLUE ? '藍碳' : ''}
      </CustomButton>
    </div>
  );
};

export default LayoutSwitch;
