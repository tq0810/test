import { Box, Typography } from '@mui/material';
const styles = {
  whiteTitle: {
    textAlign: 'center',
    color: '#fff',
    fontSize: { md: 36, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    width: { xl: '1092px' },
    m: { md: '0 auto 60px', xs: '0 auto 20px' },
  },
  secondTitle: {
    textAlign: 'center',
    color: '#7A7A7A',
    fontSize: { md: 24, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    width: { xl: '1092px' },
    m: { md: '0 auto 60px', xs: '0 auto 20px' },
  },
  wrap: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexWrap: 'wrap',
    gap: { md: '40px', xs: '14px' },
    width: { md: 'auto', xs: '350px' },
    m: { md: '0 auto 100px', xs: '0 auto 20px' },
  },
  item: {
    fontFamily: 'Candal',
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',

    background:
      'linear-gradient(100deg, #1A1E28 30%, #1A1E28 53%, #3A140F 100%)',
    borderRadius: '26px',
    position: 'relative',
    padding: { md: '62px 28px', xs: '35px 21px' },
    width: { md: 'calc(33% - 30px)', xs: '100%' },
  },

  content: {
    width: '100%',
    color: '#fff',
    fontSize: { md: '36px', xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: { md: '50px', xs: '30px' },
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
    textAlign: 'center',
  },
};
const list = [
  {
    content: 'UTXO script programming is more complicated',
  },
  {
    content: `Public chains such as BTC limit script types, script volume, etc.`,
  },
  {
    content: `Distributed state management is more complex`,
  },
];
const list1 = [
  {
    content:
      'In fact, TBC is freely programmable. As can be seen from the Bitcoin wiki, Bitcoin has a large number of opcodes, which look extremely unfriendly and very much like an assembly language. Those who have studied the principles of Bitcoin script should know that the judgment of whether Bitcoin can be spent is stored and verified through a stack structure.',
  },
  {
    content: `Put the unlocking and locking script in the stack in turn, and then execute the opcode in turn. If the return value of the final stack is true, then this UTXO can be spent, otherwise it cannot be spent.`,
  },
  {
    content: `Many programming languages also have a stack structure such as Java, Rust, go, etc. Taking Java as an example, Java has the concept of stack memory and heap memory. The stack memory mainly executes the internal logic of the function, and the heap memory mainly stores data such as objects. It can be seen that the stack can actually execute arbitrary logic, and the bytecode compiled by Java is operating this stack to implement various complex business logic.`,
  },
  {
    content: `Although the stack and virtual machine used by TBC scripts are not as complex as JVM, almost all Turing-complete logic can be achieved through a certain combination. TBC scripts don't have infinite loops, but that doesn't mean they aren't Turing-complete. In fact, this is intentional, in order to ensure that the calculation will produce a result. In fact, there is no real "infinite loop" in Ethereum, etc. as the loop will stop after the gas is burned out. When the TBC script loops, it needs to write the loop repeatedly into the script stack in advance. If you want to do an infinite loop, you must write an infinitely long scripts but this kind of transaction is obviously meaningless. In actual scripting such as TBC scripts will specify an upper limit number of cycles to ensure that the handling fee is within a reasonable range (the same principle as Ethereum gas burnout).`,
  },
];
export const Turing = (props: any) => {
  return (
    <Box
      sx={{
        color: '#fff',
        h4: {
          color: '#F33000',
          fontSize: { md: '70px', xs: '24px' },
          textAlign: 'center',
          p: { md: '20px 0 60px', xs: '0 0 20px' },
          m: 0,
        },
        h6: { color: '#fff', fontSize: '18px', padding: '10px 0' },
        marginTop: '50px',
        p: { md: '0 50px 50px', xs: '0 20px 20px' },
        '.rImg': {
          position: 'absolute',
          right: '50px',
          top: '45px',
        },
      }}
    >
      <Typography variant="h4" gutterBottom sx={{}}>
        How TBC Runs Turing -Complete Smart Contracts
      </Typography>
      <Box sx={styles.whiteTitle}>
        TBC Can Run The Real Turing-Complete High-Performance Smart Contract On
        The UTXO Public Chain
      </Box>
      <Box sx={styles.secondTitle}>
        The traditional UTXO model has great advantages in parallelization and
        outstanding expansion performance, but we rarely see Turing-complete
        smart contracts on UTXO public chains. Mainly for the following reasons:
      </Box>
      <Box sx={styles.wrap}>
        {list.map((item, i) => {
          return (
            <Box sx={styles.item}>
              <Box sx={styles.content}>{item.content}</Box>
            </Box>
          );
        })}
      </Box>
      <Box>
        {list1.map((item, i) => {
          return (
            <Box sx={styles.item1}>
              <Box sx={styles.content1}>{item.content}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
