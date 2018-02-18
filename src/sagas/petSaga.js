import { call, takeLatest, put } from 'redux-saga/effects'
import {
  CREATE_PET_REQUEST,
  CREATE_PET_ADOPTION_REQUEST,
  ADOPT_PET_REQUEST,
  createPetRequestSuccess,
  createPetRequestfailure,
  createPetAdoptionRequestSuccess,
  createPetAdoptionRequestFailure,
  adoptPetRequestSuccess,
  adoptPetRequestFailure,
} from '../actions/pet'
import { addPet, addAdoptionRequestForPet, adoptPet } from '../services/web3/adoptMeSmartContract'
import { sendFilesToIPFS } from '../services/ipfs';

const uploadFile = async media => new Promise(async (resolve, reject) => {
  const fr = new FileReader();

  fr.onloadend = async (e) => {
    const file = e.target.result;

    const files = [
      {
        path: `/file`,
        content: new Buffer.from(new Uint8Array(e.target.result)),
      }
    ];

    try {
      const hash = await sendFilesToIPFS(files);
      resolve(hash[hash.length - 1].hash)
    } catch (error) {
      console.log('Got Error in File Upload: ', error);
      reject(error);
    }
  };
  fr.readAsArrayBuffer(media);
})

const uploadJson = async jsonData => new Promise(async (resolve, reject) => {

  const files = [
    {
      path: '/metadata',
      content: new Buffer.from(JSON.stringify(jsonData)),
    }
  ];

  try {
    const hash = await sendFilesToIPFS(files);
    resolve(hash[hash.length - 1].hash)
  } catch (error) {
    console.log('Got Error in Json Upload: ', error);
    reject(error);
  }
});


function * createPetSaga(action) {
  try {
    const { shelterId, metadata, profilePic } = action;

    const imageIPFSHash = yield call(uploadFile, profilePic)
    const petMetadataIPFS= yield call(uploadJson, metadata)

    yield call(addPet, shelterId, petMetadataIPFS, imageIPFSHash)
    yield put(createPetRequestSuccess());
  } catch (error) {
    console.log('Got Error in Shelter Creation: ', error);
    yield put(createPetRequestfailure({
      message: 'Got Error in Shelter Creation!',
    }));
  }
}

function * createPetAdoptionRequestSaga(action) {
  try {
    const { shelterId, petId, amountRequired } = action;

    yield call(addAdoptionRequestForPet, shelterId, petId, amountRequired)
    yield put(createPetAdoptionRequestSuccess());
  } catch (error) {
    console.log('Got Error in Pet Adoption Request Creation: ', error);
    yield put(createPetAdoptionRequestFailure({
      message: 'Got Error in Request!',
    }));
  }
}

function * createAdoptPetRequestSaga(action) {
  try {
    const { adoptionRequestId, value } = action;

    yield call(adoptPet, adoptionRequestId, value)
    yield put(adoptPetRequestSuccess());
  } catch (error) {
    console.log('Got Error in Adopt Pet Request Creation: ', error);
    yield put(adoptPetRequestFailure({
      message: 'Got Error in Request!',
    }));
  }
}

export function * watchCreatePetSaga() {
  yield takeLatest(CREATE_PET_REQUEST, createPetSaga)
}

export function * watchCreatePetAdoptionRequestSaga() {
  yield takeLatest(CREATE_PET_ADOPTION_REQUEST, createPetAdoptionRequestSaga)
}

export function * watchAdoptPetRequestSaga() {
  yield takeLatest(ADOPT_PET_REQUEST, createAdoptPetRequestSaga)
}

