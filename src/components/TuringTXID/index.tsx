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
            title="TuringTXID"
            content={`TBC Adopts a New Transaction Identifying Method, "TuringTXID." It Is the Core Technology that Differentiates TBC from Other UTXO Public Blockchains`}
          ></Title>

          <Title title="Introduction" content={``}></Title>
          <Box
            className={
              isMobile ? styles.introduction_phone : styles.introduction
            }
          >
            <span
              className={
                isMobile
                  ? styles.introduction_lil_phone
                  : styles.introduction_lil
              }
            >
              Its hierarchical hash calculation on data segment can be conducted
              without altering the original data set and transmission format.
              Therefore, transaction data on different hierarchies can be pruned
              separately without interfering with the hash verification of other
              parts of the data. In short, transaction identifiers can be
              calculated with the hash value of the pruned data and other
              un-pruned data.
            </span>
            <span
              className={
                isMobile
                  ? styles.introduction_lir_phone
                  : styles.introduction_lir
              }
            >
              <Box
                className={
                  isMobile
                    ? styles.introduction_lir_top_phone
                    : styles.introduction_lir_top
                }
              >
                The same cuttable data based on the same hash pointer in
                different transactions can be jointly used. Thereby data can be
                reused, and the efficiency of data storage and transfer can be
                significantly improved.
              </Box>
              <Box
                className={
                  isMobile
                    ? styles.introduction_lir_bot_phone
                    : styles.introduction_lir_bot
                }
              >
                TuringTXID is a special transaction identifier generated by a
                hierarchical hash algorithm during the data uploading on-chain.
              </Box>
            </span>
          </Box>
          <Title title="Significance" content={``}></Title>
          <Box
            className={
              isMobile ? styles.significance_phone : styles.significance
            }
          >
            <span
              className={
                isMobile
                  ? styles.significance_lil_phone
                  : styles.significance_lil
              }
            >
              In the existing blockchain technology, to get the transaction ID
              (TXID), the primary data in a transaction is hashed entirely. It
              leads to nodes receiving redundant data during transaction
              verification using a hash algorithm, which unnecessarily increases
              the cost of data storage, transfer, and reuse, meanwhile bringing
              a burden to the user experience.
            </span>
            <span
              className={
                isMobile
                  ? styles.significance_lil_phone
                  : styles.significance_lic
              }
            >
              In order to tackle the problem of inefficiency of
              intra-transaction data reuse in current blockchain technology,
              TuringTXID proposed an innovative on-chain method of cropping the
              Intra-transaction data hierarchically.
            </span>
            <span
              className={
                isMobile
                  ? styles.significance_lil_phone
                  : styles.significance_lil
              }
            >
              In particular, when applying TuringTXID transaction identifiers to
              the UTXO Smart Contract, the data size required in the
              verification process can be significantly reduced since the
              irrelevant data can be cropped during the smart contract
              verification. An elegant solution for data traceability, a Layer1
              smart contract on the UTXO blockchain, is born.
            </span>
          </Box>
          <Title title="Technical Mechanism" content={``}></Title>
          <Box
            className={isMobile ? styles.technical1_phone : styles.technical1}
          >
            <img
              src={isMobile ? technicalPhone1 : technical1}
              alt=""
              style={{ width: '100%' }}
            />
          </Box>
          <Box
            className={isMobile ? styles.technical2_phone : styles.technical2}
          >
            <Box
              className={
                isMobile
                  ? styles.technical2_title_phone
                  : styles.technical2_title
              }
            >
              Specifically, the TXID solution, generated for the transaction
              format, is improved as the following figure:
            </Box>
            <img
              src={isMobile ? technicalPhone2 : technical2}
              alt=""
              style={{ width: '100%' }}
            />
          </Box>
          <Title title="Features of TuringTXID" content={``}></Title>
          <Box className={isMobile ? styles.Features_phone : styles.Features}>
            <Box
              className={
                isMobile ? styles.Features_li_phone : styles.Features_li
              }
            >
              Due to the irreversibility of TXID calculation, it can only be
              used in indexing TX data since different transactions will
              generate different TXIDs. Technically speaking, The calculation of
              TXID is low in coupling and highly independent, and only a new
              calculation logic is required where the verification of TXID needs
              to be done. During the calculation, other programming logic,
              including validation of the full script of transaction data (Key &
              Lock) used by minders and the process of SPV(Simplified Payment
              Verification), will not interfere.
            </Box>
            <Box
              className={
                isMobile ? styles.Features_li_phone : styles.Features_li
              }
            >
              Different TXID calculation functions will be adopted with the
              upgraded TX version to identify old and new versions of
              transactions. Two kinds of transactions can coexist without
              conflict.
            </Box>
            <Box
              className={
                isMobile ? styles.Features_li_phone : styles.Features_li
              }
            >
              Applications developers will no longer need to alter any of the
              verification units to upgrade. All they need to do is to add a new
              TXID calculation function to the latest version.
            </Box>
            <Box
              className={
                isMobile ? styles.Features_li_phone : styles.Features_li
              }
            >
              This solution follows the editable dataset design from Merkle Path
              and is applied to every transaction and generates the needs of the
              completed data clipping. In particular, once the Key data is
              verified and uploaded on the chain by miners, SPV will achieve
              higher security and meanwhile allow giant Key data to be removed
              safely.
            </Box>
            <Box
              className={
                isMobile ? styles.Features_li_phone : styles.Features_li
              }
            >
              This solution is essential in the path of Big-Block Blockchain
              development. Big blocks require massive TX and high ability of
              script execution. When the script program gets larger, the storage
              space needed (Tapes in a Turing machine) is also getting bigger,
              which is similar to the fact that modern computing program needs
              to cycle memory to maintain the functionality of the Turing
              machine. TuringTXID follows the same spirit and takes full
              advantage of the Turing Tape, ensuring the Turing functionality of
              the bitcoin script, including the ability to recycle resources
              (clipping data) can be used to the full extent.
            </Box>
            <Box
              className={
                isMobile ? styles.Features_li_phone : styles.Features_li
              }
            >
              TuringTXID enhances the transaction data ability of genetics and
              evolution, empowering the bitcoin system to become a biological,
              unlimited evolving organism. It is similar to the natural
              phenomenon that when diploid cells undergo meiosis to produce
              haploid gametes (sperm and egg), part of the chromosomes is
              allocated to the polar bodies, which are usually degraded.
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </BodyWrapper>
  );
}
