import { Box } from '@mui/material';
import { getCssStyles } from './CssStyles';
import TokenAdirDropP from '@/assets/img/unclaimed.png';
export const Unclaimed = ({ nowUnclaimedNum }: any) => {
  const cssStyles = getCssStyles();
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5% 0 0 0',
      }}
    >
      <Box sx={cssStyles.unclaimPic}>
        <img src={TokenAdirDropP} />
      </Box>
      <Box
        sx={{
          padding: '0 0 0 13px',
        }}
      >
        <Box sx={cssStyles.unclaimTxtNotice}>Received TBC</Box>
        <Box sx={cssStyles.unclaimTxtNum}>
          {nowUnclaimedNum == -1
            ? '---'
            : parseFloat((nowUnclaimedNum / 10 ** 6).toFixed(6))}
        </Box>
      </Box>
    </Box>
  );
};
