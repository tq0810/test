import { Box, Typography, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import openEthPNG from '@/assets/img/openEth.png';
import { FormattedMessage } from 'umi';
import vv1 from '@/assets/img/Twitter.png';
import vv2 from '@/assets/img/Google.png';
import vv4 from '@/assets/img/logo3.png';
import vv3 from '@/assets/img/googlePlay.png';
import { fontSize } from '@mui/system';
const Inner = () => {
  const [elementRef, isElementVisible, setIsElementVisible] =
    useIsElementInViewport();
  useEffect(() => {
    setIsElementVisible(true);
  }, []);
  const setLocaleActive = (index: any) => {
    console.log('coming soon');
    switch (index) {
      case 1:
        alert('coming soon');
      break;
      case 2:
        // alert('coming soon');
        window.location.href = 'https://turingwallet.xyz';
      break;
      case 3:
        alert('coming soon');
      break;      
      default:
        break;
    }
  };
  return (
    <Box
      sx={{
        position: 'relative',
        padding: { xs: '0px 0 30px 0', md: '0px 0 100px 0' },
        display: { md: 'flex', xs: 'block' },
        justifyContent: 'start',
        mt: { xs: '28px', md: '90.5px' },
        position: 'relative',

        '.flyPng': {
          position: { md: 'absolute', xs: 'relative' },
          width: { md: 'auto', xs: '300px' },
          right: { md: '-5%', xl: '0%', xs: '0' },
          top: 0,
          m: { md: '0', xs: '0px 0 0 0' },
          display: { xs: 'block' },
          margin: { xs: 'auto' },
        },

        '.flyPng4': {
          display: { md: 'none', xs: 'block' },
          m: '20px auto 0',
        },
        '.Google':{
          width:{ md: '28px', xs: '20px' },
          height:{ md: '28px', xs: '20px' },
        },
        '.googlePlay':{
          // width:{ md: '100px', xs: '100px' },
          height:{ md: '24px', xs: '20px' },
        },
        '.logo3':{
          width:{ md: '103px', xs: '52px' },
          height:{ md: '33px', xs: '17px' },
          marginRight:{ md: '13px', xs: '13px' },
        },
        '.aClass':{
          color:{ md: '#CCAF81', xs: '#CCAF81' },
          fontSize:{ md: '20px', xs: '12px' },
        },
      }}
    >
      <Box
        ref={elementRef}
        sx={{
          color: '#fff',
          position: 'relative',
          zIndex: '2',
          p: { md: '0 0 60px', xs: '0 0 40px' },
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
              fontSize: { md: 80, xs: 30 },
              fontFamily: 'Candal',
              textAlign: { xs: 'center', md: 'left' },
              lineHeight: { md: '107px', xs: '40px' },
              m: { md: '0px', xs: '20px auto 0' },
              padding: { md: '13px 0 0 0', xs: '0 0 0 0' },
              width: { md: '743px', xs: '280px' },
            }}
          >
            {/* <span style={{ color: '#F33000' }}>TBC</span>, */}
            Turing wallet The wallet made for {' '}
            <span style={{ color: '#F33000' }}>Second Life</span>
          </Typography>
        </CSSTransition>
        <Typography
          component={'div'}
          sx={{
            fontSize: { xs: '14px', md: '28px' },
            width: { md: '652px', xs: '331px' },
            lineHeight: { md: '140%', xs: '200%' },
            color: '#7A7A7A',
            m: { md: '21px 0 52px', xs: '20px auto 86px' },
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
            Turing wallet is the self custody wallet built on Turingbitchain,designed for the bitcoin ecosystem,with everything open-sourced.
            </div>
          </CSSTransition>
          <Box sx={{ display: { md: 'block', xs: 'none' } }}></Box>
        </Typography>
        <Box sx={{ display: {xs: 'flex', md: 'flex'}, fontSize: {xs: '0.9rem', md: '18px'},flexDirection:{ xs: 'row', md: 'row' },flexWrap: { xs: 'wrap', md: 'wrap' },justifyContent: { xs: 'center', md: 'left' } }}>
            {/* <Box 
                onClick={() => {
                   setLocaleActive(1);
                }} 
                sx={{ marginBottom: {xs: '10px', md: '0'},marginRight:{xs: '10px', md: '10px'}}} style={{ background: '#FFFFFF', borderRadius: '12px',width: '139px',height: '45px',display: 'flex',color: '#11A1F0',justifyContent: 'space-around',alignItems: 'center',padding: '0 18px', }}>
                <img src={vv1} alt="description_of_image" style={{width:'28px',height:'28px'}}/>
                <div>Twitter</div>
            </Box> */}
            <Box 
                onClick={() => {
                  setLocaleActive(2);
                }} 
                sx={{ marginBottom: {xs: '10px', md: '0'},marginRight:{xs: '10px', md: '10px'},width:{xs: '184px', md: '247px'},height:{xs: '32px', md: '45px'},padding: {xs: '0 4px', md: '0 18px'},borderRadius: {xs: '9px', md: '12px'}}} style={{ background: '#5F5F65',display: 'flex',color: '#fff',justifyContent: 'space-around',alignItems: 'center' }}>
                <img src={vv2} alt="description_of_image" className="Google"/>
                <div>Chrome(Public Beta)</div>
            </Box>
            <Box
                onClick={() => {
                  setLocaleActive(3);
                }} 
                sx={{width:{xs: '118px', md: '139px'},padding: {xs: '0 4px', md: '0 18px'},height:{xs: '32px', md: '45px'}}}
                style={{ background: '#5F5F65', borderRadius: '12px',display: 'flex',color: '#fff',justifyContent: 'space-around',alignItems: 'center' }}>
                <img src={vv3} alt="description_of_image" className="googlePlay"/>
            </Box>
        </Box>
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
      <Box
          sx={{
            color: '#fff',
            position:'absolute',
            display: 'flex',
            alignItems: 'center',
            borderRadius: '23px',
            border: '2px solid #CCAF81',
            left: '50%',
            transform: 'translate(-50%, 0)',
            padding:{ md: '6px 41px', xs: '6px 12px' },
            width:{ md: '880px', xs: '100%' },
            top:{ md: '-41px', xs: '266px' },
            lineHeight:{ xs: '15px' },
            zIndex:{ md: '100', xs: '100' },
          }}
      >
        <img src={vv4} alt="logo3" className="logo3"/>
        <Box
          sx={{
            color: '#fff',
            fontSize:{ md: '20px', xs: '12px' },
          }}
        >
          Download app from the official website：
          <a
            href='https://turingbitchain.io/Wallet'
            target='_self'
            className='aClass'
          >
            https://turingbitchain.io/Wallet
          </a>
        </Box>
        {/* <a
          href='https://turingbitchain.io/Wallet'
          target='_self'
          className='aClass'
        >
          https://turingbitchain.io/Wallet
        </a> */}
      </Box>
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
        '& button': {
        },
        '& a': {
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
