import { Box, Typography } from '@mui/material';
import { FormattedMessage } from 'umi';

export const TermContent = (props: any) => {
  return (
    <Box
      sx={{
        color: '#fff',
        h4: { color: '#fff', fontSize: { xs: '24px' } },
        h6: { color: '#fff', fontSize: '18px', padding: '10px 0' },
        marginTop: '50px',
        p: { md: '0 50px 50px', xs: '0 20px 20px' },
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', p: '20px 0' }}
      >
        <FormattedMessage id="Terms" />
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="Introduction" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="TheseTerms" />
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="UseOf" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="YouMay" />
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="Disclaimers" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="ThePlatform" />
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="LimitationofLiability" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="InNoEvent" />
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="Indemnification" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="YouAgree" />
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="IntellectualProperty" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="ThePlatform1" />
      </Typography>

      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="Termination" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="TBCReserves" />
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="Modifications" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="TBCReserves1" />
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        <FormattedMessage id="GoverningLaw" />
      </Typography>
      <Typography variant="body2" gutterBottom>
        <FormattedMessage id="TheseTerms1" />
      </Typography>
    </Box>
  );
};
