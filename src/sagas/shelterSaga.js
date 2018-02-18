import { call, takeLatest, put } from 'redux-saga/effects'
import {
  CREATE_SHELTER,
  createShelterSuccess,
  createShelterFailure,
} from '../actions/shelter'
import { addShelter } from '../services/web3/adoptMeSmartContract'

function * createShelterSaga(action) {
  try {
    const { name, physicalAddress, registrationId, metadata, shelterOwner } = action;
    yield call(addShelter, name, physicalAddress, registrationId, 'rightNowEmpty', shelterOwner)
    yield put(createShelterSuccess());
  } catch (error) {
    console.log('Got Error in Shelter Creation: ', error);
    yield put(createShelterFailure({
      message: 'Got Error in Shelter Creation!',
    }));
  }
}

export function * watchCreateShelterSaga() {
  yield takeLatest(CREATE_SHELTER, createShelterSaga)
}
