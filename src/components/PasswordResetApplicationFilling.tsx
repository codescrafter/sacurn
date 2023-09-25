import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useState } from 'react';
import { useForm, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

import { PASSWORD_RESET_STEPS } from '@/util/constants';

import CustomButton from './CustomButton';

const schema = yup
  .object({
    account_number: yup.string().required('Account Number is Required'),
    email: yup.string().email('Not a proper Email').required('Email is Required')
  })
  .required();

const PasswordResetApplicationFilling = () => {
  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const [isChecked, setIsChecked] = useState(false);
  const isCheckedHandler = (value: boolean) => {
    setIsChecked(value);
  };

  const onSubmit = handleSubmit((data) => data);

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-y-8 w-[93%] mx-auto">
        <div className="bg-white rounded-2.5xl shadow-completed-box flex w-full justify-center items-center gap-40 h-31">
          <CustomInput heading="帳號" placeholder="請輸入帳號" register={register} id="account_number" />
          <CustomInput heading="email" placeholder="請輸入完整email" register={register} id="email" />
        </div>
        <div className="flex h-[430px] gap-12">
          <div className="bg-white rounded-2.5xl shadow-completed-box w-[50%] py-14 text-lg font-bold flex flex-col justify-between">
            <p className="w-[90%] mx-auto mb-10">
              <span className="text-bright-red">*</span>本人已於合理期間(至少五日)詳細審閱個人
              <span className="text-bright-red">「Sacurn服務條款」</span>
              內容，並充分瞭解且確認同意遵守，並已詳閱Sacurn服務條款中以顯著字體表示之重要約定事項，有疑問之處業經本人向貴司提出詢問並業經貴司說明及解答，對重要約定事項已充分理解並同意其內容。
            </p>
            <div className="flex mx-auto min-[1300px]:gap-9 min-[1100px]:gap-6 gap-4 w-max">
              <div className="w-max relative">
                {isChecked && <img src="/images/password-reset/confirm.svg" className="absolute -top-3 right-6" />}
                <CustomButton
                  children="我同意"
                  className={classNames(
                    'border-2 rounded-full min-[1300px]:text-xl min-[1100px]:text-lg text-base font-bold min-[1300px]:w-[230px] min-[1100px]:w-[190px] w-[170px] h-[53px]',
                    { 'border-bright-red': isChecked, 'border-navy-blue': !isChecked }
                  )}
                  variant="secondary"
                  type="button"
                  onClick={() => isCheckedHandler(true)}
                />
              </div>
              <CustomButton
                children="我不同意"
                className="border-navy-blue border-2 rounded-full min-[1300px]:text-xl min-[1100px]:text-lg text-base font-bold min-[1300px]:w-[230px] min-[1100px]:w-[190px] w-[170px] h-[53px]"
                variant="secondary"
                type="button"
                onClick={() => isCheckedHandler(false)}
              />
            </div>
          </div>
          <div className="pt-14 text-xl font-bold w-[50%]">
            提醒您
            <ul className="list-disc font-normal ml-8">
              {PASSWORD_RESET_STEPS.map((step) => {
                return <li>{step}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="w-max flex mx-auto mb-12.7 mt-6 gap-7">
          <CustomButton
            className="rounded-xl min-[1300px]:text-xl text-lg font-bold border-2 min-[1300px]:w-[197px] w-[175px] h-[40px]"
            children="取消申請"
            variant="secondary"
          />
          <CustomButton
            className="rounded-xl min-[1300px]:text-xl text-lg font-bold min-[1300px]:w-[197px] w-[175px] h-[40px]"
            children="下一步"
            variant="primary"
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

interface CustomInputProps {
  heading: string;
  placeholder: string;
  register: UseFormRegister<{ account_number: string; email: string }>;
  id: 'account_number' | 'email';
}

const CustomInput = ({ heading, placeholder, register, id }: CustomInputProps) => {
  return (
    <div className="flex items-center gap-5.2">
      <label className="min-[1300px]:text-xl text-lg text-navy-blue font-bold flex">
        <p className="text-bright-red">*</p>
        {heading}
      </label>
      <input
        className="rounded-md border border-navy-blue min-[1600px]:w-[350px] min-[1400px]:w-[320px] min-[1200px]:w-[280px] min-[1300px]:text-xl text-lg min-[1300px]:px-3 px-1.5 min-[1300px]:py-2.5 py-1 "
        placeholder={placeholder}
        {...register(id)}
      />
    </div>
  );
};

export default PasswordResetApplicationFilling;
