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

          <div className="pb-10">{/* map data */}</div>
        </div>
        <div className="w-[50%] border"></div>
      </div>
    </Dialog>
  );
}
