interface SubmitButtonProps {
  text: string | undefined;
  className: string | undefined;
}

const SubmitButton = ({ text, className }: SubmitButtonProps) => {
  return (
    <button
      className={`text-white bg-navy-blue px-4.5 py-0.7 font-bold rounded-md absolute bottom-7 right-5 ${className}`}
      type="submit"
    >
      {text || '儲存 | 下一步'}
    </button>
  );
};

export default SubmitButton;
