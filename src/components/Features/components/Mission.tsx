import { Box, Typography } from '@mui/material';
import { MissionMap } from './MissionMap';

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
    content: 'Apply the UTXO model to achieve high concurrency.',
  },
  {
    content: 'Apply PoW consensus empower every miner to handle massive data.',
  },
  {
    content: 'Apply the advanced algorithm',
  },
];

export const Mission = (props: any) => {
  return (
    <Box>
      <Title
        title="Mission & Roadmap"
        content="TBC is reinventing the original bitcoin design and bringing up a revolutionary scaling solution"
      ></Title>
      <Box sx={styles.wrap}>
        {list.map((item, i) => {
          return (
            <Box sx={styles.item}>
              <Box sx={styles.content}>{item.content}</Box>
            </Box>
          );
        })}
      </Box>
      <MissionMap />
    </Box>
  );
};
