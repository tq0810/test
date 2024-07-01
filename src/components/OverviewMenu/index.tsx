import {
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
} from '@mui/material';
import { dynamic, useIntl } from 'umi';
// import { useState } from 'react';
import { Modal } from 'react-bootstrap';

export const MenuListConfig: any[] = [
  ['Info', '#', [], false, true],
  [
    'Learn',
    '/Features',
    [
      { name: 'about TBC', url: '/Features' },
      { name: 'how TBC works', url: '/Work' },
      { name: 'How TBC Runs Turing-Complete Smart Contracts', url: '/Running' },
      { name: 'How TBC Achieves Low Fees', url: '/Fee' },
      { name: 'How TBC Scales', url: '/TBCScales' },
    ],
  ],
  [
    'Solution',
    '/TuringTXID',
    [
      { name: 'TuringTXID', url: '/TuringTXID' },
      { name: 'TuringContract', url: '/TuringContract' },
      { name: 'TBC Github ', url: 'https://github.com/TuringBitChain/' },
    ],
  ],
  // ['Miners', '#'],
  [
    'Miners',
    '/TKYCCertification',
    [{ name: 'KYC certification', url: '/TKYCCertification' }],
  ],
  // ['Ecosystem', '#', [], false, true],
  [
    'Ecosystem',
    'https://turingwallet.xyz/api/',
    [
    { name: 'API Documentation', url: 'https://turingwallet.xyz/api/' },
    ],
  ],
  ['Explorer', 'http://explorer.turingbitchain.io', [], true],
  ['Wallet', '/Wallet'],
  [
    'Activity',
    '/Airdrop',
    [
      { name: 'Airdrop', url: '/Airdrop' },
      { name: 'Winner Query', url: '/WinnerQuery' },
    ],
  ],
];
export default dynamic({
  loader: async function () {
    let show = false;
    const setLocaleActive = (isBlank: any) => {
      if (isBlank) {
        console.log('coming soon', isBlank);
        alert('coming soon');
        setTimeout(() => {
          show = false;
          console.log('进来了', show);
        }, 2000);
        show = true;
      }
    };
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);

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
    return () => {
      const intl = useIntl();
      return (
        <Box sx={{ width: '269px', mt: '29px' }}>
          <List>
            {MenuListConfig.map(
              ([text, href, list, isBlank, underDevelopment], index) => (
                <Box>
                  <ListItem
                    sx={{
                      justifyContent: 'center',
                    }}
                    key={text}
                    disablePadding
                  >
                    <a
                      href={href}
                      target={!isBlank ? '_self' : '_blank'}
                      onClick={() => {
                        if (href === '#') {
                          console.log(1);
                        }
                        setLocaleActive(underDevelopment);
                      }}
                    >
                      <ListItemButton>
                        <ListItemText
                          sx={{
                            color: '#fff',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '354%',
                          }}
                          primary={text}
                        />
                      </ListItemButton>
                    </a>
                  </ListItem>
                  {list && list.length && list.length > 0 ? (
                    <Collapse in={true} timeout="auto" unmountOnExit>
                      <List
                        component="div"
                        disablePadding
                        sx={{
                          background: '#1E2330',
                          margin: '0 20px',
                          borderRadius: '7px',
                        }}
                      >
                        {list.map((item: any) => {
                          return (
                            <a href={item.url}>
                              <ListItemButton
                                sx={{ padding: 0, color: '#fff' }}
                              >
                                <ListItemText
                                  primary={item.name}
                                  sx={{
                                    pl: '10px',
                                    color: '#fff',
                                    background: '#1E2330',
                                  }}
                                />
                              </ListItemButton>
                            </a>
                          );
                        })}
                      </List>
                    </Collapse>
                  ) : (
                    ''
                  )}
                </Box>
              ),
            )}
          </List>
          {/* <Modal show={show} style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            zIndex: '10000',
            transform: 'translate(-50%, -50%)',
          }}>
            <Modal.Body style={modalStyle}>
              coming soon
            </Modal.Body>
          </Modal> */}
        </Box>
      );
    };
  },
});
