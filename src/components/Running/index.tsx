import { OverViewBar } from '@/components/OverViewBar';
import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';

import { Turing } from './components/Turing';
import { Example } from './components/Example';

// import bgNew from '@/assets/img/star.png';
export default function OverviewPage() {
  return (
    <BodyWrapper>
      <Box>
        <Turing />
        <Example />
      </Box>
    </BodyWrapper>
  );
}
