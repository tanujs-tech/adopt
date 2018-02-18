import { all } from 'redux-saga/effects'
import { watchStartup } from './startupSaga';
import { watchGetAccount, watchCheckShelterOwner } from './accountSaga';
import { watchCreateShelterSaga } from './shelterSaga'
import { watchCreatePetSaga, watchCreatePetAdoptionRequestSaga, watchAdoptPetRequestSaga } from './petSaga'

export function * rootSaga() {
  yield all([
    watchStartup(),
    watchGetAccount(),
    watchCreateShelterSaga(),
    watchCreatePetSaga(),
    watchCreatePetAdoptionRequestSaga(),
    watchAdoptPetRequestSaga(),
    watchCheckShelterOwner()
  ])
}
