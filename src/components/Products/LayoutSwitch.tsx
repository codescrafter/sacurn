import classNames from 'classnames';

import CustomButton from '../CustomButton';

const LayoutSwitch = () => {
  return (
    <div className="px-10 pb-4 flex gap-6 items-center justify-end">
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-dark-green', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: true,
          ['hidden w-90 h-4']: false
        })}
      >
        綠碳
      </CustomButton>
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-yellow', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: true,
          ['hidden w-90 h-4']: false
        })}
      >
        黃碳
      </CustomButton>
      <CustomButton
        variant="rounded-full"
        className={classNames('bg-blue', {
          ['text-white w-[205px] h-7 flex justify-center items-center']: true,
          ['hidden w-90 h-4']: false
        })}
      >
        藍碳
      </CustomButton>
    </div>
  );
};

export default LayoutSwitch;
