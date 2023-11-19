const Card = () => {
  return (
    <div className="bg-card-bg-light rounded p-5">
      <div className="flex gap-4 items-center">
        <img src="/images/products/green/tree.svg" />
        <h5 className="text-xl font-semibold text-white">Over 3,550,000</h5>
      </div>
      <p className="text-white text-[17px]">tons of emission removals over the project’s lifetime to date.</p>
    </div>
  );
};

export default Card;
