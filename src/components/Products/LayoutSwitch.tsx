import classNames from 'classnames';
import { useState } from 'react';

import { LayoutSwitchTypes } from '@/type';

import CustomButton from '../CustomButton';

const LayoutSwitch = () => {
  const [active, setActive] = useState<LayoutSwitchTypes>('green');
  return (
    <div className="px-10 pb-4 flex gap-6 items-center justify-end h-[46px]">
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-dark-green', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: active === 'green',
          ['w-[90px] h-[18px]']: active !== 'green'
        })}
        onClick={() => setActive('green')}
      >
        {active === 'green' ? '綠碳' : ''}
      </CustomButton>
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-yellow', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: active === 'yellow',
          ['w-[90px] h-[18px]']: active !== 'yellow'
        })}
        onClick={() => setActive('yellow')}
      >
        {active === 'yellow' ? '黃碳' : ''}
      </CustomButton>
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-blue', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: active === 'blue',
          ['w-[90px] h-[18px]']: active !== 'blue'
        })}
        onClick={() => setActive('blue')}
      >
        {active === 'blue' ? '藍碳' : ''}
      </CustomButton>
    </div>
  );
};

export default LayoutSwitch;
