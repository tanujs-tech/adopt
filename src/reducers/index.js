import { combineReducers } from 'redux'
import account from './account'
import shelter from './shelter'
import pet from './pet'

const reducer = combineReducers({
  account,
  shelter,
  pet,
})

export default reducer
