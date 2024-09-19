import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    'bsctest': {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: [
        "0xb2ef4f5be6b3d13b3a73a9d444881c6fb1171028d685cc764bb4f704344344f0"
      ]
    }
  }
};

export default config;
