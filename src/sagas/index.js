import { all } from 'redux-saga/effects'
import { watchStartup } from './startupSaga';
import { watchGetAccount } from './accountSaga';
import { watchCreateShelterSaga } from './shelterSaga'
import { watchCreatePetSaga, watchCreatePetAdoptionRequestSaga, watchAdoptPetRequestSaga } from './petSaga'

export function * rootSaga() {
  yield all([
    watchStartup(),
    watchGetAccount(),
    watchCreateShelterSaga(),
    watchCreatePetSaga(),
    watchCreatePetAdoptionRequestSaga(),
    watchAdoptPetRequestSaga()
  ])
}
