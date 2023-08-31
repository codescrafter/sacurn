import classNames from 'classnames';

interface IProps {
  type?: 'text' | 'password' | 'number' | 'email';
  placeholder?: string;
  value: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ type = 'text', placeholder, className, value, onChange }: IProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames(
        'rounded-full shadow-operator-signup-input bg-white min-[1550px]:h-17.5 min-[1200px]:h-13.2 h-11.5 px-5 py-5.7 text-black min-[1550px]:text-xl min-[1200px]:text-lg text-base outline-none',
        className
      )}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
