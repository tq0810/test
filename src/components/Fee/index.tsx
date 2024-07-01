import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';

import { Fee } from './components/Fee';

// import bgNew from '@/assets/img/star.png';
export default function OverviewPage() {
  return (
    <BodyWrapper>
      <Box>
        <Fee />
      </Box>
    </BodyWrapper>
  );
}
