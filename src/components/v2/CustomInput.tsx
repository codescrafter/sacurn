import classNames from 'classnames';
import { UseFormRegister } from 'react-hook-form';

import { UserInfoFormValues } from './UserInfoForm';
interface CustomInputIProps {
  id: 'name' | 'job_title' | 'email' | 'telephone' | 'extension' | 'operation_permission';
  register: UseFormRegister<UserInfoFormValues>;
  type: string;
  placeholder?: string;
  heading?: string;
  className?: string;
}

const CustomInput = ({ id, register, type, placeholder, heading, className }: CustomInputIProps) => {
  return (
    <div className="flex items-center gap-7.5">
      <p className="text-xl text-navy-blue text-right font-bold min-w-[54px]">{heading}</p>
      <div>
        <input
          className={classNames('rounded-full shadow-input-field h-11.5 px-2 py-1 outline-none w-[296px]', className)}
          {...register(id)}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </div>
  );
};

export default CustomInput;
