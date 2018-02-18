export const GET_ADOPTION_REQUEST = 'GET_ADOPTION_REQUEST'
export const GET_ADOPTION_REQUEST_SUCCESS = 'GET_ADOPTION_REQUEST_SUCCESS'
export const GET_ADOPTION_REQUEST_FAILURE = 'GET_ADOPTION_REQUEST_FAILURE'

export const getAdoptionRequest = () => ({
  type: GET_ADOPTION_REQUEST
});

export const getAdoptionRequestSuccess = (adoptionRequest) => ({
  type: GET_ADOPTION_REQUEST_SUCCESS,
  adoptionRequest
});

export const getAdoptionRequestFailure = (error) => ({
  type: GET_ADOPTION_REQUEST_FAILURE,
  error,
});
