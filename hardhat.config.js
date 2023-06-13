require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

task("accounts", "prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
module.exports = {
  solidity: "0.8.18",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [process.env.PRIV_KEY],
    },
  },

  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
