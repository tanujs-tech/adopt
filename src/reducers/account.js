import { 
  GET_ACCOUNT, 
  GET_ACCOUNT_SUCCESS, 
  GET_ACCOUNT_FAILURE 
} from '../actions/account';

const initialState = {
  isFetching: false,
  walletAddres: '',
  balance: '',
  error: null,
}

const account = (state = initialState, action) => {
  switch (action.type) {
    case GET_ACCOUNT:
      return Object.ssign(state, {
        isFetching: false,
      });
    case GET_ACCOUNT_SUCCESS: 
      return Object.assign(state, {
        isFetching: false,
        walletAddres: action.walletAddress,
        balance: action.balance,
      });
    case GET_ACCOUNT_FAILURE: 
      return Object.assign(state, {
        isFetching: false,
        walletAddres: action.walletAddress,
        balance: action.balance,
      })
    default:
      return state
  }
}
  
  export default account