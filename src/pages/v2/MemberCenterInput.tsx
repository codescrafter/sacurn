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
const MemberCenterInput = ({ id, heading, type, register, isRequired, errorMessage, errors }: IProps) => {
  return (
    <div className="flex flex-col ">
      <div className="flex  justify-between items-center w-72 gap-3">
        <label htmlFor="name" className="text-xl font-bold text-deepseablue">
          {heading}
        </label>
        <input
          type="text"
          className="rounded-full h-10 w-56 bg-white outline-none px-4"
          {...register(id as 'name' | 'phone' | 'professionaltitle' | 'email' | 'phone' | 'extention', {
            required: isRequired
          })}
          typeof={type}
        />
      </div>
      {errors && errors[id] && <p className="text-xs text-sunset-orange ml-19 mt-1">{errorMessage}</p>}
    </div>
  );
};

export default MemberCenterInput;
