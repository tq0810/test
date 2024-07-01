import { useMediaQuery } from '@mui/material';
import Bg1 from '@/assets/dh/beijing.gif';

export const getCssStyles = () => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  return {
    secondTitle: {
      textAlign: 'center',
      color: 'white',
      fontSize: { md: 16, xs: 13 },
      fontWeight: '200',
      // textTransform: 'capitalize',
      wordWrap: 'break-word',
      m: '0 auto',
      textWarp: 'warp',
      padding: '7% 0 7% 0',
      textTransform: 'none',
      p: {
        marginBottom: '0px',
      },
    },

    mainTxt: {
      color: '#F33000',
      fontSize: { md: '44px', xs: '33px' },
    },

    mainTxtWhite: {
      color: 'white',
      fontSize: { md: '44px', xs: '33px' },
    },

    txtBox: {
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Candal',
      padding: '7% 0 3% 0',
      input: {
        width: '75%',
        fontSize: isMobile ? '13px' : '16px',
        borderRadius: '5px',
        border: '1px solid white', // 设置边框样式为白色
        backgroundColor: 'transparent', // 设置背景为透明
        padding: '13px 8px 13px 8px', // 设置内边距
        color: 'white', // 设置文字颜色为白色
        fontFamily: 'Arial, sans-serif',
        fontWeight: 100,
        textAlign: 'center',
      },
    },

    middleTxt: {
      color: 'white',
      fontFamily: 'Candal',
      fontWeight: '300',
      fontSize: { md: 20, xs: 13 },
      display: 'flex',
      justifyContent: 'center',
      margin: '5% 0 2% 0',
    },

    txtField: {
      width: isMobile ? { md: '50%', xs: '50%' } : '75%',
      fontSize: '16px',
      borderRadius: '8px',
      '& .MuiInputBase-input': {
        color: 'white',
        textAlign: 'center',
      },
      '& .MuiInputLabel-outlined': {
        color: 'white',
      },
      '& .MuiOutlinedInput-root': {
        borderRadius: '5%',
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
        },
      },
      '& .MuiFormLabel-root.Mui-focused': {
        color: 'white',
      },
    },

    inputTxtField: {
      width: isMobile ? { md: '50%', xs: '50%' } : '75%',
      fontSize: '16px',
      borderRadius: '8px',
    },

    mainBox: {
      backgroundColor: 'black',
      width: isMobile ? '95%' : '33%',
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
      borderRadius: '20px',
      marginTop: '3%',
    },

    picWb: {
      display: 'flex',
      justifyContent: 'center',
      img: {
        width: '70%',
      },
      margin: '20px',
    },

    picPhone: {
      display: 'flex',
      justifyContent: 'center',
      img: {
        width: '57%',
      },
      margin: '20px',
    },

    confirmButton: {
      backgroundColor: '#F33000',
      width: '75%',
      '&:hover': {
        backgroundColor: '#F33002', // 设置鼠标悬停时的背景颜色
      },
      height: { md: '60px', xs: '50px' },
      margin: '0 0 5% 0',
      fontFamily: 'Candal',
      textTransform: 'none',
    },

    iKnowButton: {
      backgroundColor: '#F33000',
      width: '75%',
      '&:hover': {
        backgroundColor: '#F33002', // 设置鼠标悬停时的背景颜色
      },
      height: { md: '40px', xs: '30px' },
      margin: '20px',
      borderRadius: '5px',
      textTransform: 'none',
    },

    dhPic: {
      display: 'flex',
      justifyContent: 'center',
      img: {
        width: '90%',
      },
      width: '100%',
    },

    biDhPic: {
      display: 'flex',
      justifyContent: 'center',
      img: {
        width: isMobile ? '80%' : '100%',
      },
      width: '100%',
      // margin: '28% 0% 25% 0%',
      boxSizing: 'content-box',
      backgroundImage: `url(${Bg1})`,
      backgroundSize: 'cover',
    },

    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 0,
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    popup: {
      position: 'fixed',
      top: isMobile ? '25%' : '25%',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'black',
      color: 'white',
      width: isMobile ? '80%' : '20%',
      maxWidth: 'none',
      border: '2px solid white',
      'border-radious': '20px',
      minHeight: '20%',
      borderRadius: '20px',
      padding: isMobile ? '5% 5% 5% 5%' : '1%',
      zIndex: 10000,
      body1: {
        fontFamily: 'Arial, sans-serif',
      },
    },

    unclaimPic: {
      img: {
        width: { md: '56px', xs: '49px' },
      },
    },

    unclaimTxtNotice: {
      color: 'white',
      textWarp: 'none',
      whiteSpace: 'none',
      fontSize: { md: '16px', xs: '15px' },
      fontWeight: 100,
      width: isMobile ? '120px' : '150px',
    },

    unclaimTxtNum: {
      color: '#F33000',
      fontFamily: 'Candal',
      fontSize: { md: '25px', xs: '26px' },
    },

    topSwitch: {
      display: 'flex',
      flexDirection: 'row',
      margin: 'auto',
      justifyContent: 'center',
      border: '2px solid white',
      borderRadius: '5px',
      width: '55%',
      fontFamily: 'Candal',
      alignContent: 'center',
      marginTop: '15%',
      marginBottom: '10%',
    },

    topSwitchItem: {
      color: 'white',
      fontWeight: 100,
      fontSize: '13px',
      // padding: '2%',
      margin: '1% 1% 1% 1%',
      boxSizing: 'content-box',
      width: '50%',
      textAlign: 'center',
      borderRadius: '2px',
      height: '30px',
      alignContent: 'center',
      order: 0,
    },

    topSwitchItemSelect: {
      color: 'white',
      fontWeight: 100,
      fontSize: '13px',
      // padding: '2%',
      margin: '1% 1% 1% 1%',
      backgroundColor: '#F33000',
      boxSizing: 'content-box',
      width: '50%',
      textAlign: 'center',
      borderRadius: '2px',
      height: '30px',
      alignContent: 'center',
      order: 0,
    },
  };
};
