import OverviewPage from '@/components/Overview';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';
import { useEffect } from 'react';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <OverviewPage />
    </ThemeProvider>
  );
}
