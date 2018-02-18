import {
  GET_ADOPTION_REQUEST,
  GET_ADOPTION_REQUEST_SUCCESS,
  GET_ADOPTION_REQUEST_FAILURE
} from '../actions/adoptionRequest';

const initialState = {
  isFetching: false,
  allRequests: [],
  error: null,
}

const adoptionRequest = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADOPTION_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case GET_ADOPTION_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        pendingRequests: action.adoptionRequest
      });
    case GET_ADOPTION_REQUEST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    default:
      return state
  }
}

  export default adoptionRequest
