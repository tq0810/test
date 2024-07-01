import WalletPage from '@/components/Wallet';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';
import { useEffect } from 'react';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <WalletPage />
    </ThemeProvider>
  );
}
