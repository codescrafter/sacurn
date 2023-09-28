import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import CustomInput from './CustomInput';

const UserInfoForm = () => {
  const { register } = useForm();

  const [file, setFile] = useState('');
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('here');
    if (event.target.files) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div className="rounded-mdlg bg-white py-6.2 px-8 mt-[146px] w-max">
      <p className="text-navy-blue text-lg font-bold">| 新增使用者</p>
      <div className="flex">
        <div>
          <IconButton component="label">
            <Avatar src={file} />
            <input type="file" hidden onChange={handleChange} />
          </IconButton>
        </div>
        <div className="flex flex-col gap-4.2">
          <CustomInput heading="姓名" id="name" type="text" register={register} />
          <CustomInput heading="職稱" id="job_title" type="text" register={register} />
          <CustomInput heading="Email" id="email" type="text" register={register} />
          <CustomInput heading="電話" id="telephone" type="text" register={register} />
          <CustomInput heading="分機" id="extension" type="text" register={register} className="w-[148px]" />
        </div>
      </div>
    </div>
  );
};

export default UserInfoForm;
