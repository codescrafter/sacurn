import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  id: string;
  placeholder?: string;
  isRequired: boolean;
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  errorText?: string;
}

const InputWithLabel = ({ id, label, isRequired, type, register, errors, errorText, placeholder }: IProps) => {
  return (
    <div className="flex gap-4 mb-5.5 items-center">
      <label className="w-[122px] text-right text-black font-normal text-base leading-5">{label}</label>
      <div>
        <input
          className="border border-gray-400 xl:w-[368px] w-[270px] text-black border-none outline-none py-2 px-3.5 text-xs font-bold leading-normal rounded-full"
          type={type}
          placeholder={placeholder}
          {...(register(id), { required: isRequired })}
        />
        {errors && errors.member_phone && <p className="text-xs mt-1 ml-2 text-bright-red">{errorText}</p>}
      </div>
    </div>
  );
};

export default InputWithLabel;
