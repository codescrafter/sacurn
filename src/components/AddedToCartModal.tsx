import React, { FC } from "react";

interface IProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddedToCartModal: FC<IProps> = ({ open, setOpen }) => {
  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-[#3D3D3D99] ">
          <div className="w-[657px] h-[310px] bg-white rounded-[10px] absolute top-[40%] right-[16%]">
            <img
              src={"/images/products-page/ic_circle_close.svg"}
              alt="close"
              width={32}
              height={32}
              className="absolute top-2.5 right-3 cursor-pointer"
              onClick={() => setOpen(false)}
            />
            <h3 className="text-[32px] font-semibold text-navy-blue text-center mt-[95px] mb-16 tracking-[3.52px]">
              商品已加入購物車
            </h3>
            <div className="flex justify-center gap-[100px]">
              <button
                className="w-[180px] h-[44px] rounded-[60px] bg-pale-yellow text-black text-xl font-normal"
                onClick={() => setOpen(false)}
              >
                返回商品列表
              </button>
              <button
                className="w-[180px] h-[44px] rounded-[60px] bg-transparent border-[5px] border-pale-yellow text-black text-xl font-normal"
                onClick={() => setOpen(false)}
              >
                前往購物車
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddedToCartModal;
