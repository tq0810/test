import { Box } from '@mui/material';
import { commonStyle } from './commonStyle';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import useIsElementInViewport from '@/components/useIsElementInViewport';
import { FormattedMessage } from 'umi';
export const OverViewRoadMap = (props: any) => {
  const [elementRef, isElementVisible] = useIsElementInViewport();
  const [roadMapPng, setRoadMapPng] = useState('');
  const [roadMapPng1, setRoadMapPng1] = useState('');
  useEffect(() => {
    switch (localStorage.getItem('locale')) {
      case 'zh': {
        setRoadMapPng('/upload/zh.png');
        setRoadMapPng1('/upload/zh1.png');
        break;
      }
      case 'kr': {
        setRoadMapPng('/upload/kr.png');
        setRoadMapPng1('/upload/kr1.png');
        break;
      }
      case 'ja': {
        setRoadMapPng('/upload/ja.png');
        setRoadMapPng1('/upload/ja1.png');
        break;
      }
      default: {
        setRoadMapPng('/upload/en.png');
        setRoadMapPng1('/upload/en1.png');
      }
    }
  }, [props.locale]);
  return (
    <Box
      sx={{
        overflow: 'hidden',
        borderRadius: '30px',
        mt: { xs: '20px', md: '30px' },
        width: { md: '100%', xs: '350px' },
        m: { xs: '20px auto 0', md: '30px 0 0' },
        padding: { md: '0 0 102px', xs: '0 11px' },
        '.treaImg': {
          width: '100%',
          display: { md: 'block', xs: 'none' },
        },
        '.treaImg1': {
          width: '100%',
          mt: '-0',
          display: { md: 'none', xs: 'block' },
        },
      }}
    >
      <Box
        sx={{
          ...commonStyle.title,
          margin: { xs: '0' },
          paddingLeft: { md: '40px !important', xs: '0 !important' },
          position: 'relative',
          zIndex: 1,
        }}
        ref={elementRef}
      >
        <CSSTransition
          in={!!isElementVisible}
          timeout={2000}
          classNames={{
            enter: 'animate__animated',
            enterActive: 'animate__slideInDown',
          }}
          // unmountOnExit
        >
          <div>
            <FormattedMessage id="Roadmap" />
          </div>
        </CSSTransition>
      </Box>
      <CSSTransition
        in={!!isElementVisible}
        timeout={5000}
        classNames={{
          enter: 'animate__animated',
          enterActive: 'animate__fadeIn',
        }}
        // unmountOnExit
      >
        <div>
          <img src={roadMapPng} className="treaImg" alt="" />
          <img src={roadMapPng1} className="treaImg1" alt="" />
        </div>
      </CSSTransition>
    </Box>
  );
};
