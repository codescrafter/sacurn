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

export type RepresentativeFormTypes = {
  representative_country: string;
  representative_id_card_number: string;
  representative_id_card_issue_date: string;
  representative_id_card_issue_location: string;
  // representative_id_card_front: string;
  // representative_id_card_back: string;
  representative_birthday: string;
};

const schema = yup
  .object({
    representative_country: yup.string().required('representative country is required'),
    representative_id_card_number: yup.string().required('representative id card number is required'),
    representative_id_card_issue_date: yup.string().required('representative id card issue date is required'),
    representative_id_card_issue_location: yup.string().required('representative id card issue location is required'),
    // representative_id_card_front: yup.string().required('representative id card front is required'),
    // representative_id_card_back: yup.string().required('representative id card back is required'),
    representative_birthday: yup.string().required('representative birthday is required')
  })
  .required();

const RepresentativeInfoForm = ({ nextStep }: IProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RepresentativeFormTypes>({ resolver: yupResolver(schema) });

  const updateCompany = useCompanyStore((state) => state.updateCompany);

  const onSubmit = handleSubmit(async (data) => {
    updateCompany(1, {
      representative_country: data.representative_country,
      representative_id_card_number: data.representative_id_card_number,
      representative_id_card_issue_date: data.representative_id_card_issue_date,
      representative_id_card_issue_location: data.representative_id_card_issue_location,
      representative_id_card_front:
        'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg',
      representative_id_card_back:
        'https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg'
    });
    nextStep(CompanyRegistrationSteps.FINANCIAL_INFO_FORM);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="mx-auto px-5 w-[570px]">
        <div className="flex flex-row mb-7">
          <h1 className="text-navy-blue text-2.5xl flex flex-row">
            <div className="bg-navy-blue px-0.5 h-full" />
            &nbsp;請填寫企業資料
          </h1>
        </div>
        <div>
          <div className="flex gap-2.7 mb-5.5">
            <p className="text-base text-black w-[144px] text-right">代表人國籍: </p>
            <div>
              <div className="flex gap-2.7 my-1">
                <div className="flex gap-0.5 items-center">
                  <input
                    type="radio"
                    {...register('representative_country')}
                    value="本國籍"
                    className="border-navy-blue w-3.2 checked:bg-navy-blue"
                  />
                  <label className="text-xs font-bold">本國籍</label>
                </div>
                <div className="flex gap-0.5 items-center">
                  <input
                    type="radio"
                    {...register('representative_country')}
                    value="外國籍"
                    className="border-navy-blue w-3.2 checked:bg-navy-blue"
                  />
                  <label className="text-xs font-bold">外國籍</label>
                </div>
                <div className="flex gap-0.5 items-center">
                  <input
                    type="radio"
                    {...register('representative_country')}
                    value="法人"
                    className="border-navy-blue w-3.2 checked:bg-navy-blue"
                  />
                  <label className="text-xs font-bold">法人</label>
                </div>
              </div>
              <SimpleSelect
                register={register}
                id="representative_id_card_number"
                className="w-[286px]"
                options={['國民身分證', '國民身分證', '國民身分證']}
              />
            </div>
          </div>
          <LabelInput
            register={register}
            type="text"
            id="representative_id_card_number"
            isRequired={true}
            heading="代表人身分證字號"
            placeholder="請輸入代表人身分證字號"
            errors={errors}
            errorMessage="必填字段"
          />
          <div className="flex gap-2.7 mb-5.5 items-center">
            <p className="text-base text-black w-[144px] text-right">身分證發證日期: </p>
            <div className="flex justify-between w-[286px] items-center">
              <SimpleSelect
                register={register}
                id="representative_id_card_issue_date"
                className="w-21.7"
                options={['年']}
              />
              /
              <SimpleSelect
                register={register}
                id="representative_id_card_issue_date"
                className="w-21.7"
                options={['年']}
              />
              /
              <SimpleSelect
                register={register}
                id="representative_id_card_issue_date"
                className="w-21.7"
                options={['年']}
              />
            </div>
          </div>
          <div className="flex gap-2.7 mb-5.5 items-center">
            <p className="text-base text-black w-[144px] text-right">身分證發證地點: </p>
            <SimpleSelect
              register={register}
              id="representative_id_card_issue_location"
              className="w-[87px]"
              options={['選擇', '選擇']}
            />
            <SimpleSelect
              register={register}
              id="representative_id_card_issue_location"
              className="w-[81px]"
              options={['初發', '初發']}
            />
          </div>
          <LabelInput
            register={register}
            type="text"
            id="representative_birthday"
            isRequired={true}
            heading="出生年月日"
            placeholder="YYYY-MM-DD"
            errors={errors}
            errorMessage="必填字段"
          />
          <div className="flex gap-2.7">
            <p className="text-black text-base min-w-[144px] text-right">身分證文件:</p>
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

export default RepresentativeInfoForm;

interface SimpleSelectProps {
  options: string[];
  register: UseFormRegister<RepresentativeFormTypes>;
  id: string;
  className: string;
}

const SimpleSelect = ({ register, className, id, options }: SimpleSelectProps) => {
  return (
    <select
      {...register(
        id as
          | 'representative_country'
          | 'representative_id_card_number'
          | 'representative_id_card_issue_date'
          | 'representative_id_card_issue_location'
          | 'representative_birthday',
        { required: true }
      )}
      className={classNames(
        'rounded-full text-black font-bold shadow-company-registration-input bg-white h-9 text-xs py-2 px-3.5 outline-none',
        className
      )}
    >
      {options.map((option) => {
        return (
          <option value={option} className="text-black">
            {option}
          </option>
        );
      })}
    </select>
  );
};

const UploadDocuments = ({ register }: { register: UseFormRegister<RepresentativeFormTypes> }) => {
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
              <input
                id="get-file"
                {...register}
                // {...register(
                //   `representative_id_card_front${item}` as
                //     | 'representative_id_card_front'
                //     | 'representative_id_card_back'
                // )}
                type="file"
                className="invisible"
              />
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

interface LabelInputProps {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder?: string;
  register: UseFormRegister<RepresentativeFormTypes>;
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
}: LabelInputProps) => {
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
            id as
              | 'representative_country'
              | 'representative_id_card_number'
              | 'representative_id_card_issue_date'
              | 'representative_id_card_issue_location'
              | 'representative_birthday',
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
