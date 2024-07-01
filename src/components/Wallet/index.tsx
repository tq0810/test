import { OverViewBar } from '@/components/OverViewBar';
import { Box, styled, Typography } from '@mui/material';
import { BannerRow } from './wallet';
import { Data } from './data';
import { Why } from './Why';
import { How } from './How';
import { OverViewRoadMap } from './roadMap';
import { useState } from 'react';
import { Footer } from '../footer';
import BodyWrapper from '@/components/BodyWrapper';

// import bgNew from '@/assets/img/star.png';
export default function OverviewPage() {
  const [locale, setLocale] = useState(false);

  function changeLocale(locale: any) {
    setLocale(locale);
  }
  return (
    <BodyWrapper>
      <Box
        sx={{
          maxWidth: { xs: 500, md: 1920 },
          margin: 'auto',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: { xs: 'block', md: 'block' },
            pt: { md: '10px', xs: '0px' },
            pb: { md: '32px', xs: '40px' },
          }}
        >
          <BannerRow />
        </Box>        
      </Box>
    </BodyWrapper>
  );
}
