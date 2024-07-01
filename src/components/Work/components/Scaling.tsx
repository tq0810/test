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
    color: '#fff',
  },
  listWrap: {},

  itemWrap: {
    alignItems: 'center',
  },
  item: {
    display: 'block',
    fontFamily: 'Candal',
    borderRadius: '26px',
    minHeight: { md: '260px', xs: '134px' },
    position: 'relative',
    alignItems: 'center',
    padding: { md: '32px 42px', xs: '27px 20px' },

    '.rectangle': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: { md: 'auto', xs: '52px' },
    },
  },
  big: {
    fontSize: { md: '100px', xs: '24px' },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    lineHeight: { md: '100px', xs: '26px' },
    wordWrap: 'break-word',
    mb: '20px',
  },
  title: {
    lineHeight: { md: '70px', xs: '24px' },
    color: '#F33000',
    fontSize: { md: 64, xs: 14 },
    m: { md: '32px 0 50px', xs: '0 0 10px' },
  },

  ownLi: {
    color: '#fff',
    fontSize: { md: 24, xs: 14 },
    mb: '10px',
    '::before': {
      content: `''`,
      display: 'inline-block',
      verticalAlign: '2px',
      width: { md: '10px', xs: '6px' },
      height: { md: '10px', xs: '6px' },
      borderRadius: { md: '10px', xs: '6px' },
      background: '#fff',
      marginRight: { md: '10px', xs: '6px' },
    },
  },
};

export const Scaling = (props: any) => {
  return (
    <Box>
      <Box sx={styles.wrap}>
        <Box sx={styles.listWrap}>
          <Box sx={styles.itemWrap}>
            <Box sx={styles.item}>
              <Box sx={styles.big}>
                <span style={{ color: '#F33000' }}>Scaling </span>is Major
                Challenge in Blockchain Industry
              </Box>
              <Box sx={styles.title}>What's Our Scaling Solution?</Box>
              <Box sx={styles.list}>
                <Box sx={styles.ownLi}>
                  Adopts UTXO Model to Achieve High Concurrency
                </Box>
                <Box sx={styles.ownLi}>
                  Adopts Big Block Scaling Strategy, Passed through Tests for
                  Years.
                </Box>
                <Box sx={styles.ownLi}>
                  Operates POW Mechanism to Ensure High-level Decentralization.
                  Builds Super Nodes to Help Miners Process Massive Data.
                </Box>
                <Box sx={styles.ownLi}>
                  Applying parallel computation algorithms from experts in high
                  performance computing to maximize the node's performance.
                </Box>
              </Box>
            </Box>
            <Box sx={styles.item}>
              <Box sx={styles.big}>TuringID</Box>
              <Box sx={styles.title}>
                Global Decentralized Identity Protocol
              </Box>
              <Box sx={styles.list}>
                <Box sx={styles.ownLi}>
                  Built-in Layer 1 Decentralized Identity Protocol Born for
                  Second life Applications
                </Box>
                <Box sx={styles.ownLi}>
                  Support Chain-Crossing, One TuringID for All Blockchains Data
                </Box>
                <Box sx={styles.ownLi}>
                  Achieve Data Interoperability between Apps. Stop Data Monopoly
                </Box>
                <Box sx={styles.ownLi}>
                  Users Truly Own Their Data. Help Build Users-centered Web3
                  Applications Ecosystem.
                </Box>
              </Box>
            </Box>
            <Box sx={styles.item}>
              <Box sx={styles.big}>TuringContract</Box>
              <Box sx={styles.title}>
                The World's First High-performance Smart Contract on UTXO Model
              </Box>
              <Box sx={styles.list}>
                <Box sx={styles.ownLi}>
                  Academic Achievements with High-Performance Computing Center
                  of World-Class University
                </Box>
                <Box sx={styles.ownLi}>
                  It is the Layer-1 Smart Contract with the Highest Concurrency
                  and the Lowest Execution Cost in the Blockchain Industry
                </Box>
                <Box sx={styles.ownLi}>
                  Achieve Turing Completeness of UTXO Model Public
                </Box>
                <Box sx={styles.ownLi}>
                  Blockchain for the First Time, Satisfy All Web3 & MetaVerse
                  User Scenarios
                </Box>
              </Box>
            </Box>
            <Box sx={styles.item}>
              <Box sx={styles.big}>
                Allow blockchain functionality without cryptos.
              </Box>
              <Box sx={styles.title}>
                The Fastest Way to Popularize Web3 Applications Is Allowing
                Using Without Cryptos
              </Box>
              <Box sx={styles.list}>
                <Box sx={styles.ownLi}>
                  Use Blockchain as the Pure Solution. We Propose a New User
                  Onboarding Plan to Enable New Users to Enjoy Web3 Applications
                  Without Buying/Holding Cryptocurrency
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
