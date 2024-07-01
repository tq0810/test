import { Box, TextField, Button, Alert } from '@mui/material';
import { useMediaQuery } from '@mui/material';

import { useState, useRef } from 'react';
import { getCssStyles } from './CssStyles';

import TokenAdirDropP from '@/assets/img/token_airdrop_p.png';
import QueryPic from '@/assets/img/WinnerQuery/query.png';
import Win from '@/assets/img/WinnerQuery/win.png';
import NoWin from '@/assets/img/WinnerQuery/no_win.png';
import axios from 'axios';

export const WinnerQuery = ({
  setshowReceiveReward,
  setConfirmAddress,
}: any) => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const cssStyles = getCssStyles();
  const inputRef = useRef<HTMLInputElement>();

  const [showAlert, setShowAlert] = useState(false);
  const [alertTxt, setAlertTxt] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  const [resultPic, setresultPic] = useState(Win);
  const [resultText, setResultText] = useState('Congratulations!');

  const getErrMsg = (status: number): String => {
    switch (status) {
      case 2:
        return 'UnKnow Error.';

      default:
        return 'UnKnow Error.';
    }
  };

  const handleClickOverplay = (event: any) => {
    setShowPopup(false);
  };

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

  const handleConfirm = async (event: any) => {
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
    }

    // 请求接口
    try {
      const response = await axios.get(
        `https://turingwallet.xyz/v1/tbc/address/${inputRef.current!.value.trim()}/if/selected/`,
      );
      // const response = await axios.get(
      //   `/api/v1/tbc/address/${confirmAddress}/send/`,
      // );
      const { data, status } = response.data;
      if (status === 0) {
        setresultPic(Win);
        setResultText('Congratulations!');
        setShowPopup(true);
      } else if (status === 1) {
        setresultPic(NoWin);
        setResultText('Unfortunately!');
        setShowPopup(true);
      } else if (status === 2) {
        showErrMsg('UnKnow Error !!');
      }
    } catch (error) {
      try {
        console.error(error);
        const status = error.response.data.status;
        showErrMsg(getErrMsg(status) ? getErrMsg(status) : 'UnKnow Error !!');
      } catch (err) {
        showErrMsg('Send Address Fail Sys Error');
      }
      return;
    }
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
            Winner&ensp;
          </Box>
          <Box component="span" sx={cssStyles.mainTxtWhite}>
            Query
          </Box>
        </Box>

        <Box
          sx={{
            height: isMobile ? '250px' : '400px',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Box sx={isMobile ? cssStyles.picPhone : cssStyles.picWb}>
            <img src={QueryPic} alt="Image" />
          </Box>
        </Box>

        <Box sx={cssStyles.secondTitle}>
          <p
            style={{
              marginBottom: '0',
            }}
          >
            Enter your wallet address to check if
          </p>
          <p>you have won the prize</p>
        </Box>

        <Box sx={cssStyles.middleTxt}>Wallet Address</Box>

        <Box sx={cssStyles.txtBox}>
          <input
            type="text"
            placeholder="Please enter the inquiry address"
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

      {showPopup && (
        <Box>
          <Box sx={cssStyles.overlay} onClick={handleClickOverplay}></Box>
          <Box sx={cssStyles.popup}>
            <Box
              sx={{
                height: isMobile ? '200px' : '300px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <Box sx={isMobile ? cssStyles.picPhone : cssStyles.picWb}>
                <img src={resultPic} alt="Image" />
              </Box>
            </Box>
            <Box
              sx={{
                fontWeight: 600,
                fontSize: isMobile ? '15px' : '18px',
                textAlign: 'center',
              }}
            >
              {resultText}
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClickOverplay}
                sx={cssStyles.iKnowButton}
              >
                I Know
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};
