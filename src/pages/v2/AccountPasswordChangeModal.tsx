import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

import CustomButton from '@/components/CustomButton';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));
const AccountPasswordChangeModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        onClick={handleClickOpen}
        className="relative inline-block border-b-2 font-bold text-pale-yellow cursor-pointer text-xl"
      >
        變更密碼
      </button>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="sm"
        sx={{
          '& .MuiPaper-rounded': {
            borderRadius: '12px'
          }
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            color: '#005487'
          }}
        >
          <CancelOutlinedIcon sx={{ fontSize: '35px' }} />
        </IconButton>
        <DialogContent
          sx={{
            mt: '16px'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingX: '55px',
              paddingBottom: '22px'
            }}
          >
            <Box
              sx={{
                width: '80%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
                // pb:'20px'
              }}
            >
              <DialogTitle
                sx={{ m: 0, p: 2, color: '#000000', fontWeight: 700, fontSize: '32px', textAlign: 'center' }}
                id="customized-dialog-title"
              >
                變更密碼
              </DialogTitle>
              <Typography sx={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {ACCOUNT_PASSWORD_CHANGE_DATA.map(({ label }, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-3">
                      <p className="font-semibold text-dark-grey text-xl">{label}</p>
                      <input
                        type="text"
                        className="w-full p-2 outline-none rounded-md border-[1px] shadow border-solid border-dark-grey "
                      />
                    </div>
                  );
                })}
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', px: '10px', paddingTop: '10px' }}>
                <CustomButton
                  variant="primary"
                  className="rounded-full px-12 h-12 text-lg mt-3 !text-navy-blue bg-white border-2 hover:border-2 hover:bg-navy-blue hover:!text-white"
                >
                  取消
                </CustomButton>
                <CustomButton
                  variant="primary"
                  className="rounded-full px-12 h-12 text-lg mt-3 hover:border-2 hover:bg-white hover:text-navy-blue "
                >
                  更新
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default AccountPasswordChangeModal;

const ACCOUNT_PASSWORD_CHANGE_DATA = [
  {
    label: '目前的密碼：'
  },
  {
    label: '選擇新密碼：'
  },
  {
    label: '確認您的新密碼：'
  }
];
