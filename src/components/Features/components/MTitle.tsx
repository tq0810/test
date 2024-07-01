import { Box, Typography } from '@mui/material';
const styles = {
  secondTitle: {
    textAlign: 'center',
    color: '#7A7A7A',
    fontSize: { md: 24, xs: 14 },
    fontFamily: 'Candal',
    fontWeight: '400',
    textTransform: 'capitalize',
    wordWrap: 'break-word',
    width: { xl: '1092px' },
    m: '0 auto',
  },
};
export const Title = (props: any) => {
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
          right: '50px',
          top: '45px',
        },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', p: '20px 0' }}
      >
        {props.title}
      </Typography>
      <Box sx={styles.secondTitle}>{props.content}</Box>
    </Box>
  );
};
