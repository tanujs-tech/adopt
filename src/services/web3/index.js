import Web3 from 'web3'
import { adoptMeSmartContractAbi, adoptMeSmartContractAddress } from './adoptMeSmartContractData'

export const web3Initialisation = () => {
  if (typeof window.web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    // web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    throw new Error({ message: 'No Metamask' });
  }

  const AdoptMe = window.web3.eth.contract();
  window.adoptMeContractInstance = AdoptMe.at();

};

