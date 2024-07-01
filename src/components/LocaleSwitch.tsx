import { Box, Button, Drawer, IconButton, Typography } from '@mui/material';
import flag1 from '@/assets/img/flag1.png';
import flag2 from '@/assets/img/flag2.png';
import flag3 from '@/assets/img/flag3.png';
import flag4 from '@/assets/img/flag4.png';
import { useEffect, useState } from 'react';
import { setLocale } from 'umi';
const styles = {
  wrap: {
    width: { md: '60px', xs: '34px' },
    height: { md: '46px', xs: '28px' },
    background: '#242424',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: { md: '6px', xs: '8px' },
    cursor: 'pointer',
    position: 'relative',
    zIndex: 100,
    img: { width: { md: 'auto', xs: '22px' } },
  },
  pop: {
    position: 'absolute',
    top: { md: '48px', xs: '30px' },
    background: '#242424',
    display: 'none',
    '&.active': {
      display: 'block',
    },
  },
  wrap1: {
    width: { md: '60px', xs: '34px' },
    height: { md: '46px', xs: '28px' },
    background: '#242424',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    borderRadius: '6px',
    position: 'relative',
    margin: '0 auto',
    '&:hover': { background: '#bdbdbd' },
  },
};
function LocaleSwitcher(props: any) {
  const mapList = [
    { flag: flag1, locale: 'en' },
    { flag: flag2, locale: 'kr' },
    { flag: flag3, locale: 'zh' },
    { flag: flag4, locale: 'ja' },
  ];
  const [isActive, setIsActive] = useState(false);
  const [defaultFlag, setDefaultFlag] = useState(flag1);
  const setLocaleActive = (locale: any) => {
    setDefaultFlag(mapList.filter((item) => item.locale === locale)[0].flag);
    window.localStorage.setItem('locale', locale);
    setLocale(locale, false);
    props.changeLocale(locale);
  };
  useEffect(() => {
    const locale = window.localStorage.getItem('locale');
    if (locale) {
      setLocale(locale, false);
      setDefaultFlag(mapList.filter((item) => item.locale === locale)[0].flag);
    }
  });
  return (
    <Box
      sx={styles.wrap}
      onClick={() => setIsActive(!isActive)}
      className={props.mode}
    >
      <img src={defaultFlag} alt="" />
      <Box sx={styles.pop} className={`${isActive ? 'active' : ''}`}>
        {mapList.map((item, index) => {
          return (
            <Box
              sx={styles.wrap1}
              key={item.locale}
              onClick={() => {
                setLocaleActive(item.locale);
              }}
            >
              <img src={item.flag} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default LocaleSwitcher;
