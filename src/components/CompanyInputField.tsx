import classNames from 'classnames';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

// import { ExtendedCompany } from '@/libs/api';
import { InputSize } from '@/type';

import { FormValues } from './CompanyInfoForm';

interface IProps {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder?: string;
  register: UseFormRegister<FormValues>;
  errors?: FieldErrors<FieldValues>;
  heading: string;
  errorMessage?: string;
  size?: InputSize;
  value?: string;
}

const CompanyInputField = ({
  id,
  type,
  placeholder,
  register,
  errors,
  heading,
  isRequired,
  errorMessage,
  size
}: IProps) => {
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
          disabled={!id}
          {...register(
            id as
              | 'id'
              | 'registration_document'
              | 'created_at'
              | 'updated_at'
              | 'name'
              | 'code'
              | 'representative'
              | 'capital'
              | 'founding_date'
              | 'phone'
              | 'contact_address',
            { required: isRequired }
          )}
          // value={value && value}
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

export default CompanyInputField;
