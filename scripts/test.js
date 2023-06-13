let Web3 = require("web3");
require("dotenv").config();

const testABI = [
  {
    inputs: [],
    name: "a",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "foo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const addtest = 0x8f18a3c169a20bf29bbb0d80ebb590c6cf7ef907;
myPrivKey = process.env.PRIV_KEY;
myAddress = "0x98Adf81933909Cd32fA9E59a8C5bC82E99C5f3e4";

async function interact() {
  this.web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545");

  testContract = await new web3.eth.Contract(testABI, addtest);

  await web3.eth.accounts.wallet.add(myPrivKey);

  a = await testContract.methods.foo().send();

  console.log(a);
}

interact();
