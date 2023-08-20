interface IProps {
  product: {
    imagePath: string;
    name: string;
  };
}

const WishListProdCard = ({ product }: IProps) => {
  return (
    <div className="flex flex-row px-5.7 py-3.2 min-[1700px]:w-[810px] min-[1500px]:min-w-[700px] min-[630px] w-auto bg-milky rounded-lg">
      <img
        className="min-[1700px]:w-[256px] min-[1700px]:h-[162px] min-[1500px]:min-w-[220px] min-[1200px]:min-w-[180px] min-w-[150px] w-auto min-[1500px]:h-[150px] min-[1200px]:h-[130px] h-[140px] rounded-lg mr-3"
        src={`/images/products-page/${product.imagePath}.png`}
      />
      <div className="flex flex-col w-full">
        <h1 className="min-[1500px]:text-lg min-[1200px]:text-base text-sm text-navy-blue font-bold">{product.name}</h1>
        <div className="flex flex-row">
          <p className="self-start min-[1500px]:text-xms text-xxs font-bold text-black">USD</p>
          <p className="self-center font-bold text-black min-[1500px]:text-lg min-[1200px]:text-base text-sm mx-0.5">
            $5.00~5.00
          </p>
          <p className="self-end min-[1500px]:text-xms text-xxs font-bold text-black">/Tonne</p>
        </div>
        <div className="flex flex-col w-full justify-end h-full items-end">
          <p className="text-grey min[1500px]:text-[13px] text-xxs">Item added July 3, 2023</p>
          <div className="flex flex-row gap-2 w-max">
            <button className="bg-pale-yellow rounded-lg min-[1500px]:px-8 px-5 mx-auto min-[1500px]:py-0.7 py-0.5">
              <img src={'/images/wishlist/dollar.svg'} className="min-[1500px]:w-3.2 w-2.5 min-[1500px]:h-5.5 h-4" />
            </button>
            <button className="border border-grey rounded-mdlg mx-auto min-[1500px]:px-4 px-2 min-[1500px]:py-0.7 py-0.5">
              <img src={'/images/wishlist/delete.svg'} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListProdCard;
