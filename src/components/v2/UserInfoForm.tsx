import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import CustomButton from '../CustomButton';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

export interface UserInfoFormValues {
  name: string;
  job_title: string;
  email: string;
  telephone: string;
  extension: string;
  operation_permission: string;
  confirm_info: boolean;
}

const Schema = yup
  .object({
    name: yup.string().required('姓名為必填項'),
    job_title: yup.string().required('職位名稱為必填項'),
    email: yup.string().email('Enter valid address').required('電子郵件為必填項'),
    telephone: yup
      .string()
      .required('例如：0x-000111 或 09xx-000111')
      .matches(/^09\d{8}$/, '例如：0x-000111 或 09xx-000111'),
    extension: yup.string().required('需要延期'),
    operation_permission: yup.string().required('需要操作權限'),
    confirm_info: yup
      .boolean()
      .required('請務必確認勾選此框。')
      .test('is-true', '請務必確認勾選此框。', (value) => value === true)
  })
  .required();

const UserInfoForm = () => {
  const { register, setValue, handleSubmit } = useForm<UserInfoFormValues>({ resolver: yupResolver(Schema) });

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

  const onSubmit = handleSubmit(() => {});

  return (
    <form onSubmit={onSubmit}>
      <div className="rounded-mdlg bg-trans-white py-6.2 px-8 mt-[146px] w-max flex flex-col bg-blend-lighten gap-4.5">
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
              <CustomSelect setValue={setValue} />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 w-[95%] self-end">
                <input type="checkbox" className="h-7 w-7" {...register('confirm_info')} />
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
          <CustomButton
            children="確認"
            variant="primary"
            type="submit"
            className="w-31 h-8.7 rounded-mdlg text-lg font-bold"
          />
        </div>
      </div>
    </form>
  );
};

export default UserInfoForm;
