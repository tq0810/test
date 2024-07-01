import { OverViewBar } from '@/components/OverViewBar';
import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';

import { FillAddress } from './components/FillAddress';
import { ReceiveReward } from './components/ReceiveReward';
import { useState } from 'react';
import { Switch } from './components/switch';

import { CoinAnimation } from './components/coin';

// import bgNew from '@/assets/img/star.png';
export default function OverviewPage() {
  const [confirmAddress, setConfirmAddress] = useState('');
  const [showReceiveReward, setshowReceiveReward] = useState(true);

  return (
    <BodyWrapper>
      <Box>
        {showReceiveReward ? (
          <FillAddress
            setConfirmAddress={setConfirmAddress}
            setshowReceiveReward={setshowReceiveReward}
          />
        ) : (
          <ReceiveReward
            setshowReceiveReward={setshowReceiveReward}
            confirmAddress={confirmAddress}
          />
        )}
      </Box>
    </BodyWrapper>
  );
}
