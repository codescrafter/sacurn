import classNames from 'classnames';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

import { UserInfoFormValues } from './UserInfoForm';
interface CustomInputIProps {
  id: 'name' | 'job_title' | 'email' | 'telephone' | 'extension' | 'operation_permission';
  register: UseFormRegister<UserInfoFormValues>;
  type: string;
  placeholder?: string;
  heading?: string;
  className?: string;
  errors: FieldErrors<UserInfoFormValues>;
}

const CustomInput = ({ id, register, type, placeholder, heading, className, errors }: CustomInputIProps) => {
  return (
    <div className={classNames('flex items-center gap-7.5', { 'mb-0.5': errors && errors[id] })}>
      <p className="text-xl text-navy-blue text-right font-bold min-w-[54px]">{heading}</p>
      <div className={classNames('flex flex-col relative', { 'gap-0.5': errors && errors[id] })}>
        <input
          className={classNames('rounded-full shadow-input-field h-11.5 px-2 py-1 outline-none w-[296px]', className)}
          {...register(id)}
          placeholder={placeholder}
          type={type}
        />
        <div className="relative">
          {errors && errors[id] && <p className="text-xs text-bright-red ml-4 absolute">{errors[id]?.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
