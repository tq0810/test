import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';

import { WinnerQuery } from './components/query';
import { useState } from 'react';

export default function WinnerQueryPage() {
  const [confirmAddress, setConfirmAddress] = useState('');
  return (
    <BodyWrapper>
      <Box>
        <WinnerQuery setConfirmAddress={setConfirmAddress} />
      </Box>
    </BodyWrapper>
  );
}
