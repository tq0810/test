import { Box, Typography } from '@mui/material';
import q1Png from '@/assets/img/q1.png';
import q2Png from '@/assets/img/q2.png';
import q3Png from '@/assets/img/q3.png';
import tianpingPNG from '@/assets/img/tianping.png';
import turnUp from '@/assets/img/turnUp.png';
import { useEffect, useState } from 'react';

import { commonStyle } from './commonStyle';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import { FormattedMessage } from 'umi';

const styles = {
  itemWrap: {},
  content: {
    width: '100%',
    textAlign: 'center',
    color: '#7A7A7A',
    fontSize: { md: 26, xs: 18 },
    fontFamily: 'Candal',
    fontWeight: '400',
    lineHeight: '39px',
  },
  listWrap: {
    width: { md: '558px', xs: '306px' },
    margin: { md: '0 0 0 100px', xs: '0 auto' },
  },
  listItemWrap: {
    p: '20px 34px',
    mb: '38px',
    background:
      'linear-gradient(90deg, #3A140F 0%, #1A1E28 30%, #1A1E28 76%, #3A140F 100%)',
    minHeight: { md: '214px', xs: '130px' },
    display: 'flex',
    flexDirection: { md: 'column', xs: 'column' },
    justifyContent: 'space-between',
    boxShadow: '0px 11px 20px rgba(0, 0, 0, 0.40)',
    borderRadius: '30px',
  },
  title: {
    color: '#F33000',
    fontSize: { md: 26, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    mb: '16px',
  },
  nContent: {
    width: '100%',
    color: 'white',
    fontSize: { md: 24, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
  },
  turnWrap: {
    textAlign: 'right',
  },
  turn: {
    color: '#F33000',
    fontSize: { md: 26, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    '.turnUp': {
      width: { md: 'auto', xs: '12px' },
      ml: { md: '13px', xs: '3px' },
    },
  },
};
const list = [
  {
    title: 'Devs SDKs',
    content: 'Build Web3 Apps in Short Time',
    turn: 'Learn',
    url: '#',
  },
  {
    title: 'Technical Documentation',
    content: 'Understand All Technical Details Behind',
    turn: 'Discover',
    url: '#',
  },
];
export const Why = () => {
  const [elementRef, isElementVisible] = useIsElementInViewport();
  const [elementRef1, isElementVisible1] = useIsElementInViewport();
  const [elementRef2, isElementVisible2] = useIsElementInViewport();
  const [elementRef3, isElementVisible3] = useIsElementInViewport();
  const [hoverIndex, setHoverIndex] = useState(0);
  return (
    <Box
      sx={{
        borderRadius: '30px',
        overflow: 'hidden',
        m: { xs: '20px auto 0', md: '30px 0 0' },
        padding: { md: '0 40px 50px', xs: '0 8px 20px' },
        background:
          'linear-gradient(90deg, #3A140F 0%, #1A1E28 30%, #1A1E28 76%, #3A140F 100%)',
        width: { md: '100%', xs: '350px' },
        '.treaImg': {
          width: { xs: '72px', md: '132px' },
          display: 'block',
          margin: '0 auto',
        },
      }}
      ref={elementRef}
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
        <Box sx={commonStyle.title}>Learn About TBC</Box>
      </CSSTransition>
      <Box sx={{}}>
        <Box sx={styles.itemWrap} ref={elementRef1}>
          <Box sx={styles.content}>
            TBC is a revolutionary public blockchain integrated with multiple
            innovations. Based on the UTXO & POW model, it ground-breakingly
            achieved High Performance, extremely Low Fees and high-level of
            Decentralization simultaneously. With the Layer 1 Smart
            contract technology, TBC aims to become the No.1 blockchain capable
            of helping 8 billion users enter the Web3 Era.
          </Box>
          <Box
            sx={{
              display: { md: 'flex', xs: 'block' },
              mt: '50px',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '.tianpingPNG': {
                  display: 'block',
                  width: { md: '100%', xs: '265px' },
                  m: '0 auto',
                },
              }}
            >
              <img src={tianpingPNG} className="tianpingPNG" />
            </Box>
            <Box sx={styles.listWrap}>
              {list.map(({ title, content, turn, url }) => {
                return (
                  <Box sx={styles.listItemWrap}>
                    <Box>
                      <Box sx={styles.title}>{title}</Box>
                      <Box sx={styles.nContent}>{content}</Box>
                    </Box>
                    <Box sx={styles.turnWrap}>
                      <a href={url}>
                        <Box sx={styles.turn}>
                          {turn}
                          <img src={turnUp} className="turnUp" />
                        </Box>
                      </a>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
