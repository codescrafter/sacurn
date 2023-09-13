import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useState } from 'react';
import { FieldErrors, FieldValues, useForm, UseFormRegister } from 'react-hook-form';
import * as yup from 'yup';

import { useCompanyStore } from '@/store/company';
import { useUserStore } from '@/store/user';
import { InputSize } from '@/type';
import { CompanyRegistrationSteps, FINANCIAL_CATEGORY, FINANCIAL_INSTUITION_LIST } from '@/util/constants';

import CustomButton from './CustomButton';
import UploadBankBookDocuments from './UploadBankBookDocuments';

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
  account_image: yup.mixed(),
  account_number: yup
    .string()
    .required()
    .min(14, 'Must be exactly 14 digits')
    .max(14, 'Must be exactly 14 digits')
    .matches(/^[0-9]+$/, 'Must be only digits')
  // .matches(/^\d+$/, 'The field should have digits only')
});

const FinancialInfoForm = ({ nextStep }: IProps) => {
  const companyId = useUserStore.getState().companyId;
  const [imageErrorMessage, setImageErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FinancialFormTypes>({ resolver: yupResolver(schema) });
  const [uploadedDocs, setUploadedDocs] = useState<File[]>([]);
  const [SelectedFinancialInstitution, setSelectedFinancialInstitution] = useState<string>('本國銀行');

  const updateCompany = useCompanyStore((state) => state.updateCompany);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (!uploadedDocs.length) return setImageErrorMessage('請上傳存摺影本圖檔');
      if (!companyId) return;
      const formData = new FormData();
      formData.append('financial_institution_type', data.financial_institution_type);
      formData.append('financial_institution_name', data.financial_institution_name);
      formData.append('financial_institution_branch_name', data.financial_institution_branch_name);
      formData.append('account_name', data.account_name);
      formData.append('account_number', data.account_number);
      formData.append('account_image', uploadedDocs?.[0]);
      await updateCompany(companyId, formData);
      const isSuccess = useCompanyStore.getState().isSuccess;
      if (isSuccess) nextStep(CompanyRegistrationSteps.TERMS_CONFIRMATION);
      useCompanyStore.setState({ isSuccess: false });
    } catch (error) {
      console.log(error);
    }
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
          <div className="flex items-center mb-5.5 gap-2.7">
            <h2 className="text-black text-base min-w-[144px] leading-5 text-right">選擇金融機構分類 :</h2>
            <select
              {...register(
                `financial_institution_type`,

                { required: true }
              )}
              className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-9 text-xs py-2 px-3.5 outline-none w-[286px]"
              onChange={(e) => setSelectedFinancialInstitution(e.target.value)}
              value={SelectedFinancialInstitution}
            >
              {FINANCIAL_CATEGORY?.map((financial) => (
                <option value={financial.value} className="text-black">
                  {financial.value}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center mb-5.5 gap-2.7">
            <h2 className="text-black text-base min-w-[144px] leading-5 text-right">選擇銀行或郵局 :</h2>
            <select
              {...register(`financial_institution_name`, { required: true })}
              className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-9 text-xs py-2 px-3.5 outline-none w-[286px]"
            >
              {FINANCIAL_INSTUITION_LIST?.filter((item) => item.slug === SelectedFinancialInstitution).map(
                ({ value }) =>
                  value.map((item) => (
                    <option value={item} className="text-black">
                      {item}
                    </option>
                  ))
              )}
            </select>
          </div>
          <LabelInput
            type="text"
            register={register}
            id="financial_institution_branch_name"
            heading="選擇分行或支局"
            // options={['分行或支局名稱', '分行或支局名稱']}
            isRequired={true}
            errors={errors}
            errorMessage="必填字段"
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
            <UploadBankBookDocuments
              uploadedDocs={uploadedDocs}
              setUploadedDocs={setUploadedDocs}
              errorMessage={imageErrorMessage}
              setErrorMessage={setImageErrorMessage}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 right-5 flex gap-2">
        <CustomButton
          className="px-4.5 py-0.7 font-bold  rounded-md border border-navy-blue"
          variant="secondary"
          type="button"
          onClick={() => {
            nextStep(CompanyRegistrationSteps.REPRESENTATIVE_INFO_FORM);
          }}
        >
          修改 | 上一步
        </CustomButton>
        <CustomButton className="text-white bg-navy-blue px-4.5 py-0.7 font-bold rounded-md " type="submit">
          儲存 | 下一步
        </CustomButton>
      </div>
    </form>
  );
};

export default FinancialInfoForm;

// interface SimpleSelectProps {
//   options: string[];
//   register: UseFormRegister<FinancialFormTypes>;
//   id: string;
//   heading: string;
// }

// const LabelSelect = ({ register, id, options, heading }: SimpleSelectProps) => {
//   return (
//     <div className="flex items-center mb-5.5 gap-2.7">
//       <h2 className="text-black text-base min-w-[144px] leading-5 text-right">{heading} :</h2>
//       <select
//         {...register(
//           id as 'financial_institution_type' | 'financial_institution_name' | 'financial_institution_branch_name',

//           { required: true }
//         )}
//         className="rounded-full text-black font-bold shadow-company-registration-input bg-white h-9 text-xs py-2 px-3.5 outline-none w-[286px]"
//       >
//         {options.map((option) => {
//           return (
//             <option value={option} className="text-black">
//               {option}
//             </option>
//           );
//         })}
//       </select>
//     </div>
//   );
// };

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
            'rounded-full text-black shadow-company-registration-input bg-white  min-[1550px]:text-mdbase text-xs outline-none ',
            {
              'w-[286px] h-9 px-2 py-1': size === undefined || size === InputSize.MEDIUM,
              'min-[1700px]:w-[368px] min-[1500px]:w-[320px] min-[1200px]:w-[270px] w-[220px] min-[1550px]:h-9.5 h-7.5  px-2 py-2.5':
                size === InputSize.SMALL
            }
          )}
          {...register(id as 'account_name' | 'account_number', {
            required: isRequired
          })}
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
