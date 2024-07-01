import { OverViewBar } from '@/components/OverViewBar';
import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';

import { TermContent } from './components/TermContent';
import { History } from './components/History';
import { Chose } from './components/Chose';
import { Short } from './components/Short';
import { Mission } from './components/Mission';

// import bgNew from '@/assets/img/star.png';
export default function OverviewPage() {
  return (
    <BodyWrapper>
      <Box>
        <TermContent />
        <History />
        <Chose />
        <Short />
        <Mission />
      </Box>
    </BodyWrapper>
  );
}
