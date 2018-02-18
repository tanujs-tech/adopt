export const getWalletAddressAndBalance = () => (
  new Promise(async (resolve, reject) => {
    window.web3.eth.getAccounts((error, accounts) => {
      if (!error) {
        const walletAddress = accounts[0];
        window.web3.eth.getBalance(walletAddress, (errorInBalance, balance) => {
          if(!errorInBalance) {
            resolve({
              walletAddress,
              balance: balance.toString(10)
            })
          } else {
            console.log('Got Error in GetWalletAddressAndBalance: ', error);
            reject(errorInBalance);
          }
        })
      } else {
        console.log('Got Error in GetWalletAddressAndBalance: ', error);
        reject(error);
      }
    });
  })
);
