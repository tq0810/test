import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import openEthPNG from '@/assets/img/openEth.png';
import { FormattedMessage } from 'umi';
const Inner = () => {
  const [elementRef, isElementVisible, setIsElementVisible] =
    useIsElementInViewport();
  useEffect(() => {
    setIsElementVisible(true);
  }, []);
  return (
    <Box
      sx={{
        position: 'relative',
        padding: { xs: '0px 0 30px 0', md: '0px 0 100px 0' },
        display: { md: 'flex', xs: 'block' },
        justifyContent: 'start',
        mt: '47.5px',

        '.flyPng': {
          position: { md: 'absolute', xs: 'relative' },
          width: { md: 'auto', xs: '100%' },
          right: { md: '-5%', xl: '0%', xs: '-5%' },
          top: 0,
          m: { md: '0', xs: '-67px 0 0 0' },
          display: { xs: 'block' },
        },

        '.flyPng4': {
          display: { md: 'none', xs: 'block' },
          m: '20px auto 0',
        },
      }}
    >
      <Box
        ref={elementRef}
        sx={{
          color: '#fff',
          position: 'relative',
          zIndex: '2',
          p: { md: '0 0 60px', xs: '0 0 30px' },
        }}
      >
        <CSSTransition
          in={!!isElementVisible}
          timeout={2000}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__slideInDown',
          }}
          // unmountOnExit
        >
          <Typography
            component={'div'}
            sx={{
              display: { md: 'block' },
              fontSize: { md: 132, xs: 36 },
              fontFamily: 'Candal',
              textAlign: { xs: 'center', md: 'left' },
              lineHeight: { md: '144px', xs: '40px' },
              m: { md: '0px', xs: '20px auto 0' },
              padding: { md: '13px 0 0 0', xs: '0 0 0 0' },
              width: { md: '924px', xs: '303px' },
            }}
          >
            {/* <span style={{ color: '#F33000' }}>TBC</span>, */}
            The Blockchain for{' '}
            <span style={{ color: '#F33000' }}>Second Life</span>
          </Typography>
        </CSSTransition>
        <Typography
          component={'div'}
          sx={{
            fontSize: { xs: '14px', md: '38px' },
            width: { md: '652px', xs: '248px' },
            lineHeight: '140%',
            color: '#7A7A7A',
            m: { md: '21px 0 52px', xs: '20px auto 52px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <CSSTransition
            in={!!isElementVisible}
            timeout={2000}
            classNames={{
              enter: 'animate__animated',
              enterActive: 'animate__slideInDown',
            }}
            // unmountOnExit
          >
            <div>
              Bitcoin + Layer1 Smart Contract + Scalability
            </div>
          </CSSTransition>
          <Box sx={{ display: { md: 'block', xs: 'none' } }}></Box>
        </Typography>
        <CSSTransition
          in={!!isElementVisible}
          timeout={2000}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__flipInX',
          }}
          // unmountOnExit
        >
          <Box
            sx={{
              display: 'flex',
              mb: { md: '125px', xs: '0' },
              justifyContent: { xs: 'center', md: 'normal' },
            }}
          >
            {/* <Button
              // variant="contained"
              sx={{
                display: 'flex',
                height: { md: '56px', xs: '37px' },
                textTransform: 'unset',
                fontFamily: 'Candal',
                fontWeight: '700',
                fontSize: { md: '24px', xs: '16px' },
                width: { md: '241px', xs: '150px' },
                p: '0',
                zIndex: 2,
                m: '0 32px 0 0',
                borderRadius: '39px',
                background: { md: 'transparent', xs: '#000' },
                color: '#fff',
                ':hover': {
                  background: '#AC61F0',
                  color: '#fff',
                },
              }}
              href="https://tapp.TBC.fi/faucet"
            >
              <FormattedMessage id="Faucet" />
            </Button>
            <Button
              // variant="contained"
              sx={{
                display: 'flex',
                height: { md: '56px', xs: '37px' },
                textTransform: 'unset',
                fontFamily: 'Candal',
                fontWeight: '700',
                fontSize: { md: '24px', xs: '16px' },
                width: { md: '241px', xs: '150px' },
                p: '0',
                zIndex: 2,
                borderRadius: '39px',
                background: '#AC61F0',
                color: '#fff',
                ':hover': {
                  background: '#AC61F0',
                  color: '#fff',
                },
              }}
              href="https://tapp.TBC.fi"
            >
              <FormattedMessage id="Enter" />
            </Button> */}
          </Box>
        </CSSTransition>
      </Box>
      <img src={openEthPNG} className="flyPng" alt="" />
    </Box>
  );
};
export const Banner = () => {
  return (
    <>
      <Inner />
      {/* <Box sx={{ height: '32vw', maxHeight: '30px' }}></Box> */}
      {/* <OverviewIdoBanner /> */}
    </>
  );
};

export const BannerRow = () => {
  return (
    <Box
      sx={{
        p: { xs: '0px 20px', md: '0px ' },
        position: 'relative',
        width: '100%',
        // cursor: `url("${ico}") 32 32, auto`,
        '& button': {
          // cursor: `url("${ico}") 32 32, auto!important`,
        },
        '& a': {
          // cursor: `url("${ico}") 32 32, auto!important`,
          '& .MuiTouchRipple-root': {
            height: '0px',
            transition: 'all 1s',
          },
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            zIndex: 3,
            width: '100%',
          }}
        >
          {/* <Box
            sx={{
              ...stylesBoxBorder,
              top: 0,
              left: 0,
              borderBottomWidth: '0px!important',
              borderRightWidth: '0px!important',
            }}
          ></Box> */}
          {/* <Box
            sx={{
              ...stylesBoxBorder,
              top: 0,
              right: 0,
              borderBottomWidth: '0px!important',
              borderLeftWidth: '0px!important',
            }}
          ></Box> */}
          {/* <Box
            sx={{
              ...stylesBoxBorder,
              bottom: 0,
              left: 0,
              borderTopWidth: '0px!important',
              borderRightWidth: '0px!important',
            }}
          ></Box>
          <Box
            sx={{
              ...stylesBoxBorder,
              bottom: 0,
              right: 0,
              borderTopWidth: '0px!important',
              borderLeftWidth: '0px!important',
            }}
          ></Box> */}
          <Inner />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          zIndex: 2,
          '> div': {
            height: '100%',
          },
          '& video': {
            // height: 0,
          },
          '& canvas': {
            // width: '100%',
            height: '100%',
            position: 'absolute',
            left: 0,
            top: 0,
          },
        }}
      >
        {/* <VideoCanvasPlay src="./media/banner.mp4" /> */}
      </Box>
    </Box>
  );
};
