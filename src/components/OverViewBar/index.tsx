import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  Modal,
} from '@mui/material';
import { useState, cloneElement } from 'react';
import OverviwMenu, { MenuListConfig } from '../OverviewMenu';
import { IconMenu } from '@/assets/svg/menu';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import { FormattedMessage, useIntl } from 'umi';
import LocaleSwitcher from '@/components/LocaleSwitch';
export const OverViewBar = (props: any) => {
  const intl = useIntl();

  const [rightDrawerOpen, __rightDrawerOpen] = useState(false);
  const toggleDrawer = () => __rightDrawerOpen((v) => !v);
  const setLocaleActive = (isBlank: any) => {
    if (isBlank) {
      console.log('coming soon', isBlank);
      alert('coming soon');
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const modalStyle = {
    backgroundColor: '#11141D',
    color: '#fff',
    border: '2px solid red',
    borderRadius: '10px',
    padding: '20px',
    fontSize: '18px',
  };
  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    zIndex: 100,
  };
  // const handleShow = () => setShow(true);
  return (
    <Box>
      <Box
        sx={{
          margin: { md: 'auto' },
          height: { md: 'auto', xs: '40px' },
          alignItems: 'center',
          justifyContent: { md: 'space-between' },
          p: { xs: '0px 11px 0px 20px', md: '12px 32px' },
          boxShadow: { xs: '0px 4px 4px rgba(0, 0, 0, 0.04)', md: 'none' },
          right: { md: '0px' },
          borderRadius: { xs: 0, md: '12px' },
          m: { md: '32px 140px 0', xs: '4px ' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            height: { xs: '100%', md: 'auto' },
            alignItems: { xs: 'center', md: 'auto' },
            justifyContent: { xs: 'auto', md: 'space-between' },
          }}
        >
          <a href="/">
            <Box
              sx={{
                display: { md: 'flex', xs: 'none' },
                alignItems: 'flex-end',
              }}
            >
              <img
                style={{ width: '50px', height: '50px' }}
                src="/upload/logo.png?v=1122"
                className="logoImg"
                alt=""
              />
              <Box
                sx={{
                  color: 'white',
                  fontSize: { md: 40, xs: '14px' },
                  fontFamily: 'Candal',
                  fontWeight: '400',
                  lineHeight: { md: '56px', xs: '22px' },
                  ml: { md: '15px', xs: '10px' },
                  wordWrap: 'break-word',
                }}
              >
                TBC
              </Box>
            </Box>
          </a>
          <Box
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
                width: '100%',
              },
              paddingTop: '7.5px',
              justifyContent: 'space-between',
            }}
          >
            <a href="/">
              <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                <Box>
                  <img
                    src="/upload/logo.png?v=1122"
                    style={{ marginTop: '-4px' }}
                    width="26px"
                    height="auto"
                    alt=""
                  />
                </Box>
                <Box
                  sx={{
                    color: 'white',
                    fontSize: { md: 40, xs: '14px' },
                    fontFamily: 'Candal',
                    fontWeight: '400',
                    lineHeight: { md: '56px', xs: '22px' },
                    ml: { md: '15px', xs: '10px' },
                    wordWrap: 'break-word',
                  }}
                >
                  TBC
                </Box>
              </Box>
            </a>
            <Box sx={{ display: 'flex' }}>
              {/* <Box
                sx={{
                  mt: '-4px',
                  mr: '1px',
                }}
              >
                <LocaleSwitcher
                  mode="phone"
                  changeLocale={props.changeLocale}
                />
              </Box> */}
              <IconButton sx={{ pt: 0 }} onClick={toggleDrawer}>
                <IconMenu fontSize="small" fill="#000" />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'block', md: 'flex' } }}>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: '40px',
                alignItems: 'center',
                zIndex: 1000,
                a: {
                  marginRight: { md: '32px' },
                  ':last-child': {
                    mr: '0',
                  },
                },
                '.navA': {
                  fontSize: { md: '20px' },
                  color: '#ffF',
                  fontWeight: 700,
                  display: 'flex',
                  '&:hover': {
                    '.sign': {
                      transform: 'rotate(-90deg)',
                    },
                    '.ul': { display: 'block' },
                  },
                },
                '.sign': {
                  transform: 'rotate(90deg)',
                  color: 'white',
                  transition: 'all .5s',
                  marginTop: '4px',
                  marginLeft: '6px',
                },
                '.symbol': {
                  margin: '0 31px',
                  fontFamily: 'Roboto',
                  fontSize: '20px',
                },
                '.ulWrap': {
                  paddingTop: '10px',
                  position: 'absolute',
                  top: '27px',
                  left: '-244px',
                },
                '.ul': {
                  background: '#000000',
                  padding: '20px 33px',
                  borderRadius: '20px',
                  display: 'none',
                },
                '.li': {
                  color: '#fff',
                  fontSize: '18px',
                  lineHeight: '23px',
                  whiteSpace: 'nowrap',
                  fontWeight: '400',
                  textAlign: 'center',
                  '&:hover': {
                    color: '#F33000',
                  },
                },
              }}
            >
              {MenuListConfig.map(
                ([text, href, list, isBlank, underDevelopment], index) => {
                  return (
                    <Box sx={{ position: 'relative' }}>
                      <a
                        key={index}
                        href={href}
                        target={!isBlank ? '_self' : '_blank'}
                        onClick={() => {
                          setLocaleActive(underDevelopment);
                        }}
                      >
                        <Typography className="navA">
                          {text}
                          {index === 1 ||
                          index === 2 ||
                          index === 3 ||
                          index === 4 ||
                          index === MenuListConfig.length - 1 ? (
                            <div className="sign">{'>'}</div>
                          ) : (
                            ''
                          )}
                          {index + 1 !== MenuListConfig.length ? (
                            <Box className="symbol">/</Box>
                          ) : (
                            ''
                          )}
                          {list && list.length ? (
                            <Box
                              className="ulWrap"
                              style={{
                                left:
                                  index === 2
                                    ? '-51px'
                                    : index === 3
                                    ? '-80px'
                                    : index === 4
                                    ? '-65px'
                                    : index === MenuListConfig.length - 1
                                    ? '-50px'
                                    : '',
                              }}
                            >
                              <Box className="ul">
                                {list.map((item: any) => {
                                  return (
                                    <a href={item.url}>
                                      <Box className="li">{item.name}</Box>
                                    </a>
                                  );
                                })}
                              </Box>
                            </Box>
                          ) : (
                            ''
                          )}
                        </Typography>
                      </a>
                      {/* <ToastContainer /> */}
                    </Box>
                  );
                },
              )}
            </Box>

            <Box
              sx={{
                display: { md: 'flex', xs: 'none' },
                alignItems: 'center',
                marginLeft: '32px',
              }}
            >
              {/* <LocaleSwitcher changeLocale={props.changeLocale} /> */}
            </Box>
          </Box>
        </Box>
        <div></div>
        <Drawer
          anchor="right"
          elevation={5}
          open={rightDrawerOpen}
          onClose={toggleDrawer}
        >
          <OverviwMenu />
        </Drawer>
      </Box>
      {/* <Modal show={show} onHide={handleClose}></Modal> */}
    </Box>
  );
};
