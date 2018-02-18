import { call, takeLatest, put } from 'redux-saga/effects'
import {
  GET_ACCOUNT,
  getAccountSuccess,
  getAccountFailure,
} from '../actions/account'
import { getWalletAddressAndBalance } from '../services/web3/metamaskAccount'

function * getAccountSaga() {
  try {
    const data = yield call(getWalletAddressAndBalance);
    yield put(getAccountSuccess(data.walletAddress, data.balance));
  } catch (error) {
    console.log('Got Error in GetAccount: ', error);
    yield put(getAccountFailure({
      message: 'Not logged in Metamask!',
    }));
  }
}

export function * watchGetAccount() {
  yield takeLatest(GET_ACCOUNT, getAccountSaga)
}
