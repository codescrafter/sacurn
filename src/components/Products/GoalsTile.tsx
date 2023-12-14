import GoalDetailModal from './GoalDetailModal';

const GoalsTile = ({ title, description, img }: { title: string; description: string; img: string }) => {
  return (
    <div className="h-[147px] w-full max-w-[715px] flex gap-5">
      <img src={img} alt="goal" className="w-[90px] h-[90px]" />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <p className="text-white font-semibold text-2xl uppercase">{title}</p>
          <p className="text-white text-base text-[22px] text-left">{description}</p>
        </div>
        <GoalDetailModal
          icon={DUMMY_DETAILS.icon}
          title={DUMMY_DETAILS.title}
          shortDesc={DUMMY_DETAILS.shortDesc}
          details={DUMMY_DETAILS.details}
        />
      </div>
    </div>
  );
};

export default GoalsTile;

const DUMMY_DETAILS = {
  icon: '/images/products/goals/img-16.jpeg',
  title: 'SDG 16 Peace, justice and strong institutions',
  shortDesc:
    'Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.',
  details: ''
};
