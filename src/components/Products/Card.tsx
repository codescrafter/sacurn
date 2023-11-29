interface CardProps {
  title: string;
  desc: string;
  img: string;
}
const Card = ({ title, desc, img }: CardProps) => {
  return (
    <div className="bg-card-bg-light rounded p-5">
      <div className="flex gap-4 items-center">
        <img src={img} />
        <h5 className="text-xl font-semibold text-white">{title}</h5>
      </div>
      <p className="text-white text-[15px]">{desc}</p>
    </div>
  );
};

export default Card;
