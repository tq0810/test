import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Title } from '../Features/components/MTitle';
import styles from './index.less';
import Img from '../../assets/img/TBCScale/img.png';
import ImgPhone from '../../assets/img/TBCScale/img_phone.png';
export default function OverviewPage() {
  const isMobile = useMediaQuery('(max-width: 900px)');
  return (
    <BodyWrapper>
      <Box>
        <Box
          sx={{
            color: '#fff',
            h4: { color: '#F33000', fontSize: { md: '70px', xs: '24px' } },
            h6: { color: '#fff', fontSize: '18px', padding: '10px 0' },
            marginTop: '50px',
            p: { md: '0', xs: '0 20px 20px' },
            '.rImg': {
              position: 'absolute',
              right: '50px',
              top: '45px',
            },
          }}
        >
          <Title
            title="How TBC Scales"
            content="TBC has cutting-edge technical practice solutions with infinitely close to zero handling fees"
          ></Title>
          <Box className={isMobile ? styles.Scale_phone : styles.Scale}>
            <Box
              className={isMobile ? styles.scale_lil_phone : styles.scale_lil}
            >
              <Box
                className={isMobile ? styles.scale_li_phone : styles.scale_li}
              >
                Adopting a layer of smart contract technology "TuringTXID
                solution" compatible with UTXO parallel processing capabilities,
                optimizing the UTXO high concurrency model, upgrading the
                transaction format of the traditional UTXO model, creating a
                high-performance parallel computing super node, ensuring a
                dynamically expandable public chain that can carry millions of
                TPS and even global users.
              </Box>
              <Box
                className={isMobile ? styles.scale_li_phone : styles.scale_li}
              >
                For the first time, it achieved the practical
                Turing-completeness of the UTXO model public chain, and combines
                the advantages of the UTXO model. It is the smart contract
                solution on the Layer-1 chain with the highest concurrency and
                the lowest execution cost in the blockchain field, which can
                meet the usage scenarios of all Web3 applications and Metaverse
                applications.
              </Box>
            </Box>
            <Box
              className={isMobile ? styles.scale_lir_phone : styles.scale_lir}
            >
              <img src={isMobile ? ImgPhone : Img} alt="" />
            </Box>
          </Box>
          <Box className={isMobile ? styles.ScaleLi_phone : styles.ScaleLi}>
            <Box
              className={isMobile ? styles.ScaleLi_li_phone : styles.ScaleLi_li}
            >
              The POW consensus is adopted to ensure sufficient
              decentralization, and super nodes are built to ensure that each
              miner can process massive amounts of data.
            </Box>
            <Box
              className={isMobile ? styles.ScaleLi_li_phone : styles.ScaleLi_li}
            >
              Use the parallel algorithm research results of experts in the
              field of high-performance computing to maximize node performance.
            </Box>
            <Box
              className={isMobile ? styles.ScaleLi_li_phone : styles.ScaleLi_li}
            >
              Adopting an unlimited large block scaling strategy is the only
              feasible scaling direction after years of testing.
            </Box>
            <Box
              className={isMobile ? styles.ScaleLi_li_phone : styles.ScaleLi_li}
            >
              Adopt the cutting-edge technology practice plan with infinitely
              close to zero handling fee, minimize the entry threshold for
              ordinary people, and popularize Web3 technology to the world.
            </Box>
          </Box>
        </Box>
      </Box>
    </BodyWrapper>
  );
}
