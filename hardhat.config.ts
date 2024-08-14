import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-verify";
let secret = require('./.secret.json');

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    bscTestnet: {
      url: secret.binanceTestnetRPC,
      accounts: [secret.privateKeyTestnet],
    },
    goerli: {
      url: secret.goerliTestnetRPC,
      accounts: [secret.privateKeyTestnet],
    },
    baseTestnet: {
      url: secret.baseSepolinaTestnetRPC,
      accounts: [secret.privateKeyTestnet],
    },
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${secret.infuraNodeKey}`,
        blockNumber: 20064979
      }
    },
    ethereum: {
      url: secret.ethereumMainnetRPC,
      accounts: [secret.privateKeyMainnet],
    },
    bscMainnet: {
      url: secret.binanceMainnetRPC,
      accounts: [secret.privateKeyMainnet],
    },
    baseMainnet: {
      url: secret.baseMainnetRPC,
      accounts: [secret.privateKeyMainnet],
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: secret.bscscanAPI,
      bsc: secret.bscscanAPI,
      mainnet: secret.etherscanAPI,
      goerli: secret.etherscanAPI,
      baseSepolia: secret.basescanAPI,
      baseMainnet: secret.basescanAPI,
    }
  },
  sourcify:{
    enabled:true
  }

};

export default config;
