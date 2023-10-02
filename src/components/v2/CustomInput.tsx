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
    <div
      className={classNames('flex items-center 2.3xl:gap-7.5 2xl:gap-6 xl:gap-5.5 gap-5 max-w-max', {
        'mb-0.5': errors && errors[id]
      })}
    >
      <p className="2.3xl:text-xl 2xl:text-lg xl:text-base text-sm text-navy-blue text-right font-bold 2.3xl:min-w-[54px] 2xl:min-w-[52px] xl:min-w-[51px] min-w-[50px]">
        {heading}
      </p>
      <div className={classNames('flex flex-col relative', { 'gap-0.5': errors && errors[id] })}>
        <input
          className={classNames(
            'rounded-full shadow-input-field 2.3xl:h-11.5 2.3xl:w-[296px] 2xl:h-10 2xl:w-[260px] xl:h-8.5 xl:w-[215px] h-7 w-[165px] px-2 py-1 outline-none ',
            className
          )}
          {...register(id)}
          placeholder={placeholder}
          type={type}
        />
        <div className="relative w-full">
          {errors && errors[id] && (
            <p className="2xl:text-xs 1.5lg:text-xms text-xms text-bright-red ml-4 absolute">{errors[id]?.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
