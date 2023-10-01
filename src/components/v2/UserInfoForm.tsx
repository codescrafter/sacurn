import { yupResolver } from '@hookform/resolvers/yup';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
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
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<UserInfoFormValues>({ resolver: yupResolver(Schema) });

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
      <div className="rounded-mdlg bg-trans-white min-[1400px]:py-6.2 min-[1200px]:py-4.7 py-3 min-[1400px]:px-8 min-[1200px]:px-6 px-4 mt-[146px] w-max flex flex-col bg-blend-lighten min-[1400px]:gap-4.5 gap-3 ml-10">
        <p className="text-navy-blue 2xl:text-lg xl:text-base text-mdbase font-bold">| 新增使用者</p>
        <div className="flex 2xl:gap-8 xl:gap-6.5 gap-5 mt-2.5">
          <div className="relative mt-[65px]">
            <IconButton component="label" className="relative z-50 ">
              <label
                className="absolute min-[1600px]:text-sm min-[1500px]:text-xs text-xms z-40 text-white cursor-pointer"
                htmlFor="image"
              >
                更換照片
              </label>
              <Avatar
                src={file}
                className="min-[1600px]:!w-[100px] min-[1600px]:!h-[100px] min-[1500px]:!w-[85px] min-[1500px]:!h-[85px] min-[1300px]:!w-[75px] min-[1300px]:!h-[75px] !w-[60px] !h-[60px]"
              />
              <input type="file" hidden onChange={handleChange} id="image" />
            </IconButton>
          </div>
          <div className={classNames('flex flex-col gap-y-4.2 w-min')}>
            <CustomInput errors={errors} heading="姓名" id="name" type="text" register={register} />
            <CustomInput errors={errors} heading="職稱" id="job_title" type="text" register={register} />
            <CustomInput errors={errors} heading="Email" id="email" type="text" register={register} />
            <CustomInput errors={errors} heading="電話" id="telephone" type="text" register={register} />
            <CustomInput
              errors={errors}
              heading="分機"
              id="extension"
              type="text"
              register={register}
              className="!w-[60%]"
            />
          </div>
          <div className="flex flex-col justify-between min-[1600px]:max-w-[415px] min-[1500px]:max-w-[375px] min-[1300px]:max-w-[325px] max-w-[265px]">
            <div className="flex  min-[1600px]:gap-7.5 min-[1500px]:gap-6 min-[1300px]:gap-5.5 gap-5 self-end">
              <p className="min-[1600px]:text-lg min-[1500px]:text-base text-mdbase text-navy-blue font-bold min-[1600px]:mt-2.5 min-[1500px]:mt-2 min-[1300px]:mt-1.5 min-[1200px]:mt-1 mt-0.5">
                操作權限
              </p>
              <CustomSelect setValue={setValue} />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-2 w-[95%] self-end">
                <input
                  type="checkbox"
                  className="min-[1600px]:h-7 min-[1500px]:h-6 min-[1300px]:h-5 h-3.5 min-[1600px]:w-7 min-[1500px]:w-6 min-[1300px]:w-5"
                  {...register('confirm_info')}
                />
                <div className="flex flex-col">
                  <p className="text-navy-blue min-[1600px]:text-base min-[1500px]:text-sm min-[1300px]:text-xs text-xms font-bold break-normal">
                    確認後無法修改, 系統將自動寄送email至指定信箱進行身分驗證。
                  </p>
                  {errors && errors.confirm_info && (
                    <p className="min-[1500px]:text-xs min-[1300px]:text-xms text-xxs text-bright-red">
                      {errors.confirm_info?.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-[1600px]:gap-7.5 min-[1500px]:gap-6.5 min-[1300px]:gap-5 gap-4.5 self-end">
          <CustomButton
            children="取消"
            variant="secondary"
            className="min-[1600px]:w-31 min-[1600px]:h-8.7 min-[1500px]:w-26.7 min-[1500px]:h-7.5 w-23.2 h-6.7   border rounded-mdlg min-[1600px]:text-lg min-[1500px]:text-base text-sm font-bold"
          />
          <CustomButton
            children="確認"
            variant="primary"
            type="submit"
            className="min-[1600px]:w-31 min-[1600px]:h-8.7 min-[1500px]:w-26.7 min-[1500px]:h-7.5 w-23.2 h-6.7 rounded-mdlg min-[1600px]:text-lg min-[1500px]:text-base text-sm font-bold"
          />
        </div>
      </div>
    </form>
  );
};

export default UserInfoForm;
