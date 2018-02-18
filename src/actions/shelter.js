export const CREATE_SHELTER = 'CREATE_SHELTER'
export const CREATE_SHELTER_SUCCESS = 'CREATE_SHELTER_SUCCESS'
export const CREATE_SHELTER_FAILURE = 'CREATE_SHELTER_FAILURE'

export const createShelter = (name, physicalAddress, registrationId, metadata, shelterOwner) => ({
  type: CREATE_SHELTER,
  name,
  physicalAddress,
  registrationId,
  metadata,
  shelterOwner
});

export const createShelterSuccess = () => ({
  type: CREATE_SHELTER_SUCCESS,
});

export const createShelterFailure = (error) => ({
  type: CREATE_SHELTER_FAILURE,
  error,
});
