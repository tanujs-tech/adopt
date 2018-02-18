import {
  CREATE_SHELTER,
  CREATE_SHELTER_SUCCESS,
  CREATE_SHELTER_FAILURE
} from '../actions/shelter';

const initialState = {
  isFetching: false,
  error: null,
}

const account = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_SHELTER:
      return Object.assign(state, {
        isFetching: false,
      });
    case CREATE_SHELTER_SUCCESS:
      return Object.assign(state, {
        isFetching: false,
      });
    case CREATE_SHELTER_FAILURE:
      return Object.assign(state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

  export default account
