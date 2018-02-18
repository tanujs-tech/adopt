import { call, takeLatest, put } from 'redux-saga/effects'
import {
  GET_ACCOUNT,
  IS_SHELTER_OWNER,
  getAccountSuccess,
  getAccountFailure,
  updateShelterOwner,
  isShelterOwner
} from '../actions/account'
import { getWalletAddressAndBalance } from '../services/web3/metamaskAccount'
import { getShelterId } from '../services/web3/adoptMeSmartContract'

function * getAccountSaga() {
  try {
    const data = yield call(getWalletAddressAndBalance);
    yield put(getAccountSuccess(data.walletAddress, data.balance));

    yield call(checkShelterOwner, {walletAddress: data.walletAddress})

  } catch (error) {
    console.log('Got Error in GetAccount: ', error);
    yield put(getAccountFailure({
      message: 'Not logged in Metamask!',
    }));
  }
}

function * checkShelterOwner(action) {
  try {
    const shelterIdBigNumber = yield call(getShelterId, action.walletAddress);
    const shelterId = shelterIdBigNumber.toNumber();
    yield put(updateShelterOwner(shelterId > 0, shelterId));
  } catch (error) {
    console.log('Got Error in checkShelterOwner: ', error);
  }
}

export function * watchGetAccount() {
  yield takeLatest(GET_ACCOUNT, getAccountSaga)
}

export function * watchCheckShelterOwner() {
  yield takeLatest(IS_SHELTER_OWNER, checkShelterOwner)
}
