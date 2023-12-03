// import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';

import CustomButton from './CustomButton';
interface IProps {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export default function EnvironmentalModal({ open, setOpen }: IProps) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="lg"
      sx={{
        '& .MuiPaper-rounded': {
          borderRadius: '10px'
        }
      }}
    >
      <DialogTitle id="alert-dialog-title">
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <img src="/images/sales/cross_icon.png" alt="" />
        </IconButton>
      </DialogTitle>

      <div className="w-full px-18 flex pb-7">
        <div className="w-[50%] border-2 border-bright-blue rounded-[10px] py-5  px-5">
          <div>
            <h1 className="text-3xl text-black font-bold">
              Andes Inorganic Soil ACR Emission Reduction Tonnes Spot ProductCarbon
            </h1>
          </div>

          <div className="pb-10">
            {data.map((sectionData, index) => {
              return (
                <div key={index}>
                  <div className=" flex justify-between pt-10 pb-15">
                    <div className="flex flex-col gap-4 text-dark-grey ">
                      <p className="">{sectionData.section} </p>
                      {sectionData.details.map((detail, i) => (
                        <p key={i}>{detail.label}</p>
                      ))}
                    </div>
                    <div className="flex flex-col gap-4 text-right text-xl font-bold text- black">
                      {sectionData.values.map((val, i) => (
                        <p key={i}>{val.value}</p>
                      ))}
                    </div>
                  </div>
                  {index !== data.length - 1 && <hr className="border-silverstone" />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-[50%] border">
          <div className="font-bold">
            <div className="text-black ">
              <h2 className="text-4xl ">商品上架作業</h2>
              <h2 className="text-3xl">會員卡認證程序</h2>
            </div>
            <div>
              <p className="text-grey text-3xl">環境監測成功</p>
              <p className="text-bright-red text-2xl  ">請插入會員卡並登入驗證</p>
              <CustomButton variant="primary" className="rounded-full px-10 h-12 text-lg mt-3">
                登入驗證
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
const data = [
  {
    section: 'Vintage',
    details: [{ label: '平均單價' }, { label: '持有數量' }],
    values: [{ value: '1991/10/30' }, { value: '$500' }, { value: '99,999 噸' }]
  },
  {
    section: '上架數量',
    details: [{ label: '每噸單價' }, { label: '最低下單量' }],
    values: [{ value: '99,999 噸' }, { value: '999,999,999 元' }, { value: '99,999 噸' }]
  }
];
