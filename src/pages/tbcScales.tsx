import TBCScales from '@/components/TBCScales';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <TBCScales />
    </ThemeProvider>
  );
}
