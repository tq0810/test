import { Box, Typography } from '@mui/material';
import { lineHeight } from '@mui/system';
import { useCountDown } from 'ahooks';
import { stylesIdoTimer } from './styles';

const styles = stylesIdoTimer;

const sx = styles.text;
export const DateView = ({
  detaVal,
  num,
  isLine,
}: {
  detaVal: string;
  num: number;
  isLine?: boolean;
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '86px',
        background: 'linear-gradient(0deg, #FFFFFF, #FFFFFF)',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <p
          className="time-num"
          style={{
            color: sx.color,
            fontSize: '40px',
            padding: '0px',
            lineHeight: '132.5%',
            marginBottom: '0px',
            fontFamily: 'Poppins',
            fontWeight: 600,
          }}
        >
          {num < 9 ? '0' + num : num}
        </p>
        <p
          className="time-text"
          style={{
            color: '#64749A',
            fontSize: '12px',
            padding: '0px',
            lineHeight: '130%',
            marginBottom: '0px',
            fontFamily: 'Poppins',
            zoom: 0.92,
          }}
        >
          {detaVal}
        </p>
      </div>
      {isLine && <Line />}
    </div>
  );
};

const Line = () => {
  return (
    <div
      style={{
        width: '1px',
        height: '14px',
        background: 'rgba(182, 158, 237, 1)',
        position: 'absolute',
        top: '50%',
        right: '-0px',
        transform: 'translate(0px, -50%)',
      }}
    ></div>
  );
};

export const IdoTimer = () => {
  const [_, formattedRes] = useCountDown({
    targetDate: new Date(Date.parse('2023/3/25 20:00')),
  });
  const { days, hours, minutes, seconds } = formattedRes;

  return (
    <Box sx={styles.bar}>
      <DateView detaVal={'DAYS'} num={days} />
      <DateView detaVal={'HRS'} num={hours} />
      <DateView detaVal={'MINS'} num={minutes} />
      <DateView detaVal={'SECS'} num={seconds} />
    </Box>
  );
};
