import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import { useState } from 'react';

import CustomButton from '../CustomButton';

const MemberProfileUpdate = () => {
  const [file, setFile] = useState<string>('/v2/user-info-form/default.svg');
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      try {
        setFile(URL.createObjectURL(event.target.files[0]));
      } catch (err) {
        return;
      }
    }
  }
  return (
    <div className="rounded-mdlg bg-trans-white min-[1400px]:py-6.2 min-[1200px]:py-4.7 py-3 min-[1400px]:px-8 min-[1200px]:px-6 px-4 mt-[146px] flex flex-col bg-blend-lighten min-[1400px]:gap-4.5 gap-3 ml-10 w-[90%]">
      <div className="flex min-[1600px]:gap-x-16.7 min-[1500px]:gap-x-13.7 min-[1300px]:gap-x-12 gap-x-10 min-[1600px]:my-21 min-[1500px]:my-18 min-[1300px]:my-14 my-10 mx-auto">
        <div className="relative self-center">
          <IconButton component="label" className="relative z-50 ">
            <label
              className="absolute min-[1600px]:text-sm min-[1500px]:text-xs text-xms z-40 text-white cursor-pointer"
              htmlFor="image"
            >
              更換照片
            </label>
            <Avatar
              src={file}
              className="min-[1600px]:!w-[100px] min-[1600px]:!h-[100px] min-[1500px]:!w-[85px] min-[1500px]:!h-[85px] min-[1200px]:!w-[75px] min-[1200px]:!h-[75px] !w-[60px] !h-[60px]"
            />
            <input type="file" hidden onChange={handleChange} id="image" />
          </IconButton>
        </div>
        <div className="flex flex-col gap-y-8.7">
          <CustomInfo heading="暱稱" data="Steve Jobs" />
          <CustomInfo heading="職稱" data="專員" />
          <CustomInfo heading="Email" data="grimes@xholding.com" />
          <CustomInfo heading="電話" data="02-1234 5678" />
        </div>
        <div className="flex flex-col gap-y-8.7">
          <CustomInfo heading="操作權限" data="操作人員(無後台操作權)" className="font-normal" />
          <CustomInfo heading="帳戶狀態" data="驗證中" className="!text-light-green" />
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-7.2">
          <CustomButton
            children="刪除帳號"
            className="border !border-silverstone !text-silverstone !bg-transparent min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
          />
          <CustomButton
            children="凍結帳號"
            className="border !border-silverstone !text-silverstone !bg-transparent min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
          />
        </div>
        <CustomButton
          children="資料修改"
          className="bg-pale-yellow !text-silverstone  min-[1600px]:text-lg min-[1500px]:text-base min-[1300px]:text-sm text-xms font-bold rounded-mdlg min-[1600px]:w-[154px] min-[1500px]:w-[125px] min-[1300px]:w-[105px] w-[95px]  min-[1600px]:h-10.5 min-[1500px]:h-9 min-[1300px]:h-8 h-7"
        />
      </div>
    </div>
  );
};

export default MemberProfileUpdate;

interface CustomInfoIProps {
  heading: string;
  data: string;
  className?: string;
}

const CustomInfo = ({ heading, data, className }: CustomInfoIProps) => {
  return (
    <div className="flex">
      <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm font-bold text-navy-blue">
        {heading} ：
      </p>
      <p
        className={classNames(
          'min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm font-bold text-smoke-gray ',
          className
        )}
      >
        {data}
      </p>
    </div>
  );
};
