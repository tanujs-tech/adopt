import { call, put, takeLatest } from 'redux-saga/effects'
import { web3Initialisation } from '../services/web3'
import { getAccount, getAccountFailure } from '../actions/account'
import { START_UP } from '../actions/startup'

function * startup() {
  try {
    // yield call(web3Initialisation);
    yield put(getAccount());
  } catch (error) {
    console.log('Got Error in startup: ', error);
    yield put(getAccountFailure({
      message: 'No Metamask Found!',
    }));
  }
}

export function * watchStartup() {
  yield takeLatest(START_UP, startup)
}
