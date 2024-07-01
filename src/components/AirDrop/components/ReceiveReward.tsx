import {
  Box,
  Button,
  useMediaQuery,
  Alert,
  CircularProgress,
} from '@mui/material';
import cssOrginStyles from './test.less';
import { getCssStyles } from './CssStyles';

import { useState, useEffect } from 'react';
import { Unclaimed } from './Unclaimed';
import { UnclaimedPoints } from './Unclaimed_points';
import DhGif1 from '@/assets/dh/1.gif';
import DhGif2 from '@/assets/dh/2.gif';
import BiGif from '@/assets/dh/bi.gif';
import Bi1 from '@/assets/dh/bi1.png';
import Bg1 from '@/assets/dh/beijing.gif';
import JingtaiBg from '@/assets/dh/jingtaib.png';
import axios from 'axios';
import { ReactComponent as RefreshSvg } from '@/assets/svg/refresh.svg';
import { CoinAnimation } from './coin';
import './CoinAnimation.less';

export const ReceiveReward = ({
  setshowReceiveReward,
  confirmAddress,
}: any) => {
  const isMobile = useMediaQuery('(max-width: 900px)');
  const cssStyles = getCssStyles();

  // const [topSwitchItem, setTopSwitchItem] = useState(cssStyles.topSwitchItem);
  // const [topSwitchItemSelect, setTopSwitchItemSelect] = useState(
  //   cssStyles.topSwitchItemSelect,
  // );

  const [isSelect, setIsSelect] = useState(true);

  const [showAlert, setShowAlert] = useState(false);
  const [alertTxt, setAlertTxt] = useState('');
  const [nowUnclaimedNum, setNowUnclaimedNum] = useState(-1);
  const [nowUnclaimedPoint, setNowUnclaimedPoint] = useState(0);
  const [isNowDong, setIsNowDong] = useState(false);
  const [isTooQuick, setIsTooQuick] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [DhGif1, setDhGif1] = useState(null);
  // const [DhGif2, setDhGif2] = useState(null);
  const [nowPic, setNowPic] = useState(DhGif1);
  const [nowBi, setNowBi] = useState(JingtaiBg);
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [leftValue, setLeftValue] = useState(40);

  const [increasePoint, setIncreasePoint] = useState(0);
  const [gifTimeout, setGifTimeout] = useState<number | null | Timeout>(null);

  const [animations, setAnimations] = useState<Animation[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const containerRect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - containerRect.left;
    const offsetY = e.clientY - containerRect.top - 30;

    const newAnimation: Animation = {
      id: Date.now(),
      x: offsetX,
      y: offsetY,
      opacity: 1,
    };
    setAnimations([...animations, newAnimation]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimations((prevAnimations) =>
        prevAnimations
          .map((animation) => {
            if (animation.opacity > 0) {
              return {
                ...animation,
                opacity: animation.opacity - 0.01,
                y: animation.y - 1,
              };
            }
            return animation;
          })
          .filter((prevAnimations) => {
            return prevAnimations.opacity > 0;
          }),
      );
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getErrMsg = (status: number): String => {
    switch (status) {
      case 1:
        return 'Failed to collect, please try later.';

      case 2:
        return 'Today’s quota has been collected. Please try again tomorrow.';

      case 3:
        return 'Already participated today, please do not participate again';

      default:
        return 'Send Address Fail Sys Error';
    }
  };

  const fetchNowUnclaimedNum = async () => {
    try {
      const response = await axios.get(
        `https://turingwallet.xyz/v1/tbc/address/${confirmAddress}/get/balance/`,
      );
      // const response = await axios.get(
      //   `/api/v1/tbc/address/${confirmAddress}/get/balance/`,
      // );
      const { data, status } = response.data;
      if (status === 0) {
        setNowUnclaimedNum(data.balance);
      } else {
        showErrMsg('Fetch Address Unclaimed Token Fail');
        return;
      }
    } catch (error) {
      console.error(error);
      showErrMsg('Fetch Address Unclaimed Sys Error');
      return;
    }
  };

  const fetchNowPointsNums = async () => {
    try {
      const response = await axios.get(
        `https://turingwallet.xyz/v1/tbc/address/${confirmAddress}/get/points/`,
      );
      // const response = await axios.get(
      //   `/api/v1/tbc/address/${confirmAddress}/get/points/`,
      // );
      const { points, status } = response.data;
      console.log(points, status, response);
      if (status === 'success') {
        setNowUnclaimedPoint(points);
      } else {
        showErrMsg('Fetch Address Points Fail');
        return;
      }
    } catch (error) {
      console.error(error);
      showErrMsg('Fetch Address Points Sys Error');
      return;
    }
  };

  const sendPoints = async () => {
    try {
      console.log(increasePoint);
      if (increasePoint <= 0) {
        return;
      }
      // const response = await axios.get(
      //   `https://turingwallet.xyz/v1/tbc/address/${confirmAddress}/send/`,
      // );
      const response = await axios.post(
        `https://turingwallet.xyz/v1/tbc/address/${confirmAddress}/add/points`,
        {
          amount: increasePoint,
        },
      );
      console.log(response);
      const { data, status } = response.data;
      if (status === 0) {
        setIncreasePoint(0);
      } else {
        console.error(response);
        return;
      }
    } catch (error) {
      console.error(error);
      return;
    }
  };

  const sendAddress = async () => {
    if (isNowDong) {
      return;
    }
    try {
      const response = await axios.get(
        `https://turingwallet.xyz/v1/tbc/address/${confirmAddress}/send/`,
      );
      // const response = await axios.get(
      //   `/api/v1/tbc/address/${confirmAddress}/send/`,
      // );
      const { data, status } = response.data;
      if (status === 0) {
        setNowPic(DhGif2);
        setIsNowDong(true);
        setTimeout(() => {
          fetchNowUnclaimedNum();
        }, 2000);

        setTimeout(() => {
          fetchNowUnclaimedNum();
        }, 4000);

        setTimeout(() => {
          fetchNowUnclaimedNum();
        }, 6000);
      } else {
        showErrMsg(getErrMsg(status) ? getErrMsg(status) : 'Send Address Fail');
        return;
      }
    } catch (error) {
      try {
        console.error(error);
        const status = error.response.data.status;
        showErrMsg(
          getErrMsg(status) ? getErrMsg(status) : 'Send Address Fail Sys Error',
        );
      } catch (err) {
        showErrMsg('Send Address Fail Sys Error');
      }
      return;
    }
  };

  // const sendPoints = async () => {
  //   try {
  //     console.log(increasePoint);
  //     if (increasePoint <= 0) {
  //       return;
  //     }
  //     // const response = await axios.get(
  //     //   `https://turingwallet.xyz/v1/tbc/address/${confirmAddress}/send/`,
  //     // );
  //     const response = await axios.post(
  //       `/api/v1/tbc/address/${confirmAddress}/add/points`,
  //       {
  //         amount: increasePoint,
  //       },
  //     );
  //     console.log(response);
  //     const { data, status } = response.data;
  //     if (status === 0) {
  //       setIncreasePoint(0);
  //     } else {
  //       console.error(response);
  //       return;
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return;
  //   }
  // };

  useEffect(() => {
    fetchNowUnclaimedNum();
    fetchNowPointsNums();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sendPoints(); // 每两秒读取并打印 value 的值
      // 在这里，你可以将 value 的值发送到你需要的地方
    }, 2000);

    // 清理函数：在组件卸载或者重新渲染时，清除定时器
    return () => {
      clearInterval(intervalId);
    };
  }, [increasePoint]); // 依赖项数组：当 value 的值改变时，重新运行 effect

  // useEffect(() => {
  //   Promise.all([
  //     import('@/assets/dh/1.gif'),
  //     import('@/assets/dh/2.gif'),
  //   ]).then(([gif1, gif2]) => {
  //     setDhGif1(gif1.default);
  //     setDhGif2(gif2.default);
  //     setNowPic(gif1.default);
  //     setIsLoaded(true);
  //   });
  // }, []);

  useEffect(() => {
    window.addEventListener('beforeunload', sendPoints);

    // 清理函数：在组件卸载时，移除事件监听器
    return () => {
      window.removeEventListener('beforeunload', sendPoints);
    };
  }, [increasePoint]); // 依赖项数组：当 value 的值改变时，重新运行 effect

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 500); // 1000ms is your animation duration
      return () => clearTimeout(timer);
    }
  }, [show]);

  const getLeft = () => {
    return Math.floor(Math.random() * 20) + 35;
  };

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    const img3 = new Image();
    const img4 = new Image();
    const img5 = new Image();

    img1.onload = () => {
      img2.src = DhGif2;
    };

    img3.onload = () => {
      img3.src = BiGif;
    };

    img4.onload = () => {
      img4.src = Bi1;
    };

    img5.onload = () => {
      img5.src = Bg1;
    };

    img2.onload = () => {
      setIsLoaded(true);
    };

    img1.src = DhGif1;
  }, []);

  const showErrMsg = (errmsg: String) => {
    setAlertTxt(errmsg as any);
    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 10 * 1000);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleFresh = (event: any) => {
    setshowReceiveReward(true);
    window.scrollTo(0, 0);
  };

  const [showPopup, setShowPopup] = useState(false);

  const handleClickForTc = (event: any) => {
    setShowPopup(true);
  };

  const handleClickOverplay = (event: any) => {
    setShowPopup(false);
  };

  const changeOrder = () => {
    setIsSelect(!isSelect);
    console.log('change select switch info');
  };

  const handleClickLq = (event: any) => {
    if (isNowDong) {
      return;
    }

    if (isTooQuick) {
      showErrMsg('Please do not click repeatedly in a short period of time');
      return;
    }

    sendAddress();
    setIsTooQuick(true);
    setTimeout(() => {
      setIsTooQuick(false);
    }, 5000);

    setTimeout(() => {
      setNowPic(DhGif1);
      setIsNowDong(false);
      console.log('set now pic jingtai');
    }, 3500);
  };

  const handleClickLqBi = (event: any) => {
    console.log('click');
    setNowBi(BiGif);
    setCount(count + 1);
    setShow(true);
    setNowUnclaimedPoint(nowUnclaimedPoint + 2);
    setIncreasePoint(increasePoint + 2);

    setLeftValue(getLeft());

    if (gifTimeout) {
      clearTimeout(gifTimeout);
    }

    let id = setTimeout(() => {
      setNowBi(JingtaiBg);
    }, 550);

    setGifTimeout(id);

    setNowBi(BiGif);

    handleClick(event);
  };

  const maskMiddleOfString = (str: String) => {
    if (str.length <= 6) {
      return str;
    }

    const firstSixChars = str.slice(0, 6);
    const lastSixChars = str.slice(-6);
    const maskedMiddle = '***';

    return firstSixChars + maskedMiddle + lastSixChars;
  };

  return (
    <Box sx={cssStyles.mainBox}>
      {showAlert && (
        <Alert
          severity="error"
          variant="filled"
          onClose={handleAlertClose}
          sx={{
            position: 'fixed',
            top: isMobile ? '60px' : '20px',
            width: isMobile ? '90%' : '25%',
            zIndex: 9999,
          }}
        >
          {alertTxt}.
        </Alert>
      )}

      <Box
        sx={{
          width: '100%',
        }}
      >
        <Box sx={cssStyles.topSwitch}>
          <Box
            className={
              isSelect
                ? cssOrginStyles.topSwitchItemSelect
                : cssOrginStyles.topSwitchItem
            }
            component="button"
            onClick={changeOrder}
          >
            $TBC
          </Box>

          {/* <Box
            className={
              isSelect ? cssOrginStyles.sliderLeft : cssOrginStyles.sliderRight
            }
          ></Box> */}

          <Box
            className={
              !isSelect
                ? cssOrginStyles.topSwitchItemSelect
                : cssOrginStyles.topSwitchItem
            }
            component="button"
            onClick={changeOrder}
          >
            Points
          </Box>
        </Box>

        {isSelect && (
          <Box
            sx={{
              width: '100%',
              height: isMobile ? '400px' : '550px',
            }}
          >
            <Unclaimed nowUnclaimedNum={nowUnclaimedNum} sx={{ zIndex: 1 }} />
            <Box sx={cssStyles.dhPic} onClick={handleClickLq}>
              <Box
                sx={{
                  display: 'block',
                }}
              >
                <img
                  src={nowPic}
                  style={{
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                />
              </Box>
            </Box>
          </Box>
        )}

        {!isSelect && (
          <Box
            sx={{
              width: '100%',
              position: 'relative',
              height: isMobile ? '400px' : '550px',
            }}
          >
            <UnclaimedPoints
              nowUnclaimedNum={nowUnclaimedPoint}
              sx={{ zIndex: 1 }}
            />

            {/* {show && (
              <Box
                className={cssOrginStyles.countAnimation}
                sx={{
                  left: `${leftValue}%`,
                }}
              >
                +2points{' '}
              </Box>
            )} */}

            <div className="container">
              {animations.map((animation) => (
                <div
                  key={animation.id}
                  className="coin"
                  style={{
                    left: animation.x,
                    top: animation.y,
                    opacity: animation.opacity,
                  }}
                >
                  +2 Points
                </div>
              ))}
            </div>

            <Box sx={cssStyles.biDhPic} onClick={handleClickLqBi}>
              <Box
                sx={{
                  display: 'block',
                  height: isMobile ? '350px' : '500px',
                }}
              >
                <img
                  src={nowBi}
                  style={{
                    position: 'relative',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    margin: 'auto',
                    top: isMobile ? '37%' : '40%',
                  }}
                />
              </Box>
            </Box>
          </Box>
        )}

        <Box sx={cssStyles.txtBox}>
          <Box
            sx={{
              width: '75%',
              position: 'relative',
            }}
          >
            <input
              type="text"
              value={maskMiddleOfString(confirmAddress) as any}
              readOnly
              style={{
                width: '100%',
              }}
            />

            <RefreshSvg
              style={{
                position: 'absolute',
                right: '5%',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
              onClick={handleFresh}
            >
              {' '}
            </RefreshSvg>
          </Box>
        </Box>

        <Box sx={cssStyles.txtBox}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClickForTc}
            sx={cssStyles.confirmButton}
          >
            View rules
          </Button>
        </Box>

        {!isLoaded && (
          <Box sx={cssStyles.overlay}>
            <CircularProgress style={{ color: '#F33000' }} />
          </Box>
        )}

        {isSelect && showPopup && (
          <Box>
            <Box sx={cssStyles.overlay} onClick={handleClickOverplay}></Box>
            <Box sx={cssStyles.popup}>
              <p
                style={{
                  fontSize: isMobile ? '20px' : '18px',
                  fontWeight: 700,
                }}
              >
                Rule:
              </p>
              <p>1. Click the gold chest icon to receive TBC tokens</p>
              <p>
                2. A new round of TBC tokens will be available at UTC 0:00 every
                day (each address can receive once a day)
              </p>

              <p
                style={{
                  fontSize: isMobile ? '20px' : '18px',
                  fontWeight: 700,
                }}
              >
                Note:
              </p>
              <p>
                1. Daily TBC token quantity limit (first come, first served)
              </p>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickOverplay}
                  sx={cssStyles.iKnowButton}
                >
                  I Know
                </Button>
              </Box>
            </Box>
          </Box>
        )}

        {!isSelect && showPopup && (
          <Box>
            <Box sx={cssStyles.overlay} onClick={handleClickOverplay}></Box>
            <Box sx={cssStyles.popup}>
              <p
                style={{
                  fontSize: isMobile ? '20px' : '18px',
                  fontWeight: 700,
                }}
              >
                Rule:
              </p>
              <p>1. Daily points quantity unlimited (More click,More points)</p>

              <p
                style={{
                  fontSize: isMobile ? '20px' : '18px',
                  fontWeight: 700,
                }}
              >
                Note:
              </p>
              <p>
                1. Accumulated points can be exchanged for TBC tokens and more
                TBC-related ecological rights (continuously updated)
              </p>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickOverplay}
                  sx={cssStyles.iKnowButton}
                >
                  I Know
                </Button>
              </Box>
            </Box>
          </Box>
        )}

        {/* {showPopup && (
          <Box>
            <Box sx={cssStyles.overlay} onClick={handleClickOverplay}></Box>
            <Box sx={cssStyles.popup}>
              <p
                style={{
                  fontSize: isMobile ? '20px' : '18px',
                  fontWeight: 700,
                }}
              >
                Rule:
              </p>
              <p>1. Click the vault icon to receive TBC tokens and points</p>
              <p>
                2. A new round of collecting TBC tokens and points starts at
                0:00 every day (each address can be collected once a day)
              </p>

              <p
                style={{
                  fontSize: isMobile ? '20px' : '18px',
                  fontWeight: 700,
                }}
              >
                Note:
              </p>
              <p>
                1. Daily TBC token quantity limit (i.e. first come first served)
              </p>
              <p>2. Daily points collection (100 points)/address</p>
              <p>
                3. Accumulated points can be exchanged for TBC tokens and more
                TBC-related ecological rights and interests (continuously
                updated)
              </p>

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClickOverplay}
                  sx={cssStyles.iKnowButton}
                >
                  I Know
                </Button>
              </Box>
            </Box>
          </Box>
        )} */}
      </Box>
    </Box>
  );
};
