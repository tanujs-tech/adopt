import { all } from 'redux-saga/effects'
import { watchStartup } from './startupSaga';
import { watchGetAccount } from './accountSaga';
import { watchCreateShelterSaga } from './shelterSaga'

export function * rootSaga() {
  yield all([
    watchStartup(),
    watchGetAccount(),
    watchCreateShelterSaga()
  ])
}
