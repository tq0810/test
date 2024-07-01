import Fee from '@/components/Fee';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <Fee />
    </ThemeProvider>
  );
}
