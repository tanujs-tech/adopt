import {
  CREATE_PET_REQUEST,
  CREATE_PET_REQUEST_SUCCESS,
  CREATE_PET_REQUEST_FAILURE,
  CREATE_PET_ADOPTION_REQUEST,
  CREATE_PET_ADOPTION_REQUEST_SUCCESS,
  CREATE_PET_ADOPTION_REQUEST_FAILURE,
  ADOPT_PET_REQUEST,
  ADOPT_PET_REQUEST_SUCCESS,
  ADOPT_PET_REQUEST_FAILURE
} from '../actions/pet';

const initialState = {
  isFetching: false,
  error: null,
}

const pet = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PET_REQUEST:
      return Object.assign(state, {
        isFetching: true,
      });
    case CREATE_PET_REQUEST_SUCCESS:
      return Object.assign(state, {
        isFetching: false,
      });
    case CREATE_PET_REQUEST_FAILURE:
      return Object.assign(state, {
        isFetching: false,
        error: action.error
      })

    case CREATE_PET_ADOPTION_REQUEST:
      return Object.assign(state, {
        isFetching: true,
      });
    case CREATE_PET_ADOPTION_REQUEST_SUCCESS:
      return Object.assign(state, {
        isFetching: false,
      });
    case CREATE_PET_ADOPTION_REQUEST_FAILURE:
      return Object.assign(state, {
        isFetching: false,
        error: action.error
      })

    case ADOPT_PET_REQUEST:
      return Object.assign(state, {
        isFetching: true,
      });
    case ADOPT_PET_REQUEST_SUCCESS:
      return Object.assign(state, {
        isFetching: false,
      });
    case ADOPT_PET_REQUEST_FAILURE:
      return Object.assign(state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

  export default pet
