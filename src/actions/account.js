export const GET_ACCOUNT = 'GET_ACCOUNT'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE'

export const getAccount = () => ({
  type: GET_ACCOUNT,
});

export const getAccountSuccess = (walletAddress, balance) => ({
  type: GET_ACCOUNT_SUCCESS,
  walletAddress,
  balance,
});

export const getAccountFailure = (error) => ({
  type: GET_ACCOUNT_FAILURE,
  error,
});
