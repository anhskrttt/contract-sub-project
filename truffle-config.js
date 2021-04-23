'use strict'
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = 'seven muffin card tree history drink easily shock ice garbage snack hour';

module.exports = {
  networks: {
    development: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "http://127.0.0.1:7545",
      ),
      host: "127.0.0.1",
      port: "7545",
      network_id: "*", // Match any network id
    },

    tomotestnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://testnet.tomochain.com",
        0,
        1,
        true,
        "m/44'/889'/0'/0/",
      ),
      network_id: "89",
      gas: 10000000,
      gasPrice: 10000000000000,
    },

    tomomainnet: {
      provider: () => new HDWalletProvider(
        mnemonic,
        "https://rpc.tomochain.com",
        0,
        1,
        true,
        "m/44'/889'/0'/0/",
      ),
      network_id: "88",
      gas: 1000000,
      gasPrice: 10000000000000,
    }
  },

  compilers: {
    solc: {
      version: "0.8.3",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  },
};