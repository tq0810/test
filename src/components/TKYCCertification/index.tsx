import { OverViewBar } from '@/components/OverViewBar';
import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';
import { Title } from './MTitle';
import styles from './index.less';
import technical1 from '@/assets/img/Technical/Technical_1.svg';
import technical2 from '@/assets/img/Technical/Technical_2.svg';
import technicalPhone1 from '@/assets/img/Technical/Technical_phone_1.svg';
import technicalPhone2 from '@/assets/img/Technical/Technical_phone_2.svg';
import { useMediaQuery } from '@mui/material';
import turnUp from '@/assets/img/KYCCertificationImg.png';
import openEth3 from '@/assets/img/openEth3.png';
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
          {/* <Title
            title="KYC certification"
            content={`TBC Adopts a New Transaction Identifying Method, "TuringTXID." It Is the Core Technology that Differentiates TBC from Other UTXO Public Blockchains`}
          ></Title> */}
          {/* <div  className={isMobile ? styles.divCss_phone : styles.divCss}>
            <img src={turnUp} className={isMobile ? styles.turnUp_phone : styles.turnUp} />
          </div> */}
          <img src={turnUp} className={isMobile ? styles.turnUp_phone : styles.turnUp} />
          <Title
            title="KYC certification"
            content={``}
          ></Title>
          <div
             className={
              isMobile ? styles.KYCCertification_superior_phone : styles.KYCCertification_superior
            }
          >
            <span
                className={
                  isMobile ? styles.KYCCertification_phone : styles.KYCCertification
                }
              >
                Mining TBC requires KYC certification：
            </span>
            <span
                className={
                  isMobile ? styles.KYCCertification_phone : styles.KYCCertification
                }
              >
                1. Being a miner that complies with local laws and regulations;
            </span>
            <span
                className={
                  isMobile ? styles.KYCCertification_phone : styles.KYCCertification
                }
              >
                2. Legal person passport authentication, authorized signature or official seal;
            </span>
            <span
                className={
                  isMobile ? styles.KYCCertification_phone : styles.KYCCertification
                }
              >
                3. Review of company water or electricity bill documents;
            </span>
            <span
                className={
                  isMobile ? styles.KYCCertification_phones_four : styles.KYCCertifications_four
                }
              >
                4.We will disclose the regions where all miners belong, please know and agree.
            </span>
            <span
                className={
                  isMobile ? styles.KYCCertification_phones_four : styles.KYCCertifications_four
                }
              >
                Remark: Please send KYC certification to the official email.Mining requires payment of node software usage fees.
            </span>
            {/* <span
                className={
                  isMobile ? styles.KYCCertification_phones_four : styles.KYCCertifications_four
                }
              >
                Remark：Please send the materials to the official email for review and certification. 
            </span> */}
            <span
                className={
                  isMobile ? styles.KYCCertification_phone : styles.KYCCertification
                }
              >
                Email：tbcnode@gmail.com
            </span>
            <img src={openEth3} className={isMobile ? styles.openEth3_phone : styles.openEth3} />
          </div>
        </Box>
      </Box>
    </BodyWrapper>
  );
}
