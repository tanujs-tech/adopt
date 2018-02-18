export const CREATE_PET_REQUEST = 'CREATE_PET_REQUEST';
export const CREATE_PET_REQUEST_SUCCESS = 'CREATE_PET_REQUEST_SUCCESS';
export const CREATE_PET_REQUEST_FAILURE = 'CREATE_PET_REQUEST_FAILURE';

export const CREATE_PET_ADOPTION_REQUEST = 'CREATE_PET_ADOPTION_REQUEST';
export const CREATE_PET_ADOPTION_REQUEST_SUCCESS = 'CREATE_PET_ADOPTION_REQUEST_SUCCESS';
export const CREATE_PET_ADOPTION_REQUEST_FAILURE = 'CREATE_PET_ADOPTION_REQUEST_FAILURE';

export const ADOPT_PET_REQUEST = 'ADOPT_PET_REQUEST';
export const ADOPT_PET_REQUEST_SUCCESS = 'ADOPT_PET_REQUEST_SUCCESS';
export const ADOPT_PET_REQUEST_FAILURE = 'ADOPT_PET_REQUEST_FAILURE';

export const CREATE_PET_AND_ADOPTION_REQUEST = 'CREATE_PET_AND_ADOPTION_REQUEST';
export const CREATE_PET_AND_ADOPTION_REQUEST_SUCCESS = 'CREATE_PET_AND_ADOPTION_REQUEST_SUCCESS';
export const CREATE_PET_AND_ADOPTION_REQUEST_FAILURE = 'CREATE_PET_AND_ADOPTION_REQUEST_FAILURE';

export const createPetRequest = (name, age, risk, breed, medical_condition, description, file, shelterId) => ({
  type: CREATE_PET_REQUEST,
  metadata: {
    name,
    age,
    risk,
    breed,
    medical_condition,
    description
  },
  profilePic: file,
  shelterId,
})

export const createPetRequestSuccess = () => ({
  type: CREATE_PET_REQUEST_SUCCESS
})

export const createPetRequestfailure = error => ({
  type: CREATE_PET_REQUEST_FAILURE,
  error
})

export const createPetAdoptionRequest = (shelterId, petId, amountRequired) =>({
  type: CREATE_PET_ADOPTION_REQUEST,
  shelterId,
  petId,
  amountRequired
})

export const createPetAdoptionRequestSuccess = () =>({
  type: CREATE_PET_ADOPTION_REQUEST_SUCCESS
})

export const createPetAdoptionRequestFailure = (error) =>({
  type: CREATE_PET_ADOPTION_REQUEST_FAILURE,
  error,
})

export const adoptPetRequest = (adoptionRequestId, value) =>({
  type: ADOPT_PET_REQUEST,
  adoptionRequestId,
  value
})

export const adoptPetRequestSuccess = () =>({
  type: ADOPT_PET_REQUEST_SUCCESS,
})

export const adoptPetRequestFailure = error =>({
  type: ADOPT_PET_REQUEST_FAILURE,
  error,
})

export const createPetAndAdoptionRequest = (name, age, risk, breed, medical_condition, description, file, shelterId, amountRequired) =>({
  type: CREATE_PET_AND_ADOPTION_REQUEST,
  metadata: {
    name,
    age,
    risk,
    breed,
    medical_condition,
    description
  },
  profilePic: file,
  shelterId,
  amountRequired
})

export const createPetAndAdoptionRequestSuccess = () =>({
  type: CREATE_PET_AND_ADOPTION_REQUEST_SUCCESS,
})

export const createPetAndAdoptionRequestFailure = error =>({
  type: CREATE_PET_AND_ADOPTION_REQUEST_FAILURE,
  error,
})
