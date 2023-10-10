import classNames from 'classnames';
import { DeepMap, FieldError, FieldValues, Path, UseFormRegister } from 'react-hook-form';

// import { UserInfoFormValues } from './UserInfoForm';
interface CustomInputIProps<TFormValues extends FieldValues> {
  id: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
  type: string;
  placeholder?: string;
  label?: string;
  className?: string;
  errors?: Partial<DeepMap<TFormValues, FieldError>>;
}

const CustomInput = <TFormValues extends FieldValues>({
  id,
  register,
  type,
  placeholder,
  label,
  className,
  errors
}: CustomInputIProps<TFormValues>) => {
  return (
    <div
      className={classNames(
        'flex items-center min-[1600px]:gap-7.5 min-[1500px]:gap-6 min-[1300px]:gap-5.5 gap-5 max-w-max',
        {
          'mb-0.5': errors && errors[id]
        }
      )}
    >
      <p className="min-[1600px]:text-xl min-[1500px]:text-lg min-[1300px]:text-base text-sm text-navy-blue text-right font-bold min-[1600px]:min-w-[54px] min-[1500px]:min-w-[52px] min-[1300px]:min-w-[51px] min-w-[50px]">
        {label}
      </p>
      <div className={classNames('flex flex-col relative', { 'gap-0.5': errors && errors[id] })}>
        <input
          className={classNames(
            'rounded-full shadow-input-field min-[1700px]:h-11.5 min-[1700px]:w-[296px] min-[1500px]:h-10 min-[1500px]:w-[260px] min-[1300px]:h-8.5 min-[1300px]:w-[215px] h-7 w-[165px] px-2 py-1 outline-none ',
            className
          )}
          {...register(id)}
          placeholder={placeholder}
          type={type}
        />
        <div className="relative w-full">
          {errors && errors[id] && (
            <p className="min-[1500px]:text-xs min-[1200px]:text-xms text-xms text-bright-red ml-4 absolute">
              {errors[id]?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
