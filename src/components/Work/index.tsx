import { OverViewBar } from '@/components/OverViewBar';
import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';

import { Banner } from './components/Banner';
import { Story } from './components/Story';
import { Scaling } from './components/Scaling';
import { Amount } from './components/Amount';

// import bgNew from '@/assets/img/star.png';
export default function OverviewPage() {
  return (
    <BodyWrapper>
      <Box>
        <Banner />
        <Story />
        <Scaling />
        <Amount />
      </Box>
    </BodyWrapper>
  );
}
