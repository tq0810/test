import WinnerQueryPage from '@/components/winnerQuery';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <WinnerQueryPage />
    </ThemeProvider>
  );
}
