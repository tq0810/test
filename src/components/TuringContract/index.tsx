import { OverViewBar } from '@/components/OverViewBar';
import BodyWrapper from '@/components/BodyWrapper';
import { Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { Title } from '../TuringTXID/MTitle';
import styles from './index.less';
import ParallelImg from '../../assets/img/TuringContract/Parallel.svg';
import ParallelPhoneImg from '../../assets/img/TuringContract/ParallelPhoneImg.png';
import ZeroImg from '../../assets/img/TuringContract/Zero-Confirmation.svg';
import ZeroPhoneImg from '../../assets/img/TuringContract/Zero-Confirmation_phone.svg';
import ContractImg from '../../assets/img/TuringContract/Contract.svg';
import ContractPhoneImg from '../../assets/img/TuringContract/Contract_phone.svg';
import ContractsImg from '../../assets/img/TuringContract/Contracts.svg';
import ContractsPhoneImg from '../../assets/img/TuringContract/Contracts_phone.svg';
import ComposabilityImg from '../../assets/img/TuringContract/Composability.svg';
import ComposabilityPhoneImg from '../../assets/img/TuringContract/Composability_phone.svg';
import ComposabilitysImg from '../../assets/img/TuringContract/Composabilitys.svg';
import ComposabilitysPhoneImg from '../../assets/img/TuringContract/Composabilitys_phone.svg';
import learnImg from '../../assets/img/TuringContract/learnMore.png';
import learnPhoneImg from '../../assets/img/TuringContract/learnMore_phone.png';
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
            title="TuringContract"
            content={`The First Turing-complete, High-performance Smart Contract on the UTXO Blockchain`}
          ></Title>
          <Title title="Introduction" content={``}></Title>
          <Box
            className={
              isMobile ? styles.Introduction_phone : styles.Introduction
            }
          >
            <Box style={{ color: '#7A7A7A' }}>
              TuringContract is a contract framework based on the UTXO model of
              the TBC Blockchain. Compared with the existing contract models, it
              has the following advantages:
            </Box>
            <Box
              className={
                isMobile
                  ? styles.Introduction_title_phone
                  : styles.Introduction_title
              }
            >
              Scalability
            </Box>
            <Box>
              Different UTXO contracts can be executed and verified parallelly
              in TBC nodes, so it can take advantage of the multi-core
              advantages of modern computers and greatly improve the speed of
              contract execution and the TPS of the entire TBC contract
              processing.
            </Box>
            <Box
              className={
                isMobile
                  ? styles.Introduction_title_phone
                  : styles.Introduction_title
              }
            >
              Low Latency
            </Box>
            The result of contract execution can be returned without waiting for
            its confirmation, thanks to TBC's zero-confirmation feature, as soon
            as the TX reaches the mempool of the miner nodes.
            <Box
              className={
                isMobile
                  ? styles.Introduction_title_phone
                  : styles.Introduction_title
              }
            >
              Security
            </Box>
            <Box>
              Because of the chaining dependency of UTXOcontracts, the TX
              execution sequence of thesame contract can be guaranteed,
              thuseliminating the possibility of MEV (MinerExtractable Value).
              At the same time, as theway UTXO contracts invoke each other
              isdifferent from the one of those contractsbased on global state,
              some securityproblems, such as re-entrancy, will notoccur on
              TuringContract.
            </Box>
          </Box>
          <Title title="Parallel Verification" content={``}></Title>
          <Box className={isMobile ? styles.Parallel_phone : styles.Parallel}>
            <Box>
              Because of the UTXO model implemented in TBC, when a node receives
              a transaction, the running result of the contract is already there
              in the output of the transaction. This means that the node only
              needs to verify the correctness of the result and does not
              necessarily need to do all the computation. Therefore, we can
              proceed with computation off-chain for some computationally
              intensive contracts and only validate the results on-chain. At the
              same time, since the contract virtual machine in the TBC node only
              proceed with validation (read-only operation), there is no side
              effect (writable operation) for all contract operation, so the
              validation of the contract in the node can be run completely in
              parallel. That is, the TBC node can run multiple VM simultaneously
              to validate different transactions, as shown in the following
              figure, and takes advantage of the multi-core architecture of
              modern computers.
            </Box>
            <img
              src={isMobile ? ParallelPhoneImg : ParallelImg}
              alt=""
              style={{ marginTop: isMobile ? '20px' : '80px', width: '100%' }}
            />
          </Box>
          <Title title="Zero-Confirmation Security" content={``}></Title>
          <Box className={isMobile ? styles.Zero_phone : styles.Zero}>
            <Box>
              Since the TBC node's principle for TX Ordering is the First Seen
              Rule, as long as the transaction meets the minimum fee
              requirement, it will enter the mempool of the node and wait for
              the generation of the next block. Another higher fee transaction
              will not replace it. If a later transaction that spends the same
              UTXO arrives while the first transaction is still unconfirmed, the
              latter transaction will be taken as an illegal transaction by the
              node, as shown below:
            </Box>
            <img
              src={isMobile ? ZeroPhoneImg : ZeroImg}
              alt=""
              style={{ margin: isMobile ? '20px 0' : '80px 0', width: '100%' }}
            />
            <Box>
              Transaction TX1 first enters the mempool, and transaction TX2 then
              arrives. TX2 and TX1 use the same UTXO1 as their input. TX1
              arrives at the node's mempool earlier than TX2. Based on the First
              Seen Rule, TX2 is rejected by the node. In actual operation, we
              can guarantee zero-confirmation security as long as the contract
              transaction can be broadcast to most of the mining pool nodes. On
              the other hand, we consider the worst scenario, where someone
              maliciously creates double spending, and the transaction is
              included in a block by the mining pool. TX2 in the above diagram
              is included in a block by the mining pool, resulting in TX1 being
              abandoned by the node. In this case, it will only cause the TX1
              operation to be canceled. In the case of the swap, the
              cancellation of the transaction will cause the swap to roll back,
              and the user's transaction assets will be returned to their
              original address without any loss. For general transfer-type
              transactions, we need to decide whether to wait for confirmation
              based on the value of our orders. If it is a relatively large
              asset transfer, waiting for confirmation is a safer approach. But
              for the vast majority of cases, zero confirmation is safe enough.
              Users can choose their security policy flexibly.
            </Box>
          </Box>
          <Title title="The Globally Unique ID" content={``}></Title>
          <Box className={isMobile ? styles.Globally_phone : styles.Globally}>
            <Box>
              In the smart contract based on a global state, represented by ETH,
              there is a unique global state address to mark a contract
              instance, and the third party can find the corresponding contract
              through the contract's address and interact with the contract.
              Since there is no global state in TBC, all state data are in the
              UTXO. UTXO contract will generate an entirely new contract after a
              single execution, so it needs a way to determine the contract ID,
              which lets third parties safely find the corresponding contract
              and interact with it.
            </Box>
            <Box
              className={
                isMobile ? styles.Globally_title_phone : styles.Globally_title
              }
            >
              Contract ID
            </Box>
            <Box
              className={
                isMobile ? styles.Globally_li_phone : styles.Globally_li
              }
            >
              <Box
                className={
                  isMobile ? styles.Globally_lil_phone : styles.Globally_lil
                }
              >
                <Box style={{ marginBottom: isMobile ? '20px' : '98px' }}>
                  Each contract is created with unique input, so we use this
                  unique input combined with the code hash of the contract as
                  the input ID for the contract.
                </Box>
                <Box style={{ marginBottom: isMobile ? '20px' : '0' }}>
                  As shown in the figure above, UTXO1 has a unique identifier,
                  TXID1 + OutputIndex1, and Contract1 is the newly created
                  contract. We can combine the identifier of UTXO1 with the
                  contract code of Contract1 as the ID of Contract1. In the
                  actual contract, we generally use hash (TXID1 + OutputIndex1)
                  + code hash as the ID. This is the basic contract ID
                  generation logic. For FT and NFT, there are some additional
                  constraints on this basis due to some special requirements
                  (new issuance)
                </Box>
              </Box>
              <Box
                className={
                  isMobile ? styles.Globally_lir_phone : styles.Globally_lir
                }
              >
                <img
                  src={isMobile ? ContractPhoneImg : ContractImg}
                  alt=""
                  style={{ width: '100%' }}
                />
              </Box>
            </Box>
            <Box
              className={
                isMobile ? styles.Globally_title_phone : styles.Globally_title
              }
            >
              Contract’s Back-to-genesis Problem
            </Box>
            <Box>
              Using the solution to the back-to-genesis problem proposed by
              Scrypt, we can effectively validate a contract's ID to prevent
              others from forging the same contract ID. In short, to prevent
              contract forgery in TBC, the current transaction TX1's parent
              transaction TX2 and transaction TX2's parent transaction TX3 are
              required for data validation. The details of the validation
              include the ID and Code of the contract. The definition of the
              parent transaction is that if the input of TX1 uses the output of
              TX2, TX2 is the parent transaction of TX1.
            </Box>
            <img
              src={isMobile ? ContractsPhoneImg : ContractsImg}
              alt=""
              style={{ margin: '50px 0', width: '100%' }}
            />
            <Box>
              As shown in the figure above, TX1 needs to validate its parent
              transaction TX2 and grandparent transaction TX3 to check whether
              or not the contract code and data are consistent with itself.
            </Box>
            <Box
              className={
                isMobile ? styles.Globally_title_phone : styles.Globally_title
              }
            >
              Data Expansion
            </Box>
            <Box>
              In the verification process, TX1 needs to obtain the transaction
              data of TX2 and TX3, which will lead to the expansion of TX1’s
              transaction data. Therefore, using the solution of TuringTxID, the
              transaction input data can be hashed to prevent the accumulation
              of TX1’s transaction data, so that the data needed for this
              verification is always kept at a small constant, which prevents
              the infinite expansion of the transaction data.
            </Box>
          </Box>
          <Title title="Contracts Composability" content={``}></Title>
          <Box
            className={
              isMobile ? styles.Composability_phone : styles.Composability
            }
          >
            <Box>
              We can implement a combination of different UTXO contracts by way
              of validating the contract code and data. The contract in TBC
              consists of two parts, Code and Data, which are separated by the
              OP_RETURN operator. Inside the code, it is the contract execution
              logic. Inside the data, it is the one carried by a contract, that
              is, its state data. For a contract, we only need to determine the
              execution logic of the contract and its current state to determine
              the functionality of the current contract.
            </Box>
            <img
              src={isMobile ? ComposabilityPhoneImg : ComposabilityImg}
              alt=""
              style={{ margin: '60px 0 70px' }}
            />
            <Box
              className={
                isMobile
                  ? styles.Composability_li_phone
                  : styles.Composability_li
              }
            >
              <Box
                className={
                  isMobile
                    ? styles.Composability_lil_phone
                    : styles.Composability_lil
                }
                style={{ marginBottom: isMobile ? '20px' : '' }}
              >
                Therefore, in the same TX, we can add multiple contracts to the
                input and read its own TX data, and thus get the TX’s other
                input contract code and data, to determine the identity of the
                contract. Based on different contracts, we implement different
                logic to achieve a different combination of contracts.
              </Box>
              <Box
                className={
                  isMobile
                    ? styles.Composability_lir_phone
                    : styles.Composability_lir
                }
              >
                <img
                  src={isMobile ? ComposabilitysPhoneImg : ComposabilitysImg}
                  alt=""
                  style={{ width: '100%' }}
                />
              </Box>
            </Box>
          </Box>
          <Title title="learn more" content={``}></Title>
          <Box className={isMobile ? styles.learn_phone : styles.learn}>
            <Box className={isMobile ? styles.learn_l_phone : styles.learn_l}>
              <Box
                className={
                  isMobile ? styles.learn_text_phone : styles.learn_text
                }
              >
                TuringContract Github
              </Box>
              <Box
                className={isMobile ? styles.learn_ico_phone : styles.learn_ico}
              >
                {' '}
                <img src={isMobile ? learnPhoneImg : learnImg} alt="" />
              </Box>
            </Box>
            <Box className={isMobile ? styles.learn_r_phone : styles.learn_r}>
              <Box
                className={
                  isMobile ? styles.learn_text_phone : styles.learn_text
                }
              >
                Start to learn TuringContract
              </Box>
              <Box
                className={isMobile ? styles.learn_ico_phone : styles.learn_ico}
              >
                <img src={isMobile ? learnPhoneImg : learnImg} alt="" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </BodyWrapper>
  );
}
