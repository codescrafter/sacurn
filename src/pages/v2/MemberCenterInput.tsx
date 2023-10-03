// import { error } from 'console';
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
}
const MemberCenterInput = ({ id, heading, type, register, isRequired, errorMessage, errors,clas }: IProps) => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between items-center  gap-3 md:w-full md:gap-2 xl:w-full">
        <label htmlFor="name" className="text-xl font-bold text-deepseablue md:text-base xl:text-xl">
          {heading}
        </label>
        <input
          type="text"
          className={classNames(
            'rounded-full w-54 py-3 bg-white outline-none px-4 md:w-[78%] xl:w-[80%]'
            className
          )}
          className="rounded-full w-54 py-3 bg-white outline-none px-4 md:w-[78%] xl:w-[80%] "
          {...register(id as 'name' | 'phone' | 'professionaltitle' | 'email' | 'phone' | 'extention', {
            required: isRequired
          })}
          // className={classNames(
          //   'rounded-full shadow-input-field min-[1600px]:h-11.5 min-[1600px]:w-[296px] min-[1500px]:h-10 min-[1500px]:w-[260px] min-[1300px]:h-8.5 min-[1300px]:w-[215px] h-7 w-[165px] px-2 py-1 outline-none ',
          //   className
          // )}
          typeof={type}
        />
      </div>
      {errors && errors[id] && <p className="text-xs text-sunset-orange ml-19 mt-1">{errorMessage}</p>}
    </div>
  );
};

export default MemberCenterInput;
