import { Box, Button, Typography } from '@mui/material';
import { commonStyle } from './commonStyle';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import p1Png from '@/assets/img/p1.png';
import p2Png from '@/assets/img/p2.png';
import p3Png from '@/assets/img/p3.png';
import { FormattedMessage } from 'umi';

const styles = {
  itemWrap: {
    display: { xs: 'block' },
    gap: '28px',
  },
  item: {
    // flex: 1,
    boxSizing: 'border-box',
    padding: { md: '42px 2% 55px', xs: '0 14px' },
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
      fontSize: { xs: '24px', md: '46px' },
      fontWeight: 400,
      color: '#fff',
      padding: { md: '0 0 67px', xs: '0 0 30px' },
      lineHeight: { xs: '32px', md: '55px' },
      width: { xs: '195px', md: 'auto' },
      m: { xs: '0 auto', md: 'auto' },
    },
    '.value-1': {
      fontSize: { xs: '14px', md: '24px' },
      fontWeight: 400,
      textAlign: 'left',
      color: '#94A3B8',
      lineHeight: { xs: '30px', xl: '48px', md: '39px' },
      m: { md: '0 0 52px', xs: '0 0 32px' },
    },
  },
  itemLeft: {
    width: { md: '592px', xs: '100%' },
    mr: { md: '136px', xs: '0' },
    textAlign: { md: 'left', xs: 'center' },
  },
  itemLeft1: { mr: { md: '46px' }, width: { md: '495px' } },
  itemRight: {
    width: { md: '592px', xs: '100%' },

    m: { md: '0 0 0 136px', xs: '0' },
    textAlign: { md: 'left', xs: 'center' },
  },
  buttonWrap: {
    display: 'flex',
  },
  button: {
    height: { md: '60px', xs: '34px' },
    margin: { md: '0 0 0 0', xs: '0 auto 30px' },
    textTransform: 'unset',
    fontSize: { md: '24px', xs: '14px' },
    fontFamily: 'Candal',
    width: { md: '314px', xs: '191px' },
    borderRadius: '39px',
    background: '#F33000',
    color: '#fff',
    ':hover': {
      background: '#f53101',
      color: '#fff',
    },
  },
};
export const How = () => {
  const [elementRef, isElementVisible] = useIsElementInViewport();
  const [elementRef1, isElementVisible1] = useIsElementInViewport();
  const [elementRef2, isElementVisible2] = useIsElementInViewport();
  const [elementRef3, isElementVisible3] = useIsElementInViewport();

  return (
    <Box
      sx={{
        borderRadius: '30px',
        m: { xs: '20px auto 0', md: '30px 0 0' },
        background: {
          xs: 'linear-gradient(90deg, #3A140F 0%, #1A1E28 30%, #1A1E28 76%, #3A140F 100%)',
        },

        padding: { md: '0 40px 28px', xs: '0 8px 20px' },
        width: { md: '100%', xs: '350px' },
        '.treaImg': {
          width: { xs: '72px', md: '132px' },
        },
        overflow: 'hidden',
        '.p1Png': {
          display: { xs: 'block' },
          width: { md: 'auto', xs: '175px' },
          m: { md: 'auto', xs: '0 auto' },
        },
        '.p2Png': {
          display: { md: 'block', xs: 'none' },
          width: { md: 'auto', xs: '296px' },
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
        <Box sx={commonStyle.title}>Why TBC</Box>
      </CSSTransition>
      <Box sx={styles.itemWrap} ref={elementRef1}>
        <Box sx={styles.item}>
          <Box sx={styles.itemLeft}>
            <CSSTransition
              in={!!isElementVisible1}
              timeout={4000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__slideInDown',
              }}
              // unmountOnExit
            >
              <Typography className="title-1" style={{ marginTop: '20px' }}>
                Extreme High Performance & Low Fee
              </Typography>
            </CSSTransition>

            <Box sx={styles.buttonWrap}>
              <CSSTransition
                in={!!isElementVisible1}
                timeout={6000}
                classNames={{
                  enter: 'animate__animated',
                  enterActive: 'animate__fadeIn',
                }}
                // unmountOnExit
              >
                <Button
                  // variant="contained"
                  sx={styles.button}
                  href="#"
                >
                  Born for Second life
                </Button>
              </CSSTransition>
            </Box>
          </Box>
          <Box>
            <img src={p1Png} className="p1Png" alt="" />
          </Box>
        </Box>
        <Box sx={styles.item} ref={elementRef2}>
          <Box>
            <img src={p2Png} className="p2Png" alt="" />
          </Box>
          <Box sx={styles.itemRight}>
            <CSSTransition
              in={!!isElementVisible2}
              timeout={4000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__slideInDown',
              }}
              // unmountOnExit
            >
              <Typography className="title-1" style={{ marginTop: '66px' }}>
                Layer 1<br /> Decentralized
                <br /> Identity
              </Typography>
            </CSSTransition>

            <Box sx={styles.buttonWrap}>
              <CSSTransition
                in={!!isElementVisible1}
                timeout={6000}
                classNames={{
                  enter: 'animate__animated',
                  enterActive: 'animate__fadeIn',
                }}
                // unmountOnExit
              >
                <Button
                  // variant="contained"
                  sx={styles.button}
                  href="#"
                >
                  Born for Second life
                </Button>
              </CSSTransition>
            </Box>
            <Box>
              <img src={p2Png} className="p2Png p2Png1" alt="" />
            </Box>
          </Box>
        </Box>
        <Box sx={styles.item} ref={elementRef3}>
          <Box sx={{ ...styles.itemLeft, ...styles.itemLeft1 }}>
            <CSSTransition
              in={!!isElementVisible3}
              timeout={4000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__slideInDown',
              }}
              // unmountOnExit
            >
              <Typography className="title-1">
                Smart Contract
                <br /> of UTXO Model
              </Typography>
            </CSSTransition>

            <Box sx={styles.buttonWrap}>
              <CSSTransition
                in={!!isElementVisible3}
                timeout={6000}
                classNames={{
                  enter: 'animate__animated',
                  enterActive: 'animate__fadeIn',
                }}
                // unmountOnExit
              >
                <Button
                  // variant="contained"
                  sx={styles.button}
                  href="#"
                >
                  Born for Second life
                </Button>
              </CSSTransition>
            </Box>
          </Box>
          <Box>
            <img src={p3Png} className="p3Png" alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
