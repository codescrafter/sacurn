import { FieldValues, useForm, UseFormRegister } from 'react-hook-form';

import CompanyDocumentUpload from './CompanyDocumentUpload';
import CustomButton from './CustomButton';
import LabelInput from './LabelInput';
interface IProps {
  nextStep: (val: number) => void;
}

const FinancialInfoForm = ({ nextStep }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(() => {
        nextStep(3);
      })}
    >
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
            id="finan_institution_cat"
            heading="選擇金融機構分類"
            options={['請選擇金融機構分類', '請選擇金融機構分類']}
          />
          <LabelSelect
            register={register}
            id="finan_institution_name"
            heading="選擇銀行或郵局"
            options={['金融機構名稱', '金融機構名稱']}
          />
          <LabelSelect
            register={register}
            id="finan_institution_branch"
            heading="選擇分行或支局"
            options={['分行或支局名稱', '分行或支局名稱']}
          />
          <LabelInput type="text" register={register} id="account_name" isRequired={false} heading="戶名" />
          <LabelInput
            type="text"
            register={register}
            id="account_name"
            isRequired={true}
            heading="帳號"
            errors={errors}
            errorMessage="( 帳號長度限制為14碼 )"
          />
          <div className="flex gap-2.7">
            <h2 className="text-black text-base min-w-[144px] leading-5 text-right">存摺封面 : </h2>
            <CompanyDocumentUpload register={register} />
          </div>
        </div>
      </div>
      <CustomButton className="text-white bg-navy-blue px-4.5 py-0.7 font-bold rounded-md absolute bottom-7 right-5">
        '储存 | 下一步'
      </CustomButton>
    </form>
  );
};

export default FinancialInfoForm;

interface SimpleSelectProps {
  options: string[];
  register: UseFormRegister<FieldValues>;
  id: string;
  heading: string;
}

const LabelSelect = ({ register, id, options, heading }: SimpleSelectProps) => {
  return (
    <div className="flex items-center mb-5.5 gap-2.7">
      <h2 className="text-black text-base min-w-[144px] leading-5 text-right">{heading} :</h2>
      <select
        {...register(id)}
        className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-9 text-xs py-2 px-3.5 outline-none w-[286px]"
      >
        {options.map((option) => {
          return <option className="text-black">{option}</option>;
        })}
      </select>
    </div>
  );
};
