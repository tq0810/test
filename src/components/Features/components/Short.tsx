import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'umi';
import Rectangle from '@/assets/img/Rectangle.png';

import { Title } from './MTitle';

const styles = {
  wrap: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap',
    gap: { md: '46px', xs: '14px' },
    width: { md: 'auto', xs: '350px' },
    m: '0 auto',
  },
  item: {
    display: { md: 'flex', xs: 'block' },

    background:
      'linear-gradient(100deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',
    borderRadius: '26px',
    minHeight: { md: '260px', xs: '134px' },
    position: 'relative',
    alignItems: 'center',
    padding: { md: '44px', xs: '27px 20px' },
    width: { md: 'calc(33% - 30px)', xs: '100%' },

    '.rectangle': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: { md: 'auto', xs: '52px' },
    },
  },
  title: {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '78px',
    pt: { md: '6px', xs: '3px' },
    pl: { md: '17px', xs: '10px' },
    lineHeight: { md: '42px', xs: '24px' },
    color: '#fff',
    fontSize: { md: 28, xs: 16 },
  },
  content: {
    width: '100%',
    color: '#fff',
    fontSize: { md: 22, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: '33px',
  },
};
const list = [
  {
    content: 'Layer 1 – UTXO model – Same Structure as Bitcoin.',
  },
  {
    content:
      'Aim to be the best Side-Chain of Bitcoin. Bitcoin’s External & Scalable Hard-Drive. ',
  },
  {
    content:
      'Same wallet address as Bitcoin wallet address. (Optional by Bitcoin holder)',
  },
  {
    content:
      'BTCfi narrative. (Enable to use BTC as asset, enable BTC as transaction unit)    ',
  },
  {
    content: 'Bitcoin operation system (Viable smart contract)',
  },
  {
    content: 'TPS – 12,000+',
  },
  {
    content: 'Proven Security Model - POW',
  },
  {
    content:
      'Zero-confirmation technology – FT & NFT transaction goes through instantly. (Low latency on-chain application user experience)',
  },
  {
    content: 'Permissionless – Anyone can get involved.',
  },
];

export const Short = (props: any) => {
  return (
    <Box>
      <Title
        title="Why TBC in Short"
        content="What sets TBC apart from the rest? While other public blockchains may excel in specific areas, TBC stands out as the only public chain that boasts the following features:"
      ></Title>
      <Box sx={styles.wrap}>
        {list.map((item, i) => {
          return (
            <Box sx={styles.item}>
              <img src={Rectangle} className="rectangle" />
              <Box sx={styles.title}>{i + 1}</Box>
              <Box sx={styles.content}>{item.content}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
