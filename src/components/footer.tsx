import { Box, Typography, Button } from '@mui/material';
import { ReactComponent as Join1Svg } from '@/assets/svg/join1.svg';
import { ReactComponent as Join2Svg } from '@/assets/svg/join2.svg';
import { ReactComponent as Join3Svg } from '@/assets/svg/join3.svg';
import { ReactComponent as Join4Svg } from '@/assets/svg/join4.svg';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import { FormattedMessage } from 'umi';

const button = {
  height: { md: '35px', xs: '38px' },
  display: 'flex',
  alignItems: 'center',
  borderRadius: '14px',
  fontSize: { md: 18, xs: 12 },

  fontFamily: 'Candal',
  color: '#9E9E9E',
  fontWeight: 700,
  lineHeight: '28.57px',
  wordWrap: 'break-word',
};
const urlList = [
  {
    name: 'Learn',
    inner: [
      { name: 'About TBC', url: '/Features' },
      { name: 'How TBC Works ', url: '/Work' },
      { name: 'Technical Documentation', url: '#' },
      { name: 'FAQ', url: '#' },
    ],
  },
  {
    name: 'Build',
    inner: [
      { name: 'TuringTXID', url: '/TuringTXID' },
      { name: 'Turingcontract ', url: '/TuringContract' },
      { name: 'TBC Github', url: '#' },
    ],
  },
  {
    name: 'Ecosystem',
    inner: [
      { name: 'Wallets', url: '#' },
      { name: 'Web3 Applications ', url: '#' },
      { name: 'Infrastructures', url: '#' },
      { name: 'Browsers/Tools', url: '#' },
    ],
  },
  {
    name: 'Resources',
    inner: [{ name: 'Press Kit', url: '#' }],
  },
];
const styles = {
  listWrap: {
    color: '#fff',
    display: 'flex',
    justifyContent: { md: 'space-around', xs: 'space-between' },
    flexWrap: { xs: 'wrap', md: 'nowrap' },
  },
  item: {
    width: { md: '25%', xs: '46%' },
    fontSize: { md: '30', xs: 14 },
    fontFamily: 'Candal',
    mb: { xs: '30px', md: 0 },
  },
  name: {
    color: '#9E9E9E',
    lineHeight: { md: '62px', xs: '24px' },
    fontSize: { md: '24px', xs: 12 },
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};
export const Footer = () => {
  const [elementRef, isElementVisible] = useIsElementInViewport();
  const [elementRef1, isElementVisible1] = useIsElementInViewport();
  const [elementRef2, isElementVisible2] = useIsElementInViewport();
  const setLocaleActive = (index: any) => {
    console.log('coming soon');
    if (index == 1) {
      alert('coming soon');
    } else {
      alert('contact@turingbitchain.io');
    }
  };
  return (
    <Box
      sx={{
        width: { md: '100%', xs: '350px' },
        overflow: 'hidden',
        p: { xs: '20px 40px 0', md: '50px 0 50px 80px' },
        m: { md: '76px 0px 32px', xs: '20px auto 36px ' },
        justifyContent: 'center',

        position: 'relative',
        zIndex: 1,
        background: {
          xs: 'linear-gradient(90deg, #3A140F 0%, #1A1E28 30%, #1A1E28 76%, #3A140F 100%)',
        },
        a: {
          display: 'block',
        },
        borderRadius: '30px',
        '.fly1': {
          position: 'absolute',
          top: { md: '236px', xs: '15px' },
          left: { md: '701px', xs: 'auto' },
          right: { md: 'auto', xs: '5px' },
          width: { md: 'auto', xs: '112px' },
        },
        '.fly2': {
          position: 'absolute',
          top: { md: '43px', xs: '94px' },
          right: { md: '64px', xs: 'auto' },
          left: { md: 'auto', xs: '20px' },
          width: { md: 'auto', xs: '127px' },
        },

        '.joinSvg': {
          width: { md: '60px', xs: '50px' },
          height: { md: 'auto', xs: '50px' },
        },
      }}
    >
      <Box sx={styles.listWrap}>
        {urlList.map((item) => {
          return (
            <Box sx={styles.item}>
              <Box>{item.name}</Box>
              {item.inner.map((itemx: any) => {
                return (
                  <a href={itemx.url}>
                    <Box sx={styles.name}>{itemx.name}</Box>
                  </a>
                );
              })}
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          padding: { md: '60px 80px 0 0', xs: 0 },
        }}
      >
        <Box
          sx={{
            p: { md: '10px 0px', xs: '31px 0 0' },
            width: { md: '359px', xs: '100%' },
            display: 'flex',
          }}
        >
          <Box>
            <Box
              sx={{
                color: 'white',
                fontSize: { md: 40, xs: '14px' },
                fontFamily: 'Candal',
                fontWeight: '400',
                lineHeight: { md: '56px', xs: '22px' },
                wordWrap: 'break-word',
              }}
            >
              TBC
            </Box>
            <Box sx={button}>
              <FormattedMessage id="AllRights" />
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: { md: 'flex', xs: 'block' },
              justifyContent: { md: 'space-between' },
              position: 'relative',
              height: { md: 'auto', xs: 'auto' },
            }}
            justifyContent={'right'}
            ref={elementRef2}
          >
            <CSSTransition
              in={!!isElementVisible1}
              timeout={3000}
              classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__bounceInLeft',
              }}
            >
              <Box
                sx={{
                  p: { xs: '0 0 25px', md: '26px 0 0' },
                  textAlign: 'center',
                  display: { xs: 'flex', md: '' },
                  justifyContent: { xs: 'space-between', md: 'auto' },
                  gap: { md: '50px', xs: '7.5px' },
                }}
              >
                <a href="https://twitter.com/Turingbitchain_" target="_blank">
                  <Join1Svg className="joinSvg" />
                </a>
                <a href="https://medium.com/@Turingbitchain" target="_blank">
                  <Join2Svg className="joinSvg" />
                </a>
                <a
                  onClick={() => {
                    setLocaleActive(1);
                  }}
                  target="_blank"
                >
                  <Join3Svg className="joinSvg" />
                </a>
                <a
                  onClick={() => {
                    setLocaleActive(2);
                  }}
                  target="_blank"
                >
                  <Join4Svg className="joinSvg" />
                </a>
              </Box>
            </CSSTransition>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
