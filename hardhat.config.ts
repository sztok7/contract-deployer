import "@nomicfoundation/hardhat-ignition";
import "@nomicfoundation/hardhat-verify";

import { config as dotenvConfig } from "dotenv";
dotenvConfig();

const ALCHEMY_KEY = process.env.ALCHEMY_API_KEY || "";
const PRIVATE_KEY = process.env.DEPLOYER_PRIVATE_KEY || "";

const config = {
  solidity: "0.8.20",
  networks: {
    mainnet: {
      url: `https://eth-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
    },
    optimism: {
      url: `https://opt-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
    },
    arbitrum: {
      url: `https://arb-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
    },
    base: {
      url: `https://base-mainnet.g.alchemy.com/v2/${ALCHEMY_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },
  arbiscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },
  ignition: {
    strategyConfig: {
      create2: {
        salt: '0x34053f9a4c575c636063986995bff3005aa8c24ad5bab567540bd3af557a047c',
      }
    }
  },
};
export default config;
