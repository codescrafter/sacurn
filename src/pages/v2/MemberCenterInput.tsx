// import { error } from 'console';
import classNames from 'classnames';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

import { FormValues } from './MemberCenter';
interface IProps {
  id: string;
  heading: string;
  type: string;
  isRequired: boolean;
  register: UseFormRegister<FormValues>;
  errors?: FieldErrors<FieldValues>;
  errorMessage?: string;
  isHalfWidth?: boolean;
  isleftmargin?: boolean;
}
const MemberCenterInput = ({
  id,
  heading,
  type,
  register,
  isRequired,
  errorMessage,
  isHalfWidth,
  isleftmargin,
  errors
}: IProps) => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center  gap-3 md:w-full md:gap-3 xl:w-full 2xl:gap-6">
        <label htmlFor="name" className="text-xl font-bold text-deepseablue md:text-sm xl:text-xl 2xl:text-2xl">
          {heading}
        </label>
        {/* <div className="w-full"> */}
        <input
          type="text"
          // className="rounded-full w-54 py-3 bg-white outline-none px-4 md:w-[78%] xl:w-[80%] "
          className={classNames(`rounded-full py-3 bg-white outline-none px-4 md:py-1 lg:py-2 xl:py-2.5 2xl:py-3`, {
            'w-54 md:w-[68%] lg:w-[75%] xl:w-[79%] 2xl:w-[80%]': !isHalfWidth,
            'w-26 md:w-[40%] xl:w-[44%]': isHalfWidth,
            // true
            '-mr-[0%]': !isleftmargin,
            'mr-[33%] md:mr-[28%] lg:mr-[33%] xl:mr-[35%]': isleftmargin
          })}
          {...register(id as 'name' | 'phone' | 'professionaltitle' | 'email' | 'phone' | 'extention', {
            required: isRequired
          })}
          typeof={type}
        />
        {/* </div> */}
      </div>
      {errors && errors[id] && <p className="text-xs text-sunset-orange ml-19 mt-1">{errorMessage}</p>}
    </div>
  );
};

export default MemberCenterInput;
