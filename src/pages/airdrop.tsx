import Airdrop from '@/components/AirDrop';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Airdrop />
    </ThemeProvider>
  );
}
