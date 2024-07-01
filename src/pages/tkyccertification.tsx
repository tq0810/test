import TKYCCertification from '@/components/TKYCCertification';
import { LightTheme } from '@/theme/theme';
import { ThemeProvider } from '@mui/material';

export default function IndexPage() {
  return (
    <ThemeProvider theme={LightTheme}>
      <TKYCCertification />
    </ThemeProvider>
  );
}
