import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'umi';
import { Title } from './MTitle';
import vv1 from '@/assets/img/vv1.png';
import vv2 from '@/assets/img/vv2.png';
import vv3 from '@/assets/img/vv3.png';
import vv4 from '@/assets/img/vv4.png';

const styles = {
  listWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: { md: '48px', xs: '20px' },
    padding: { md: '80px 0 0 0', xs: '10px 0 0' },
  },
  item: {
    background:
      'linear-gradient(100deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',
    borderRadius: '26px',
    width: { md: 'calc(50% - 24px)', xs: '100%' },
    minHeight: { md: '450px', xs: '194px' },
    padding: { md: '0 56px 30px', xs: '20px 20px' },
    position: 'relative',
  },
  title: {
    width: { xl: '360px', md: '325px', xs: '215px' },
    color: '#F33000',
    fontSize: { md: 32, xs: 16 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordBreak: 'break-all',
    padding: { md: '76px 0 37px', xs: '0 0 20px' },
    lineHeight: { md: '41px', xs: '20px' },
  },
  content: {
    width: '100%',
    color: '#7A7A7A',
    fontSize: { md: 22, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
  }
};
const list = [
  {
    title: 'DECENTRALIZED',
    content:
      'Decentralization can ensure the robustness, cross-regional, and faircompetition of the system, and make the whole system have self-sustaining vitality.',
    img: vv1,
  },
  {
    title: 'HIGH-PERFORMANCE',
    content:
      'The optimized UTXO high-concurrency model is adopted, and the transaction format of the traditional UTXO model is upgraded to create a super node with high-performance parallel computing to ensure a dynamically scalable public chain that can carry millions of TPS and even be used by global users.',
    img: vv2,
  },
  {
    title: 'BUILT-IN NATIVE DISTRIBUTED ID',
    content:
      'Let each piece of data point to a specific user; users naturally control their own data, achieve data interconnection between applications, simplify the development process, and have the basis for building high-performance Web3 applications.',
    img: vv3,
  },
  {
    title: 'LAYER-1 UTXO SMART CONTRACT',
    content:
      'It can achieve all the logic of EVM, but thanks to the advantages of the UTXO model, this solution has the advantages of high performance and extremely low handling fees.',
    img: vv4,
  },
];
export const TermContent = (props: any) => {
  return (
    <Box
      sx={{
        color: '#fff',
        h4: { color: '#F33000', fontSize: { md: '70px', xs: '24px' } },
        h6: { color: '#fff', fontSize: '18px', padding: '10px 0' },
        marginTop: '50px',
        p: { md: '0 50px 50px', xs: '0 20px 20px' },
        '.rImg': {
          position: 'absolute',
          right: { md: '50px', xs: '22px' },
          top: { md: '45px', xs: '22px' },
          width: { md: 'auto', xs: '40px' },
        },
      }}
    >
      <Title
        title="TBC Features"
        content="TBC is a blockchain that solves the blockchain trilemma and is born for
        the Web3 Era."
      ></Title>

      <Box sx={styles.listWrap}>
        {list.map((item) => {
          return (
            <Box sx={styles.item}>
              <Box sx={styles.title}>{item.title}</Box>
              <Box sx={styles.content}>{item.content}</Box>
              <img src={item.img} className="rImg" />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
