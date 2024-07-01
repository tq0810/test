import { Box, Typography } from '@mui/material';
import Rectangle from '@/assets/img/Rectangle.png';

const styles = {
  allWrap: { display: { md: 'flex' }, justifyContent: 'space-between' },
  wrap: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap',
    gap: { md: '40px', xs: '14px' },
    width: { md: '50%', xs: '350px' },
    m: { md: '0 auto 100px', xs: '0 auto 20px' },
  },
  title1: {
    color: '#F33000',
    fontSize: { md: '70px', xs: '24px' },
    fontFamily: 'Candal',
    p: { md: '0 0 60px', xs: '0 0 20px' },
    m: 0,
  },
  item1: {
    mb: { md: '60px', xs: '30px' },
  },
  content1: {
    width: '100%',
    color: '#fff',
    fontSize: { md: '24px', xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: { md: '36px', xs: '21px' },
  },
  wrap1: {
    position: 'relative',
    zIndex: 2,
    flexWrap: 'wrap',
    gap: { md: '40px', xs: '14px' },
    width: { md: '44%', xs: '350px' },
    m: { md: '0 auto 100px', xs: '0 auto 20px' },
  },
  item: {
    background:
      'linear-gradient(100deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',
    borderRadius: '26px',
    minHeight: { md: '260px', xs: '134px' },
    position: 'relative',
    alignItems: 'center',
    padding: { md: '44px', xs: '27px 20px' },
    mb: { md: '35px', xs: '20px' },
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
  secondTitle: {
    color: '#7A7A7A',
    fontSize: { md: 24, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    m: { md: '0 auto 60px', xs: '0 auto 20px' },
  },
};
const list = [
  {
    content:
      'Adopt a layer of smart contract technology "TuringTXID scheme" compatible with UTXO parallel processing capabilities;',
  },
  {
    content:
      'Combining the advantages of the UTXO model, it is the smart contract solution on the Layer-1 chain with the highest concurrency and the lowest execution cost in the blockchain field;',
  },
  {
    content:
      'For the first time, the practical Turing-completeness of the UTXO model public chain has been achieved, which can meet the usage scenarios of all Web3 applications and Metaverse applications.',
  },
];
const list1 = [
  {
    content: `Although the stack and virtual machine used by TBC scripts are not as complex as JVM, almost all Turing-complete logic can be achieved through a certain combination. TBC scripts don't have infinite loops, but that doesn't mean they aren't Turing-complete. In fact, this is intentional, in order to ensure that the calculation will produce a result. In fact, there is no real "infinite loop" in Ethereum, etc. as the loop will stop after the gas is burned out. When the TBC script loops, it needs to write the loop repeatedly into the script stack in advance. If you want to do an infinite loop, you must write an infinitely long scripts but this kind of transaction is obviously meaningless. In actual scripting such as TBC scripts will specify an upper limit number of cycles to ensure that the handling fee is within a reasonable range (the same principle as Ethereum gas burnout).`,
  },
];
export const Example = (props: any) => {
  return (
    <Box sx={styles.allWrap}>
      <Box sx={styles.wrap}>
        <Box sx={styles.title1}>
          An Example Of How TBC Implemments Smart Contract
        </Box>
        {list1.map((item, i) => {
          return (
            <Box sx={styles.item1}>
              <Box sx={styles.content1}>{item.content}</Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={styles.wrap1}>
        <Box sx={styles.secondTitle}>
          Therefore, TBC can finally achieve the Web3 public chain of practical
          high-performance UTXO model smart contracts:
        </Box>
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
