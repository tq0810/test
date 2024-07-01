import { Box, TextField, Button, Alert } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import { useState, useRef } from 'react';
import { getCssStyles } from './CssStyles';

import TokenAdirDropP from '@/assets/img/token_airdrop_p.png';

export const FillAddress = ({
  setshowReceiveReward,
  setConfirmAddress,
}: any) => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const cssStyles = getCssStyles();
  const inputRef = useRef<HTMLInputElement>();

  const [showAlert, setShowAlert] = useState(false);
  const [alertTxt, setAlertTxt] = useState('');

  const showErrMsg = (errmsg: String) => {
    setAlertTxt(errmsg as any);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 3 * 1000);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const isAlphanumeric = (str: string) => {
    var regex = /^[a-z0-9]+$/i;
    return regex.test(str);
  };

  const handleConfirm = (event: any) => {
    if (inputRef.current) {
      if (
        !isAlphanumeric(inputRef.current!.value.trim()) ||
        !inputRef.current!.value.trim().startsWith('1')
      ) {
        showErrMsg('Address Format is Invalid');
        return;
      }

      if (
        inputRef.current!.value.trim().length < 26 ||
        inputRef.current!.value.trim().length > 34
      ) {
        showErrMsg('Address length is Invalid');
        return;
      }
      setConfirmAddress(inputRef.current!.value.trim());
    }
    setshowReceiveReward(false);
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={cssStyles.mainBox}>
      {showAlert && (
        <Alert
          severity="error"
          variant="filled"
          onClose={handleAlertClose}
          sx={{
            position: 'fixed',
            top: isMobile ? '60px' : '20px',
            width: isMobile ? '90%' : '25%',
            zIndex: 9999,
          }}
        >
          {alertTxt}.
        </Alert>
      )}
      <Box>
        <Box sx={cssStyles.txtBox}>
          <Box component="span" sx={cssStyles.mainTxt}>
            TBC&ensp;
          </Box>
          <Box component="span" sx={cssStyles.mainTxtWhite}>
            Tokens
          </Box>
        </Box>

        <Box sx={isMobile ? cssStyles.picPhone : cssStyles.picWb}>
          <img src={TokenAdirDropP} alt="Image" />
        </Box>

        <Box sx={cssStyles.secondTitle}>
          This faucet transfers TBC tokens on Turingbitchain. Confirm payment
          address information before receiving
        </Box>

        <Box sx={cssStyles.middleTxt}>Wallet Address</Box>

        <Box sx={cssStyles.txtBox}>
          <input
            type="text"
            placeholder="Please enter the receiving address"
            ref={inputRef as any}
          />
        </Box>

        <Box sx={cssStyles.txtBox}>
          <Button
            variant="contained"
            color="secondary"
            sx={cssStyles.confirmButton}
            onClick={handleConfirm}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
