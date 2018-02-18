import {
  GET_ACCOUNT,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE,
  UPDATE_SHELTER_OWNER
} from '../actions/account';

const initialState = {
  isFetching: false,
  walletAddress: '',
  balance: '',
  error: null,
  isShelterOwner: false,
}

const account = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT:
      return Object.assign({}, state, {
        isFetching: false,
      });
    case GET_ACCOUNT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        walletAddress: action.walletAddress,
        balance: action.balance,
      });
    case GET_ACCOUNT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case UPDATE_SHELTER_OWNER:
      return Object.assign({}, state, {
        isShelterOwner: action.isShelterOwner
      })

    default:
      return state
  }
}

  export default account
