import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, IconButton } from '@mui/material';
import classNames from 'classnames';
import React, { Fragment, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

import CustomButton from '@/components/CustomButton';
import Layout from '@/components/v2/Layout';
import { useCompanyStore } from '@/store/company';
import { AccountInformationTypes } from '@/type';

export interface AccountInfoValues {
  name: string;
  title: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Schema = yup.object({
  name: yup.string().required('姓名為必填項'),
  title: yup.string().required('職位名稱為必填項'),
  email: yup.string().email('Enter valid address').required('電子郵件為必填項'),
  phone: yup
    .string()
    .required('例如：0x-000111 或 09xx-000111')
    .matches(/^09\d{8}$/, '例如：0x-000111 或 09xx-000111'),
  password: yup.string().required('請輸入密碼'),
  confirmPassword: yup
    .string()
    .required('請再次輸入密碼')
    .oneOf([yup.ref('password')], '密碼不一致')
});

const AccountInformation = () => {
  const [isPasswordClicked, setIsPasswordClicked] = useState<boolean>(false);
  const [company] = useCompanyStore((state) => [state.company, state.getCompany]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AccountInfoValues>({ resolver: yupResolver(Schema) });

  const [file, setFile] = useState<string>('/v2/account-pic.svg');

  const accountInfoList: AccountInformationTypes[] = useMemo(() => {
    return [
      {
        key: '公司名稱',
        value: company.name || '-'
      },
      {
        key: '代表人',
        value: company.representative || '-'
      },
      {
        key: 'VAT號碼',
        value: company.registration_number || '-'
      },
      {
        key: '公司電話',
        value: company.phone || '-'
      },
      {
        key: '公司地址',
        value: Object.values(company.address || {}).join('') || '-'
      }
    ];
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      try {
        setFile(URL.createObjectURL(event.target.files[0]));
      } catch (err) {
        return;
      }
    }
  };

  const onSubmit = handleSubmit(() => {
    console.log('submit');
  });

  return (
    <Layout>
      <form onSubmit={onSubmit} className="flex justify-end mr-4 xl:block">
        <div className="mt-[124px] w-[90%] rounded-lg bg-transparent-blue opacity-[0.9] shadow-account-info-box min-h-[490px] 2xl:min-h-[570px] 2.5xl:min-h-[600px]">
          <div className="flex">
            <div className="w-[50%]">
              <div className="account-information-clip-path rounded-tl-lg rounded-bl-lg bg-white min-h-[490px] xl:min-h-[570px] 2.5xl:min-h-[600px]">
                <div className="pt-12 pl-8">
                  <div className="relative">
                    <IconButton component="label" className="relative z-50 ">
                      <label
                        className="absolute min-[1600px]:text-sm min-[1500px]:text-xs text-xms z-40 text-white cursor-pointer"
                        htmlFor="image"
                      ></label>
                      <Avatar src={file} className="relative !w-[90px] !h-[90px]" />
                      <input type="file" hidden onChange={handleChange} id="image" />
                      <div className="bg-file-select-bg rounded-[50%] absolute w-[89px] h-[89px] flex justify-center items-end">
                        <img
                          src={'/v2/camera-icon.svg'}
                          alt="user image"
                          className="w-6 h-4 object-contain absolute bottom-2.5"
                        />
                      </div>
                    </IconButton>
                  </div>
                  <div className="mt-10 2.5xl:mt-14">
                    {accountInfoList.map(({ key, value }) => (
                      <div
                        key={key}
                        className="flex gap-2 text-navy-blue font-semibold 2xl:font-bold text-base xl:text-xl 2.5xl:text-[22px] mb-4 xl:mb-8 2.5xl:mb-10 first:pr-16 w-full"
                      >
                        <p className="whitespace-nowrap min-w-[75px] xl:min-w-[100px]">{key}:</p>
                        <p className="pr-4 w-[65%]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[55%] flex flex-col gap-6 items-center pt-10 pr-6">
              <CustomInput
                errors={errors}
                label="聯絡人名稱"
                id="name"
                type="text"
                register={register}
                defaultValue="Albert"
              />
              <CustomInput
                errors={errors}
                label="聯絡人職稱"
                id="title"
                type="text"
                register={register}
                defaultValue="CFO"
              />
              <CustomInput
                errors={errors}
                label="聯絡人Email"
                id="email"
                type="text"
                register={register}
                defaultValue="albert@xholding.com"
              />
              <CustomInput
                errors={errors}
                label="聯絡人電話"
                id="phone"
                type="text"
                register={register}
                defaultValue="02-1234 5678"
              />
              <div className="w-full">
                <CustomInput
                  errors={errors}
                  label="密碼"
                  id="password"
                  type="password"
                  register={register}
                  defaultValue="************"
                  callback={() => setIsPasswordClicked(true)}
                />
                {isPasswordClicked && (
                  <Fragment>
                    <div className="flex justify-end">
                      <p className="text-xs text-white w-[68%] my-1">
                        提示：密碼需至少有12字元，請混和使用大小寫字母、數字，使密碼更加安全。
                      </p>
                    </div>
                    <CustomInput
                      id="confirmPassword"
                      errors={errors}
                      label=""
                      type="text"
                      register={register}
                      defaultValue=""
                      placeholder="確認新密碼"
                    />
                    <div className="flex justify-end mt-4">
                      <CustomButton variant="rounded" className="bg-pale-yellow !text-grey">
                        確認變更密碼
                      </CustomButton>
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AccountInformation;

interface CustomInputIProps {
  id: 'name' | 'title' | 'email' | 'phone' | 'password' | 'confirmPassword';
  register: UseFormRegister<AccountInfoValues>;
  defaultValue?: string;
  type: string;
  placeholder?: string;
  label?: string;
  errors: FieldErrors<AccountInfoValues>;
  callback?: () => void;
}

const CustomInput = ({ id, register, defaultValue, type, placeholder, label, errors, callback }: CustomInputIProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [updateType, setUpdateType] = useState<boolean>(true);

  return (
    <div
      className={classNames('flex justify-between w-full gap-7 items-center', {
        'mb-0.5': errors && errors[id]
      })}
    >
      <p className="2xl:text-xl font-bold xl:text-base text-sm text-white text-right whitespace-nowrap w-[24%] tracking-[2px]">
        {label}
      </p>
      <div className={classNames('flex flex-col relative w-[76%]', { 'gap-0.5': errors && errors[id] })}>
        <div className="rounded-full px-4 py-1 xl:py-2 2xl:py-3 bg-white flex justify-between">
          <input
            defaultValue={defaultValue}
            className="outline-none bg-transparent w-[90%] text-navy-blue text-lg font-semibold 2xl:text-xl 2xl:font-bold"
            {...register(id)}
            placeholder={placeholder}
            type={updateType && id === 'confirmPassword' ? 'password' : type}
            onFocus={() => {
              setEdit(true);
              if (id === 'password' && callback) {
                callback();
              }
            }}
          />
          {id === 'confirmPassword' ? (
            <img
              src="/v2/icon/eye-icon.svg"
              alt="sacurn"
              className="h-6 w-6 object-contain"
              onClick={() => setUpdateType(!updateType)}
            />
          ) : edit ? (
            <img src="/v2/icon/tick-icon.svg" alt="sacurn" className="h-6 w-6 object-contain" />
          ) : (
            <img src="/v2/icon/edit-icon.svg" alt="sacurn" className="h-6 w-6 object-contain" />
          )}
        </div>
        <div className="relative w-full">
          {errors && errors[id] && (
            <p className="min-[1500px]:text-xs min-[1200px]:text-xms text-xms text-bright-red ml-4 absolute">
              {errors[id]?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
