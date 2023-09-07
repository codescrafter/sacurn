import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useState } from 'react';
import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

import { useCompanyStore } from '@/store/company';
import { InputSize } from '@/type';
import { CompanyRegistrationSteps } from '@/util/constants';

import CustomButton from './CustomButton';

interface IProps {
  nextStep: (val: number) => void;
}

export type FinancialFormTypes = {
  financial_institution_type: string;
  financial_institution_name: string;
  financial_institution_branch_name: string;
  account_name: string;
  account_number: string;
  account_image?: string;
};

const schema = yup.object({
  financial_institution_type: yup.string().required(),
  financial_institution_name: yup.string().required(),
  financial_institution_branch_name: yup.string().required(),
  account_name: yup.string().required(),
  account_number: yup.string().required(),
  account_image: yup.string()
});

const FinancialInfoForm = ({ nextStep }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FinancialFormTypes>({ resolver: yupResolver(schema) });

  const updateCompany = useCompanyStore((state) => state.updateCompany);

  const onSubmit = handleSubmit(async (data) => {
    await updateCompany(1, {
      financial_institution_type: data.financial_institution_type,
      financial_institution_name: data.financial_institution_name,
      financial_institution_branch_name: data.financial_institution_branch_name,
      account_name: data.account_name,
      account_number: data.account_number,
      account_image:
        'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'
    });
    nextStep(CompanyRegistrationSteps.FINANCIAL_INFO_FORM);
  });
  return (
    <form onSubmit={onSubmit}>
      <div className="mx-auto px-5 w-[570px]">
        <div className="flex flex-row mb-13.7">
          <h1 className="text-navy-blue text-2.5xl flex flex-row">
            <div className="bg-navy-blue px-0.5 h-full" />
            &nbsp;請填寫金融機構帳戶資料
          </h1>
        </div>
        <div>
          <LabelSelect
            register={register}
            id="financial_institution_type"
            heading="選擇金融機構分類"
            options={['請選擇金融機構分類', '請選擇金融機構分類']}
          />
          <LabelSelect
            register={register}
            id="financial_institution_name"
            heading="選擇銀行或郵局"
            options={['金融機構名稱', '金融機構名稱']}
          />
          <LabelSelect
            register={register}
            id="financial_institution_branch_name"
            heading="選擇分行或支局"
            options={['分行或支局名稱', '分行或支局名稱']}
          />
          <LabelInput
            type="text"
            register={register}
            id="account_name"
            isRequired={true}
            heading="戶名"
            errors={errors}
            errorMessage="必填字段"
          />
          <LabelInput
            type="text"
            register={register}
            id="account_number"
            isRequired={true}
            heading="帳號"
            errors={errors}
            errorMessage="( 帳號長度限制為14碼 )"
          />
          <div className="flex gap-2.7">
            <h2 className="text-black text-base min-w-[144px] leading-5 text-right">存摺封面 : </h2>
            <UploadDocuments register={register} />
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 right-5 flex gap-2">
        <CustomButton
          className="px-4.5 py-0.7 font-bold  rounded-md border border-navy-blue"
          variant="secondary"
          type="button"
        >
          修改 | 上一步
        </CustomButton>
        <CustomButton className="text-white bg-navy-blue px-4.5 py-0.7 font-bold rounded-md " type="submit">
          儲存
        </CustomButton>
      </div>
    </form>
  );
};

export default FinancialInfoForm;

interface SimpleSelectProps {
  options: string[];
  register: UseFormRegister<FinancialFormTypes>;
  id: string;
  heading: string;
}

const LabelSelect = ({ register, id, options, heading }: SimpleSelectProps) => {
  return (
    <div className="flex items-center mb-5.5 gap-2.7">
      <h2 className="text-black text-base min-w-[144px] leading-5 text-right">{heading} :</h2>
      <select
        {...register(
          id as 'financial_institution_type' | 'financial_institution_name' | 'financial_institution_branch_name',

          { required: true }
        )}
        className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-9 text-xs py-2 px-3.5 outline-none w-[286px]"
      >
        {options.map((option) => {
          return (
            <option value={option} className="text-black">
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

interface LabelProps {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder?: string;
  register: UseFormRegister<FinancialFormTypes>;
  errors?: FieldErrors<FieldValues>;
  heading: string;
  errorMessage?: string;
  size?: InputSize;
}

const LabelInput = ({
  id,
  type,
  placeholder,
  register,
  errors,
  heading,
  isRequired,
  errorMessage,
  size
}: LabelProps) => {
  return (
    <div className="mb-5.5">
      <div className="flex gap-2.7 items-center ">
        <label
          className={classNames('text-base text-black leading-5 text-right', {
            'w-[144px]': size === undefined || size === InputSize.MEDIUM,
            'w-[128px] font-bold': size === InputSize.SMALL
          })}
        >
          {heading} :
        </label>
        <input
          className={classNames(
            'rounded-full text-black shadow-company-registration-input bg-white  min-[1550px]:text-mdbase min-[1200px]:text-xms text-xxs outline-none ',
            {
              'w-[286px] h-9 px-2 py-3.5': size === undefined || size === InputSize.MEDIUM,
              'min-[1700px]:w-[368px] min-[1500px]:w-[320px] min-[1200px]:w-[270px] w-[220px] min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-6  px-2 py-2.5':
                size === InputSize.SMALL
            }
          )}
          {...register(
            id as 'account_name' | 'account_number',

            { required: isRequired }
          )}
          placeholder={placeholder}
          type={type}
        />
      </div>
      <div className="flex">
        <div
          className={classNames({
            'w-[160px]': size === InputSize.MEDIUM || size === undefined,
            'w-[145px]': size === InputSize.SMALL
          })}
        />
        {errors && errors[id] && <p className="text-xs mt-1 ml-2 text-bright-red">{errorMessage}</p>}
      </div>
    </div>
  );
};

const UploadDocuments = ({ register }: { register: UseFormRegister<FinancialFormTypes> }) => {
  const [documentQuantity, setDocumentQuantity] = useState(1);
  return (
    <div className="flex flex-col max-w-[372px] max">
      <p className="text-black min-[1500px]:text-base text-sm">
        影業登記文件檔上傳,限小於<span className="text-bright-red">2MB</span>的JPG、PNG檔案。
      </p>
      <p className="text-navy-blue underline">了解營業登記文件上傳...</p>
      <div className="flex flex-row flex-wrap max-w-[360px] gap-4 mt-2">
        {Array.from({ length: documentQuantity }, (value, index) => index + 1).map((item) => {
          return (
            <div className="flex flex-col rounded-xl border items-center border-silverstone h-23.2 w-26.7">
              <p className="text-[36px] text-black mt-2">{item}</p>
              <label className="rounded-full bg-navy-blue p-0.5 px-5 text-xms text-white" htmlFor="get-file">
                選擇
              </label>
              <input id="get-file" {...register('account_image')} type="file" className="invisible" />
            </div>
          );
        })}
        <div
          className="flex flex-col rounded-xl border border-silverstone bg-light-trans-grey items-center justify-center h-23.2 w-26.7"
          onClick={() => setDocumentQuantity((prev) => prev + 1)}
        >
          <img src="/images/operation-record/plus-icon.svg" alt="add new doc" />
        </div>
      </div>
    </div>
  );
};
