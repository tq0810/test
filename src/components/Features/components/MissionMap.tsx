import { Box, Typography } from '@mui/material';

const styles = {
  listWrap: {
    display: 'flex',
    justifyContent: 'center',
    width: { xs: '350px', md: 'auto' },
    margin: '20px auto 0',
  },
  left: {
    width: { xs: '306px', md: 'auto' },
    ml: { xs: '44px', md: '60px' },
    position: 'relative',
    zIndex: 2,
  },
  item: {
    borderRadius: '26px',
    minHeight: '60px',
    position: 'relative',
    padding: '0',
    mb: '20px',
    '&:last-child': {
      mb: 0,
    },
  },
  title: {
    color: '#F33000',
    fontSize: { xs: 14, md: 50 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: { xs: '23px', md: '64px' },
    mb: { xs: 0, md: '30px' },
  },
  content: {
    width: '100%',
    color: '#fff',
    fontSize: { xs: 14, md: 24 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    lineHeight: { xs: '21px', md: '36px' },
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
    width: { xs: '10px', md: '20px' },
    height: { xs: '10px', md: '20px' },
    background: 'white',
    borderRadius: 9999,
    position: 'absolute',
    top: { xs: '7px', md: '29px' },
    left: { xs: '-33px', md: '-58px' },
  },
  right: {
    paddingTop: '0',
    position: 'relative',
    zIndex: 1,
  },

  middle: {
    position: 'absolute',
    top: { xs: '7px', md: '29px' },
    left: { md: '-52px', xs: '-30px' },
    width: { xs: '4px', md: '6px' },
    height: { xs: 'calc(100% - 279px)', md: 'calc(100% - 312px)' },
    background: 'linear-gradient(0deg, #F33000 0%, #313131 100%)',
  },
};
const list = [
  {
    title: '1: (BTCfi stage)',
    content: `TBC aims to assist bitcoin's establishment of its own complete ecosystem and eventually promote bitcoin ecology to converge with Ethereum ecology in the future through cross chain infrastructure, mainly focus on promote the two to improve together rather than replace them.`,
  },
  {
    title: '2: (Transaction fee trending to zero stage)',
    content:
      'TBC breaks the convention of high fees led by the large number of users in existing blockchains. TBC will show the magic of how the transaction fees reduce to zero with the growth of user transactions. ',
  },
  {
    title: '3: (Assist Web 2 Business migration to Web 3 from scratch)',
    content:
      'After the transaction cost close to zero, many web2 business will have no burden to migrate their business to web 3. We expect many new business model will come out from scratch through TBC. Ex: Micro-payment + AI + blockchain accounting record',
  },
  {
    title: `4:(Unlock Bitcoin's Full Potential Stage - - enable Bitcoin take lead of all web3 application & next generation of the internet)`,
    content: `TBC aims to assist bitcoin's establishment of its own complete ecosystem and eventually promote bitcoin ecology to converge with Ethereum ecology in the future through cross chain infrastructure, mainly focus on promote the two to improve together rather than replace them.`,
  },
];

export const MissionMap = (props: any) => {
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
                <Box sx={{ ...styles.rect }}></Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
