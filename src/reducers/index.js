import { combineReducers } from 'redux'
import account from './account'
import shelter from './shelter'
import pet from './pet'
import adoptionRequest from './adoptionRequest'

const reducer = combineReducers({
  account,
  shelter,
  pet,
  adoptionRequest,
})

export default reducer
