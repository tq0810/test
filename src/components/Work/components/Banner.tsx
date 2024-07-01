import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import openEthPNG from '@/assets/img/openEth1.png';
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
        padding: { xs: '0px 0 30px 0', md: '0px 0 0 0' },
        display: { md: 'flex', xs: 'block' },
        justifyContent: 'start',
        mt: '47.5px',

        '.flyPng': {
          position: { md: 'absolute', xs: 'relative' },
          width: { md: 'auto', xs: '100%' },
          right: { md: '-5%', xl: '5%', xs: '-5%' },
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
        <Typography
          component={'div'}
          sx={{
            display: { md: 'block' },
            fontSize: { md: 132, xs: 24 },
            fontFamily: 'Candal',
            textAlign: { xs: 'center', md: 'left' },
            lineHeight: { md: '144px', xs: '40px' },
            m: { md: '0px', xs: '20px auto 0' },
            padding: { md: '92px 0 0 0', xs: '0 0 0 0' },
            width: { md: '924px', xs: '186px' },
            color: '#F33000',
          }}
        >
          TBC
        </Typography>
        <Typography
          component={'div'}
          sx={{
            fontSize: { xs: '14px', md: '38px' },
            width: { md: '932px', xs: '248px' },
            lineHeight: '140%',
            color: '#FFF',
            m: { md: '21px 0 42px', xs: '20px auto 52px' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <div>
            TBC is a Scalable Blockchain For 8 Billion Users With Layer 1 High-Performance Smart Contract.
          </div>
          <Box sx={{ display: { md: 'block', xs: 'none' } }}></Box>
        </Typography>
        <CSSTransition
          in={!!isElementVisible}
          timeout={2000}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__flipInX',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              mb: { md: '125px', xs: '0' },
              justifyContent: { xs: 'center', md: 'normal' },
            }}
          ></Box>
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
        p: { xs: '0px 20px', md: '0px 140px' },
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
