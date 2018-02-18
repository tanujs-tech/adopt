export const getWalletAddressAndBalance = () => (
  new Promise(async (resolve, reject) => {
    try {
      const accounts = await window.web3js.eth.getAccounts();
      const walletAddress = accounts[0];
      const balance = await window.web3js.eth.getBalance(walletAddress);
      resolve({
        walletAddress,
        balance
      });
    } catch (error) {
      reject(error);
    }
  })
);
