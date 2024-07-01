import { Box, Typography } from '@mui/material';

const styles = {
  listWrap: {
    display: { md: 'none', xs: 'flex' },
    justifyContent: 'center',
    width: '350px',
    margin: '0 auto',
  },
  left: {
    width: '306px',
    ml: '44px',
    position: 'relative',
    zIndex: 2,
  },
  item: {
    background:
      'linear-gradient(100deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',

    borderRadius: '26px',
    minHeight: '60px',
    position: 'relative',
    padding: '14px 19px',
    mb: '20px',
    '&:last-child': {
      mb: 0,
    },
  },
  title: {
    color: '#F33000',
    fontSize: 14,
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: '21px',
  },
  content: {
    width: '100%',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: '21px',
  },
  triangle: {
    borderTop: '12px solid transparent',
    borderBottom: '12px solid transparent',
    position: 'absolute',
    width: '0',
    height: 0,
    borderRight: '18px solid #1A1E28',
    top: 'calc(50% - 12px)',
    left: '-12px',
  },
  rect: {
    width: '10px',
    height: '10px',
    background: 'white',
    borderRadius: 9999,
    position: 'absolute',
    top: 'calc(50% - 5px)',
    left: '-33px',
  },
  right: {
    paddingTop: '0',
    position: 'relative',
    zIndex: 1,
  },

  middle: {
    position: 'absolute',
    top: 0,
    left: '-30px',
    width: '4px',
    height: 'calc(100% - 35px)',
    background: 'linear-gradient(0deg, #F33000 0%, #313131 100%)',
  },
};
const list = [
  {
    title: '2021.09',
    content:
      'The underlying technology used for TBC transaction data clipping or multiplexing and a layer of contracts was invented and published.',
  },
  {
    title: '2022.01',
    content:
      'The design of a TuringlD scheme suitable for UTXO blockchain is completed',
  },
  {
    title: '2022.02',
    content: 'The first version of the TBC node program entered development',
  },
  {
    title: '2022.05',
    content:
      'The TuringTxID technical solution applied to TBC completed the detailed design and was authorized for implementation.',
  },
  {
    title: '2022.08',
    content:
      'TuringContract, a Turing-complete high- performance smart contract solution under the UTXO model, completed the design.',
  },
  {
    title: '2023.01',
    content:
      'The TBC Alpha test network was launched the TuringContract solution was verified the blockchain processing performance was verified, and a score of 5000+tps was achieved',
  },
  {
    title: '2023.12',
    content:
      'The TBC Beta testnetwork was launchedand the main ecology.including a largenumber of data serviceproviders, wallets,Web3 applicationsDefi applications, etc.migrated to the TBCtest network.',
  },
  {
    title: '2024.02',
    content: 'TBC beta Mainnet Launched',
  },
];

export const HistotyPhone = (props: any) => {
  return (
    <Box>
      <Box sx={styles.listWrap}>
        <Box sx={{ ...styles.left, ...styles.right }}>
          <Box sx={styles.middle}></Box>

          {list.map((item) => {
            return (
              <Box sx={{ ...styles.item }}>
                <Box sx={{ ...styles.title }}>{item.title}</Box>
                <Box sx={{ ...styles.content }}>{item.content}</Box>
                <Box sx={{ ...styles.triangle }}></Box>
                <Box sx={{ ...styles.rect }}></Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
