import { adoptMeSmartContractAbi, adoptMeSmartContractAddress } from './adoptMeSmartContractData'
import Web3 from 'web3'

export const web3Initialisation = () => {
  if (typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3js = new Web3(window.web3.currentProvider);
    const AdoptMe = window.web3js.eth.contract(JSON.parse(adoptMeSmartContractAbi));
    window.adoptMeContractInstance = AdoptMe.at(adoptMeSmartContractAddress);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    // web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    throw new Error({message: 'No Metamask'});
  }
};

