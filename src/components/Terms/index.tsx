import { OverViewBar } from '@/components/OverViewBar';
import { Box, styled, Typography } from '@mui/material';

import { TermContent } from './TermContent';
import { useState } from 'react';
import { Footer } from '../footer';

// import bgNew from '@/assets/img/star.png';
export default function OverviewPage() {
  const [locale, setLocale] = useState(false);

  function changeLocale(locale: any) {
    setLocale(locale);
  }
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#000',
        width: '100%',
        overflow: 'hidden',
        minWidth: { md: '1200px' },
      }}
    >
      <OverViewBar changeLocale={changeLocale} />
      <Box
        sx={{
          maxWidth: { xs: 500, md: 1920 },
          margin: 'auto',
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'relative', padding: { md: '0 32px', xs: 0 } }}>
          {/* <Bg1 /> */}
          <Box>
            <TermContent />
          </Box>
          <Footer />
          {/* <Box
            sx={{
              position: 'relative',
              width: '100%',
              // overflow: 'hidden'
              '& svg': {
                bottom: { md: '0px', xs: '-224px' },
              },
            }}
          >
            <CirleSvg
              style={{
                position: 'absolute',
                opacity: 0.3,
                width: '100%',
              }}
            />
          </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

// const Bg1 = styled('div')`
//   display: block;
//   width: 100%;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   background: url(${bgNew});
//   opacity: 0.3;
// `;
