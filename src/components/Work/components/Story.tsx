import { Box, Typography } from '@mui/material';

const styles = {
  wrap: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap',
    gap: { md: '40px', xs: '14px' },
    width: { md: 'auto', xs: '350px' },
    m: '0 auto',
  },
  item: {
    display: 'block',
    fontFamily: 'Candal',

    background:
      'linear-gradient(100deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',
    borderRadius: '26px',
    minHeight: { md: '260px', xs: '134px' },
    position: 'relative',
    alignItems: 'center',
    padding: { md: '62px 42px', xs: '27px 20px' },
    width: { md: 'calc(33% - 30px)', xs: '100%' },

    '.rectangle': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: { md: 'auto', xs: '52px' },
    },
  },
  title: {
    minHeight: { md: '100px', xs: '48px' },
    lineHeight: { md: '50px', xs: '24px' },
    color: '#F33000',
    fontSize: { md: 30, xs: 16 },
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
    mt: { md: '30px' },
  },
};
const list = [
  {
    title: 'The Most Scalable Blockchain in Theory',
    content:
      'TBC can store data and execute smart contracts on one blockchain with no limit. It can outperform all existing blockchains by providing the ultimate scaling solution.',
  },
  // {
  //   title: 'Layer 1 DID',
  //   content: `Decentralized Identity (DID) is the foundation of Web3 Applications. TBC's Built-in Layer 1 DID solution ensures data ownership and app interoperability.`,
  // },
  {
    title: 'High-Performance UTXO Smart Contract',
    content: `TBC is built with the world's first High-performance Smart Contract on UTXO Model, which satisfies all the commercial scenarios with high functionality.`,
  },
];

export const Story = (props: any) => {
  return (
    <Box>
      <Box sx={styles.wrap}>
        {list.map((item, i) => {
          return (
            <Box sx={styles.item}>
              <Box sx={styles.title}>{item.title}</Box>
              <Box sx={styles.content}>{item.content}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
