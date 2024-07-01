import { Box, Typography } from '@mui/material';

const styles = {
  wrap: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap',
    width: { md: 'auto', xs: '350px' },
    m: { xs: '0 auto', md: '100px 0 0' },
    background:
      'linear-gradient(100deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',
    borderRadius: '20px',
    padding: { md: '60px 0 0', xs: '20px 0 0' },
  },
  title: {
    margin: '0 auto',
    color: '#F33000',
    fontSize: { md: 50, xs: 16 },
    lineHeight: { md: '70px', xs: '20px' },
    fontFamily: 'Candal',
    fontWeight: '400',
    wordWrap: 'break-word',
  },
  itemWrap: {
    display: { md: 'flex', xs: 'block' },
  },
  item: {
    display: 'block',
    fontFamily: 'Candal',

    borderRadius: '26px',
    minHeight: { md: '260px', xs: '134px' },
    position: 'relative',
    alignItems: 'center',
    padding: { md: '42px 42px', xs: '0 20px 24px' },
    width: { md: 'calc(33%)', xs: '100%' },

    '.rectangle': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: { md: 'auto', xs: '52px' },
    },
  },

  content: {
    width: '100%',
    color: '#fff',
    fontSize: { md: '24px', xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: '36px',
  },
};
const list = [
  {
    content:
      'Transaction Fees can be Gradually Reduced when Scaling. Low Fee is the Key in Blockchain Technology Adoption.',
  },
  {
    content: `With POW + UTXO Model Tested for Years, TBC will be the Safest, Most Decentralized and Highest Performance Blockchain.`,
  },
  {
    content: `Any Kinds of Web3 Application can be built on TBC, which integrates Layer 1 Smart Contract, DID, and extremely low fees solution.`,
  },
];

export const Amount = (props: any) => {
  return (
    <Box>
      <Box sx={styles.wrap}>
        <Box sx={styles.title}>TBC is Unparalleled among All Blockchains</Box>
        <Box sx={styles.itemWrap}>
          {list.map((item, i) => {
            return (
              <Box sx={styles.item}>
                <Box sx={styles.content}>{item.content}</Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
