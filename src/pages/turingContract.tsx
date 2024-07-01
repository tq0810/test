import TuringContract from '@/components/TuringContract';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <TuringContract />
    </ThemeProvider>
  );
}
