import { adoptMeSmartContractAbi, adoptMeSmartContractAddress } from './adoptMeSmartContractData'

const AdoptMe = window.web3js.eth.contract(JSON.parse(adoptMeSmartContractAbi));
const contractInstance = AdoptMe.at(adoptMeSmartContractAddress);

export const addShelter = (name, physicalAddress, registrationId, metadataIPFSHash, shelterOwner) => (
  new Promise((resolve, reject) => (
    contractInstance.addShelter.sendTransaction(
      name,
      physicalAddress,
      registrationId,
      metadataIPFSHash,
      shelterOwner,
      (error, result) => error ? reject(error) : resolve(result)
    )
  ))
)

export const addPet = (shelterId, petMetadataIPFS, imageIPFSHash) => (
  new Promise((resolve, reject) => (
    contractInstance.addPet.sendTransaction(
      shelterId,
      petMetadataIPFS,
      imageIPFSHash,
      (error, result) => error ? reject(error) : resolve(result)
    )
  ))
)

export const addAdoptionRequestForPet = (shelterId, petId, amountRequired) => (
  new Promise((resolve, reject) => (
    contractInstance.addAdoptionRequestForPet.sendTransaction(
      shelterId,
      petId,
      amountRequired,
      (error, result) => error ? reject(error) : resolve(result)
    )
  ))
)

export const createAdoptionRequest = (shelterId, petMetadataIPFS, imageIPFSHash, amountRequired) => (
  new Promise((resolve, reject) => (
    contractInstance.createAdoptionRequest.sendTransaction(
      shelterId,
      petMetadataIPFS,
      imageIPFSHash,
      amountRequired,
      (error, result) => error ? reject(error) : resolve(result)
    )
  ))
)

export const adoptPet = adoptionRequestId => (
  new Promise((resolve, reject) => (
    contractInstance.createAdoptionRequest.sendTransaction(
      adoptionRequestId,
      (error, result) => error ? reject(error) : resolve(result)
    )
  ))
)

const hexToString = (hex) => {
  var string = '';
  for (var i = 0; i < hex.length; i += 2) {
    string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  }
  return string.replace(/\0/g, '');
}

function adoptionRequestParser(request) {
  return {
    id: request[0],
    petId: request[1],
    amountRequired: hexToString(request[2]),
    adoptionStatus: hexToString(request[3]),
    adopter: hexToString(request[4]),
    requestDate: hexToString(request[5]),
    adoptionDate: request[6]
  }
}

const getPet = id => new Promise((resolve, reject) => {
  contractInstance.pets.call(id, (error, pet) => {
    error ? reject(error) : resolve(pet)
  })
})

const getAdoptionRequest = id => new Promise((resolve, reject) => {
  contractInstance.adoptionRequests.call(id, async (error, adoptionRequestUnparsed) => {
    if (!error) {
      try {
        const adoptionRequest = adoptionRequestParser(adoptionRequestUnparsed)
        const pet = await getPet(adoptionRequest.petId)
        adoptionRequest.pet = pet;
        resolve(adoptionRequest);
      } catch (error) {
        console.log('Got Error in getting Pet: ', error);
        reject(error);
      }
    } else {
      reject(error);
    }
  })
})

const getAdoptionRequests = async (ids) => new Promise((resolve, reject) => {
  let promises = [];
  let adoptionRequests = [];

  (ids || []).forEach(id => (
    promises.push(
      getAdoptionRequest(id)
      .then(result => adoptionRequests.push(result))
      .catch(error => console.log('Got Error in fetching adoption request'))
    )
  ));

  Promise.all(promises).then(result => resolve(adoptionRequests));
})

export const getPendingAdoptionRequest = async () => (
  new Promise((resolve, reject) => (
    contractInstance.getPendingAdoptionRequest.call(async (error, adoptionRequestIds) => {
      if (!error) {
        const adoptionRequests = await getAdoptionRequests(adoptionRequestIds)
        resolve(adoptionRequests)
      } else {
        reject(error)
      }
    })
  ))
)

export const getUserAdoption = async () => (
  new Promise((resolve, reject) => (
    contractInstance.getAllAdoptionsForAdopter.call(async (error, adoptionRequestIds) => {
      if (!error) {
        const adoptionRequests = await getAdoptionRequests(adoptionRequestIds)
        resolve(adoptionRequests)
      } else {
        reject(error)
      }
    })
  ))
)

export const getShelterId = async walletAddress => (
  new Promise((resolve, reject) => (
    contractInstance.getShelterId.call(walletAddress, async (error, shelterId) => (
      error ? reject(error) : resolve(shelterId)
    ))
  ))
)
