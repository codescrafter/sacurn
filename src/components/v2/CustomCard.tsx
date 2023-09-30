import CustomButton from '../CustomButton';

interface CustomCardProps {
  name: string;
  title: string;
  subTitle: string;
  info: string;
  responseTitle: string;
  responseDetail?: string;
  buttonText?: string;
  terms?: string;
}

const CustomCard = ({
  name,
  title,
  subTitle,
  info,
  responseTitle,
  responseDetail,
  buttonText,
  terms
}: CustomCardProps) => {
  return (
    <div className="w-[310px] flex flex-col justify-center gap-5">
      <h5 className="text-navy-blue text-[28px] font-extrabold">{name}</h5>
      <div className="w-full min-h-[500px] bg-white rounded-[10px] px-6 pb-2">
        <h6 className="text-[30px] font-bold text-black pt-12 pb-8">{title}</h6>
        <p className="text-2xl">{subTitle}</p>
        <h2 className="text-navy-blue text-5xl font-extrabold pt-3 pb-10">{info}</h2>
        <div className="flex flex-col gap-4 h-[220px] justify-between items-center">
          <p className="text-2xl">{responseTitle}</p>
          {responseDetail && <p className="text-lg">{responseDetail}</p>}
          {buttonText && (
            <CustomButton className="px-8 py-1.5 text-lg font-bold rounded-[10px] mb-10">{buttonText}</CustomButton>
          )}
        </div>
        {terms && <p className="text-[10px] text-center font-normal">{terms}</p>}
      </div>
    </div>
  );
};

export default CustomCard;
