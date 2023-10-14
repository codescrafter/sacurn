import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const UpgradeConfirmationModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Clinic
      </Button>
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
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
            mt: '40px'
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
            <Typography gutterBottom>
              <img src="/v2/upgrade-confirmation-image/confirmation-image.svg" alt="" />
            </Typography>
            <DialogTitle
              sx={{ m: 0, p: 2, color: '#000000', fontWeight: 700, fontSize: '25px' }}
              id="customized-dialog-title"
            >
              會員卡升等申請
            </DialogTitle>
            <Typography
              gutterBottom
              sx={{
                color: '#525252',
                fontWeight: '400',
                fontSize: '20px'
              }}
            >
              會員卡升等申請核准後, 原卡片將廢止並寄送升等卡至會員收件地址。
            </Typography>
            <Typography
              gutterBottom
              sx={{
                fontSize: '15px',
                color: '#FF0000',
                fontWeight: '400',
                alignSelf: 'self-start'
              }}
            >
              如會員地址已異動，請於申請前與客服中心聯絡，先行變更地址。
            </Typography>
            <Button
              autoFocus
              onClick={handleClose}
              sx={{
                backgroundColor: '#005487',
                color: 'white',
                paddingY: '2.5',
                fontSize: '16px',
                paddingX: '50px',
                borderRadius: '30px',
                marginTop: '10px',
                '&:hover': {
                  color: '#005487',
                  border: '2px solid #005487'
                }
              }}
            >
              確認
            </Button>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};

export default UpgradeConfirmationModal;
