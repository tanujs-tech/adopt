export const GET_ACCOUNT = 'GET_ACCOUNT'
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS'
export const GET_ACCOUNT_FAILURE = 'GET_ACCOUNT_FAILURE'

export const IS_SHELTER_OWNER = 'IS_SHELTER_OWNER'
export const UPDATE_SHELTER_OWNER = 'UPDATE_SHELTER_OWNER'

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

export const isShelterOwner = walletAddress => ({
  type: IS_SHELTER_OWNER,
  walletAddress
});

export const updateShelterOwner = (isShelterOwner, shelterId) => ({
  type: UPDATE_SHELTER_OWNER,
  isShelterOwner,
  shelterId
});
