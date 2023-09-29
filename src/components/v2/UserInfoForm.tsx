import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import CustomButton from '../CustomButton';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const UserInfoForm = () => {
  const { register } = useForm();

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
    <div className="rounded-mdlg bg-white py-6.2 px-8 mt-[146px] w-max flex flex-col gap-4.5">
      <p className="text-navy-blue text-lg font-bold">| 新增使用者</p>
      <div className="flex gap-8 mt-2.5">
        <div className="relative mt-[65px]">
          <IconButton component="label" className="relative z-50">
            <label className="absolute text-sm z-40 text-white cursor-pointer" htmlFor="image">
              更換照片
            </label>
            <Avatar src={file} className="!w-[100px] !h-[100px]" />
            <input type="file" hidden onChange={handleChange} id="image" />
          </IconButton>
        </div>
        <div className="flex flex-col gap-4.2">
          <CustomInput heading="姓名" id="name" type="text" register={register} />
          <CustomInput heading="職稱" id="job_title" type="text" register={register} />
          <CustomInput heading="Email" id="email" type="text" register={register} />
          <CustomInput heading="電話" id="telephone" type="text" register={register} />
          <CustomInput heading="分機" id="extension" type="text" register={register} className="!w-[148px]" />
        </div>
        <div className="flex flex-col justify-between max-w-[415px]">
          <div className="flex gap-7.5 self-end">
            <p className="text-lg text-navy-blue font-bold mt-2.5">操作權限</p>
            <CustomSelect />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-2 w-[95%] self-end">
              <input type="checkbox" className="h-7 w-7" />
              <p className="text-navy-blue text-base font-bold break-normal">
                確認後無法修改, 系統將自動寄送email至指定信箱進行身分驗證。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-7.5 self-end">
        <CustomButton
          children="取消"
          variant="secondary"
          className="w-31 h-8.7 border rounded-mdlg text-lg font-bold"
        />
        <CustomButton children="確認" variant="primary" className="w-31 h-8.7 rounded-mdlg text-lg font-bold" />
      </div>
    </div>
  );
};

export default UserInfoForm;
