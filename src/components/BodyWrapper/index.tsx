import { OverViewBar } from '@/components/OverViewBar';
import { Box, styled, Typography } from '@mui/material';

import { useState } from 'react';
import { Footer } from '../footer';

// import bgNew from '@/assets/img/star.png';
export default function BodyWrapper(props: any) {
  const [locale, setLocale] = useState(false);

  function changeLocale(locale: any) {
    setLocale(locale);
  }

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#11141D',
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
        <Box
          sx={{
            position: 'relative',
            padding: { xl: '0 140px', md: '0 50px', xs: 0 },
          }}
        >
          {props.children}
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
