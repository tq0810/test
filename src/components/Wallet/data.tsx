import { Box, Typography } from '@mui/material';
const width = '96%';
import j1Png from '@/assets/img/j1.png';
import j2Png from '@/assets/img/j2.png';
import j3Png from '@/assets/img/j3.png';
import j4Png from '@/assets/img/j4.png';
import j5Png from '@/assets/img/j5.png';
import j6Png from '@/assets/img/j6.png';
import { commonStyle } from './commonStyle';
import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import { FormattedMessage } from 'umi';
const styles = {
  itemWrap: {
    display: { md: 'flex', xs: 'block' },
  },
  item: {
    display: { md: 'flex', xs: 'flex' },
    flexDirection: { md: 'column', xs: 'row' },
    alignItems: 'center',
    gap: { xs: '16px', md: '20px' },
    width: { xs: '100%', md: '620px' },
    cursor: 'pointer',
    pt: { md: '20px', xs: 0 },
    pl: { md: '0', xs: '10px' },
    boxSizing: 'border-box',
    height: { xs: '90px', md: '188px' },
    background:
      'linear-gradient(101deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',

    mr: { md: '10px', xs: '0' },
    mb: { md: '10px', xs: '6px' },
    borderRadius: { md: '30px', xs: '7.5px' },
    position: 'relative',
    '&:last-child': { mr: '0' },
    '.icon': {
      minWidth: { md: '80px', xs: '66px' },
      maxWidth: { md: 'auto', xs: '66px' },
      height: { md: '80px', xs: '66px' },
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& svg': {
        width: { md: '60px', xs: '36px' },
        height: { md: '60px', xs: '36px' },
      },
    },
    '.title-1': {
      fontSize: { xs: '20px', md: '24px' },
      fontWeight: 500,
      color: '#fff',
      lineHeight: { xs: '19.2px', md: '28.8px' },
      mb: { md: '20px', xs: '0' },
    },
    '.value-1': {
      fontSize: { xs: '14px', md: '24px' },
      fontWeight: 500,
      textAlign: 'left',
      color: '#94A3B8',
      fontFamily: 'Candal',

      lineHeight: { xs: '25px', md: '38px' },
    },
  },
};

export const Data = () => {
  // const getData = async () => {
  //   const response = await fetch(
  //     '',
  //   );
  //   const result = await response.json();
  //   const dataAll = result.data;

  //   return dataAll[0] || {};
  // };
  const [elementRef, isElementVisible] = useIsElementInViewport();
  const [elementRef1, isElementVisible1] = useIsElementInViewport();
  const [elementRef2, isElementVisible2] = useIsElementInViewport();
  const [elementRef3, isElementVisible3] = useIsElementInViewport();
  return (
    <Box
      ref={elementRef}
      sx={{
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '30px', md: '10px', xl: '63px' },
        width: { md: '100%', xs: '350px' },
        margin: { md: 'auto', xs: '0 auto' },
        borderRadius: ' 30px',
        paddingBottom: { md: '91px', xs: '30px' },
        '.treaImg': {
          width: { xs: '66px', md: 'auto' },
        },
      }}
    >
      <Box sx={styles.itemWrap}>
        <Box sx={styles.item} ref={elementRef1}>
          <Box className="icon">
            <CSSTransition
              in={!!isElementVisible1}
              timeout={6000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__fadeIn',
              }}
              // unmountOnExit
            >
              <img src={j1Png} className="treaImg" alt="" />
            </CSSTransition>
          </Box>
          <Box>
            <CSSTransition
              in={!!isElementVisible1}
              timeout={4000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__slideInLeft',
              }}
              // unmountOnExit
            >
              <a href="/Work">
                <Typography className="title-1">How TBC Works</Typography>
              </a>
            </CSSTransition>
          </Box>
        </Box>
        <Box sx={styles.item}>
          <Box className="icon">
            <CSSTransition
              in={!!isElementVisible1}
              timeout={6000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__fadeIn',
              }}
              // unmountOnExit
            >
              <img src={j2Png} className="treaImg treaImg1" alt="" />
            </CSSTransition>
          </Box>
          <Box ref={elementRef2}>
            <CSSTransition
              in={!!isElementVisible1}
              timeout={4000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__slideInLeft',
              }}
              // unmountOnExit
            >
              <CSSTransition
                in={!!isElementVisible1}
                timeout={4000}
                classNames={{
                  enter: 'animate__animated',
                  enterActive: 'animate__slideInLeft',
                }}
                // unmountOnExit
              >
                <Typography className="title-1">Enter Web3 Era</Typography>
              </CSSTransition>
            </CSSTransition>
          </Box>
        </Box>
        <Box sx={styles.item}>
          <Box className="icon">
            <CSSTransition
              in={!!isElementVisible2}
              timeout={6000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__fadeIn',
              }}
              // unmountOnExit
            >
              <img src={j3Png} className="treaImg treaImg2" alt="" />
            </CSSTransition>
          </Box>
          <Box ref={elementRef3}>
            <CSSTransition
              in={!!isElementVisible2}
              timeout={4000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__slideInLeft',
              }}
              // unmountOnExit
            >
              <Typography className="title-1">Join TBC Community</Typography>
            </CSSTransition>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
