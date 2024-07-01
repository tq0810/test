import TuringTXID from '@/components/TuringTXID';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <TuringTXID />
    </ThemeProvider>
  );
}
