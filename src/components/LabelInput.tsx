import classNames from 'classnames';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface IProps {
  id: string;
  isRequired: boolean;
  type: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  heading: string;
  errorMessage?: string;
  varient?: 'medium' | 'small';
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
  varient
}: IProps) => {
  return (
    <div className="mb-5.5">
      <div className="flex gap-2.7 items-center ">
        <label
          className={classNames('text-base text-black leading-5 text-right', {
            'w-[144px]': varient === undefined || varient === 'medium',
            'w-[128px] font-bold': varient === 'small'
          })}
        >
          {heading} :
        </label>
        <input
          className={classNames(
            'rounded-full text-black shadow-company-registration-input bg-white  min-[1550px]:text-mdsm min-[1200px]:text-xms text-xxs outline-none ',
            {
              'w-[286px] h-9 px-2 py-3.5': varient === undefined || varient === 'medium',
              'min-[1700px]:w-[368px] min-[1500px]:w-[320px] min-[1200px]:w-[270px] w-[220px] min-[1550px]:h-9.5 min-[1200px]:h-7.5 h-6  px-2 py-2.5':
                varient === 'small'
            }
          )}
          {...register(id, { required: isRequired })}
          placeholder={placeholder}
          type={type}
        />
      </div>
      <div className="flex">
        <div
          className={classNames({
            'w-[160px]': varient === 'medium' || varient === undefined,
            'w-[145px]': varient === 'small'
          })}
        />
        {errors && errors[id] && <p className="text-xs mt-1 ml-2 text-bright-red">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default LabelInput;
