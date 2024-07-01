import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'umi';

import { Title } from './MTitle';
import { HistotyPhone } from './HistoryPhone';

const styles = {
  listWrap: {
    display: { md: 'flex', xs: 'none' },
    gap: '237px',
    justifyContent: 'center',
  },
  left: {
    width: '700px',
    position: 'relative',
    zIndex: 2,
  },
  item: {
    background:
      'linear-gradient(100deg,#3A140F  30%, #1A1E28 53%, #1A1E28 100%)',

    borderRadius: '26px',
    minHeight: '234px',
    position: 'relative',
    padding: '0 44px 33px',
    mb: '112px',
    '&:last-child': {
      mb: 0,
    },
  },
  title: {
    color: '#F33000',
    fontSize: 26,
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    padding: '42px 0 18px',
    lineHeight: '33px',
  },
  content: {
    width: '100%',
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: '33px',
  },
  triangle: {
    width: '0',
    height: 0,
    borderLeft: '68px solid #1A1E28',
    borderTop: '30px solid transparent',
    borderBottom: '30px solid transparent',
    position: 'absolute',
    top: 'calc(50% - 30px)',
    right: '-68px',
  },
  rect: {
    width: '20px',
    height: '20px',
    background: 'white',
    borderRadius: 9999,
    position: 'absolute',
    top: 'calc(50% - 10px)',
    right: '-128px',
  },
  right: {
    paddingTop: '178px',
    position: 'relative',
    zIndex: 1,
  },
  item1: {
    background:
      'linear-gradient(100deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',
  },

  triangle1: {
    width: '0',
    height: 0,
    borderRight: '68px solid #1A1E28',
    borderLeft: 'none',
    position: 'absolute',
    left: '-68px',
  },
  rect1: {
    left: '-129px',
  },
  middle: {
    position: 'absolute',
    top: 0,
    left: '-122px',
    width: '6px',
    height: 'calc(100% - 120px)',
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
    title: '2022.02',
    content: 'The first version of the TBC node program entered development',
  },
  {
    title: '2022.08',
    content:
      'TuringContract, a Turing-complete high- performance smart contract solution under the UTXO model, completed the design.',
  },
  {
    title: '2023.12',
    content:
      'The TBC Beta testnetwork was launchedand the main ecology.including a largenumber of data serviceproviders, wallets,Web3 applicationsDefi applications, etc.migrated to the TBCtest network.',
  },
];
const list1 = [
  {
    title: '2022.01',
    content:
      'The design of a TuringlD scheme suitable for UTXO blockchain is completed',
  },
  {
    title: '2022.05',
    content:
      'The TuringTxID technical solution applied to TBC completed the detailed design and was authorized for implementation.',
  },
  {
    title: '2023.01',
    content:
      'The TBC Alpha test network was launched the TuringContract solution was verified the blockchain processing performance was verified, and a score of 5000+tps was achieved',
  },
  {
    title: '2024.02',
    content: 'TBC beta Mainnet Launched',
  },
];
export const History = (props: any) => {
  return (
    <Box>
      <Title
        title="TBC History"
        content="Its underlying technology comes from the UTXO+POW model that has been verified for more than ten years"
      ></Title>
      <Box sx={styles.listWrap}>
        <Box sx={styles.left}>
          {list.map((item) => {
            return (
              <Box sx={styles.item}>
                <Box sx={styles.title}>{item.title}</Box>
                <Box sx={styles.content}>{item.content}</Box>
                <Box sx={styles.triangle}></Box>
                <Box sx={styles.rect}></Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ ...styles.left, ...styles.right }}>
          <Box sx={styles.middle}></Box>

          {list1.map((item) => {
            return (
              <Box sx={{ ...styles.item, ...styles.item1 }}>
                <Box sx={{ ...styles.title }}>{item.title}</Box>
                <Box sx={{ ...styles.content }}>{item.content}</Box>
                <Box sx={{ ...styles.triangle, ...styles.triangle1 }}></Box>
                <Box sx={{ ...styles.rect, ...styles.rect1 }}></Box>
              </Box>
            );
          })}
        </Box>
      </Box>
      <HistotyPhone />
    </Box>
  );
};
