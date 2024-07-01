import { Box, Button, Typography } from '@mui/material';
import { Title } from './MTitle';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import pp1Png from '@/assets/img/pp1.png';
import pp2Png from '@/assets/img/pp2.png';
import { FormattedMessage } from 'umi';
import turnUp from '@/assets/img/turnUp.png';
const styles = {
  itemWrap: {
    display: { xs: 'block' },
    gap: '28px',
  },
  item: {
    // flex: 1,
    boxSizing: 'border-box',
    padding: { md: '0', xs: '0 14px' },
    m: { md: '0', xs: '0 0 10px' },
    borderRadius: '30px',
    display: { md: 'flex', xs: 'block' },
    justifyContent: 'center',
    overflow: 'hidden',
    '.icon': {
      '& svg': {
        width: { md: '60px', xs: '36px' },
        height: { md: '60px', xs: '36px' },
      },
    },
    '.title-1': {
      fontSize: { xs: '24px', md: '70px' },
      fontWeight: 400,
      color: '#F33000',
      padding: { md: '123px 0 50px', xs: '0 0 20px' },
      lineHeight: { xs: '32px', md: '55px' },
      width: { xs: 'auto', md: 'auto' },
      m: { xs: '0 auto', md: 'auto' },
    },
    '.value-1': {
      fontSize: { xs: '14px', md: '24px' },
      fontWeight: 400,
      textAlign: 'left',
      color: '#fff',
      lineHeight: { xs: '30px', xl: '48px', md: '39px' },
      padding: { md: '0 0 50px', xs: '0 0 0px' },
    },
    '.title-2': {
      padding: { md: '0 0 50px', xs: '0 0 0px' },
    },
  },
  itemLeft: {
    width: { md: '832px', xs: '100%' },
    mr: { md: '5%', xs: '0' },
    textAlign: { md: 'left', xs: 'center' },
  },
  itemLeft1: { mr: { md: '46px' }, width: { md: '495px' } },
  itemRight: {
    width: { md: '832px', xs: '100%' },

    m: { md: '0 0 0 136px', xs: '0' },
    textAlign: { md: 'left', xs: 'center' },
  },
  turnWrap: {},
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
export const Chose = () => {
  return (
    <Box
      sx={{
        borderRadius: '30px',
        m: { xs: '20px auto 0', md: '30px 0 0' },

        padding: { md: '0 40px 28px', xs: '0 8px 20px' },
        width: { md: '100%', xs: '350px' },
        '.treaImg': {
          width: { xs: '72px', md: '132px' },
        },
        overflow: 'hidden',
        '.p1Png': {
          display: { xs: 'block' },
          width: { md: 'auto', xs: '250px' },
          m: { md: 'auto', xs: '0 auto' },
        },
        '.p2Png': {
          display: { md: 'block', xs: 'none' },
          width: { md: 'auto', xs: '250px' },
          m: { md: 'auto', xs: '0 auto' },
        },
        '.p2Png1': {
          display: { md: 'none', xs: 'block' },
        },
        '.p3Png': {
          display: { xs: 'block' },
          width: { md: 'auto', xs: '224px' },
          m: { md: 'auto', xs: '0 auto' },
        },
      }}
    >
      <Box sx={styles.itemWrap}>
        <Box sx={styles.item}>
          <Box sx={styles.itemLeft}>
            <Typography className="title-1">Why TBC Chose POW</Typography>
            <Typography className="value-1">
              The value provided by blockchain technology is decentralized
              security, and security can be measured by the effort of attack. A
              chain is as secure as it is costly to attack.
            </Typography>
            <Box sx={styles.turnWrap}>
              <a href="#">
                <Box sx={styles.turn}>
                  MORE
                  <img src={turnUp} className="turnUp" />
                </Box>
              </a>
            </Box>
          </Box>
          <Box>
            <img src={pp1Png} className="p1Png" alt="" />
          </Box>
        </Box>
        <Box sx={styles.item}>
          <Box>
            <img src={pp2Png} className="p2Png" alt="" />
          </Box>
          <Box sx={styles.itemRight}>
            <Typography className="title-1 title-2">
              Why TBC Chose UTXO Model
            </Typography>
            <Typography className="value-1 value-2">
              TBC has a high-performance smart contract (TuringContract); the
              world's first smart contract that implements high performance on
              the UTXO model, enabling TBC to implement all smart applications
              with high performance and meet all business needs.
            </Typography>
            <Box sx={styles.turnWrap}>
              <a href="#">
                <Box sx={styles.turn}>
                  MORE
                  <img src={turnUp} className="turnUp" />
                </Box>
              </a>
            </Box>
            <Box>
              <img src={pp2Png} className="p2Png p2Png1" alt="" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
