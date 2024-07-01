import { OverViewBar } from '@/components/OverViewBar';
import { Box, styled, Typography } from '@mui/material';
import { Banner, BannerRow } from './banner';
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

        <Box sx={{ position: 'relative' }}>
          {/* <Bg1 /> */}
          <Box>
            <Data />
          </Box>
          <Box>
            <Why />
          </Box>
          <Box>
            <How />
          </Box>
          {/* <OverViewRoadMap locale={locale} /> */}

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
    </BodyWrapper>
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
