import { call, takeLatest, put } from 'redux-saga/effects'
import {
  GET_ADOPTION_REQUEST,
  getAdoptionRequestSuccess,
  getAdoptionRequestFailure,
} from '../actions/adoptionRequest'
import { getPendingAdoptionRequest } from '../services/web3/adoptMeSmartContract'

function * getPendingAdoptionRequestSaga() {
  try {
    const requests = yield call(getPendingAdoptionRequest)
    yield put(getAdoptionRequestSuccess(requests));
  } catch (error) {
    console.log('Got Error in Adoption Request: ', error);
    yield put(getAdoptionRequestFailure({
      message: 'Got Error in Adoption Request!',
    }));
  }
}

export function * watchGetPendingAdoptionRequestSaga() {
  yield takeLatest(GET_ADOPTION_REQUEST, getPendingAdoptionRequestSaga)
}
