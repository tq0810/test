import { createTheme } from '@mui/material/styles';

export const LightTheme = createTheme({
  palette: {
    primary: { main: 'rgba(117, 79, 254, 1)' },
  },
  typography: {
    fontFamily: ['Candal'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 390,
      md: 900,
      lg: 1200,
      xl: 1600,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        root: {
          '& .MuiBackdrop-root': {
            // backgroundColor: 'rgba(4, 3, 7, 0.52)',
            background: 'rgba(50, 50, 50, 0.5)',
            backdropFilter: 'blur(10px)',
            display: 'block',
          },
          '& .MuiDrawer-paperAnchorRight': {
            background: '#000000',
            backdropFilter: 'blur(10px)',
            // box-shadow: -13px 8px 20px rgba(0, 0, 0, 0.25);
          },
          '& .MuiListItem-root': {
            display: 'block',
          },
          '& .MuiListItemText-root': { borderRadius: '7px' },
        },
      },
    },
  },
});
