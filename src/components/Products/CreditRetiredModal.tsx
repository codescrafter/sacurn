import { Backdrop } from '@mui/material';
import { useState } from 'react';

const CreditRetiredModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <p className="text-pale-yellow text-lg font-bold text-right" onClick={() => setShowModal(true)}>
        more
      </p>
      <Backdrop open={showModal} onClick={() => setShowModal(false)}>
        <div className="bg-white w-[752px] h-[409px] rounded-[10px] flex flex-col items-center justify-center absolute right-[13.5%]">
          <img
            src="/images/products-page/ic_circle_close.svg"
            alt="close"
            width={32}
            height={32}
            className="absolute top-2.5 right-3 cursor-pointer"
            onClick={() => setShowModal(false)}
          />
          <div>
            <p className="text-[30px] font-bold leading-10">% of Issued credits Retired (2016+)</p>
            <p className="text-[25px] font-bold tracking-[0.75px]">2016 - 52%</p>
            <p className="text-[25px] font-bold tracking-[0.75px]">2017 - 4%</p>
            <p className="text-[25px] font-bold tracking-[0.75px]">2018 - 68%</p>
            <p className="text-[25px] font-bold tracking-[0.75px]">2019 - 35%</p>
            <p className="text-[25px] font-bold tracking-[0.75px]">2020 - 73%</p>
            <p className="text-[25px] font-bold tracking-[0.75px]">2021 - 12%</p>
            <p className="text-[25px] font-bold tracking-[0.75px]">2022 - 12%</p>
            <p className="text-[25px] font-bold tracking-[0.75px]">2023 - 12%</p>
          </div>
        </div>
      </Backdrop>
    </>
  );
};

export default CreditRetiredModal;
