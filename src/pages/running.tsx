import Running from '@/components/Running';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Running />
    </ThemeProvider>
  );
}
