import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

import Layout from '@/components/v2/Layout';
import { AccountInformationTypes } from '@/type';

export interface AccountInfoValues {
  name: string;
  title: string;
  email: string;
  phone: string;
  password: string;
}

const Schema = yup.object({
  name: yup.string().required('姓名為必填項'),
  title: yup.string().required('職位名稱為必填項'),
  email: yup.string().email('Enter valid address').required('電子郵件為必填項'),
  phone: yup
    .string()
    .required('例如：0x-000111 或 09xx-000111')
    .matches(/^09\d{8}$/, '例如：0x-000111 或 09xx-000111'),
  password: yup.string().required('請輸入密碼')
});

const AccountInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AccountInfoValues>({ resolver: yupResolver(Schema) });

  // const [file, setFile] = useState<string>('/v2/user-info-form/default.svg');

  // function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
  //   if (event.target.files) {
  //     try {
  //       setFile(URL.createObjectURL(event.target.files[0]));
  //     } catch (err) {
  //       return;
  //     }
  //   }
  // }

  const onSubmit = handleSubmit(() => {});

  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <div className="mt-[124px] w-[90%] rounded-lg min-h-[450px] bg-transparent-blue opacity-[0.9] shadow-account-info-box">
          <div className="flex">
            <div className="w-[45%]">
              <div className="account-information-clip-path rounded-tl-lg rounded-bl-lg bg-white min-h-[450px]">
                <div className="p-8">
                  <div>
                    <div className="w-[90px] h-[90px] rounded-[50%] bg-[url('../public/v2/account-pic.svg')] flex items-end justify-center">
                      {/* <img src="/v2/account-pic.svg" alt="user image" className="w-full h-full object-contain" /> */}
                      <div className="bg-[#1e191999] w-[92%] h-[40%] flex items-center justify-center mb-0.5 rounded-b-[40px]">
                        <img src={'/v2/camera-icon.svg'} alt="user image" className="w-8 h-5 object-contain" />
                        {/* <input type="file" hidden onChange={handleChange} id="image" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    {ACCOUNT_INFORMATION.map(({ key, value }: AccountInformationTypes) => (
                      <div
                        key={key}
                        className="flex gap-2 text-navy-blue font-semibold 2xl:font-bold text-base 2xl:text-xl mb-4 2xl:mb-8 first:pr-16 w-full"
                      >
                        <p className="whitespace-nowrap w-[35%] xl:w-[28%]">{key}:</p>
                        <p className="xl:w-[72%]">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[55%] flex flex-col gap-6 items-center pt-10 pr-6">
              <CustomInput errors={errors} label="聯絡人名稱" id="name" type="text" register={register} />
              <CustomInput errors={errors} label="聯絡人職稱" id="title" type="text" register={register} />
              <CustomInput errors={errors} label="聯絡人Email" id="email" type="text" register={register} />
              <CustomInput errors={errors} label="聯絡人電話" id="phone" type="text" register={register} />
              <CustomInput errors={errors} label="密碼" id="password" type="text" register={register} />
            </div>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default AccountInformation;

interface CustomInputIProps {
  id: 'name' | 'title' | 'email' | 'phone' | 'password';
  register: UseFormRegister<AccountInfoValues>;
  type: string;
  placeholder?: string;
  label?: string;
  errors: FieldErrors<AccountInfoValues>;
}

const CustomInput = ({ id, register, type, placeholder, label, errors }: CustomInputIProps) => {
  return (
    <div
      className={classNames('flex justify-between w-full gap-7', {
        'mb-0.5': errors && errors[id]
      })}
    >
      <p className="2xl:text-xl font-bold xl:text-base text-sm text-white text-right whitespace-nowrap w-[24%]">
        {label}
      </p>
      <div className={classNames('flex flex-col relative w-[76%]', { 'gap-0.5': errors && errors[id] })}>
        <div className="rounded-full px-4 py-1 xl:py-2 2xl:py-3 bg-white flex justify-between">
          <input
            className="outline-none bg-transparent w-[90%]"
            {...register(id)}
            placeholder={placeholder}
            type={type}
          />
          <img src="/v2/icon/edit-icon.svg" alt="sacurn" className="h-6 w-6 object-contain" />
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

const ACCOUNT_INFORMATION: AccountInformationTypes[] = [
  {
    key: '公司名稱',
    value: '艾克斯厚定股份有限公司'
  },
  {
    key: '代表人',
    value: 'Musk'
  },
  {
    key: 'VAT號碼',
    value: '88888888'
  },
  {
    key: '公司電話',
    value: '02-1234 5678'
  },
  {
    key: '公司地址',
    value: '台北市中山區中山北路一段1號'
  }
];
