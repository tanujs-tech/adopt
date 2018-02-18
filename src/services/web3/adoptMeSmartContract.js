import web3 from './adoptMeSmartContractData';
import { getFileFromIPFS } from "../ipfs";

if(window.web3) {
  const AdoptMe = window.web3.eth.contract(web3.contractAbi);
  window.adoptMeContractInstance = AdoptMe.at(web3.contractAddress);
}

export const addShelter = (name, physicalAddress, registrationId, metadataIPFSHash, shelterOwner) => (
  new Promise((resolve, reject) => (
    window.adoptMeContractInstance.addShelter(
      name,
      physicalAddress,
      registrationId,
      metadataIPFSHash,
      shelterOwner,
      (error, result) => (
        error ? reject(error) : resolve(result)
      )
    )
  ))
)

export const addPet = (shelterId, petMetadataIPFS, imageIPFSHash) => (
  new Promise((resolve, reject) => (
    window.adoptMeContractInstance.addPet.sendTransaction(
      shelterId,
      petMetadataIPFS,
      imageIPFSHash,
      (error, result) => error ? reject(error) : resolve(result)
    )
  ))
)

export const addAdoptionRequestForPet = (shelterId, petId, amountRequired) => (
  new Promise((resolve, reject) => (
    window.adoptMeContractInstance.addAdoptionRequestForPet.sendTransaction(
      shelterId,
      petId,
      amountRequired,
      (error, result) => error ? reject(error) : resolve(result)
    )
  ))
)

export const createAdoptionRequest = (shelterId, petMetadataIPFS, imageIPFSHash, amountRequired) => (
  new Promise((resolve, reject) => (
    window.adoptMeContractInstance.createAdoptionRequest.sendTransaction(
      shelterId,
      petMetadataIPFS,
      imageIPFSHash,
      amountRequired,
      (error, result) => error ? reject(error) : resolve(result)
    )
  ))
)

export const adoptPet = (adoptionRequestId, value) => (
  new Promise((resolve, reject) => (
    window.adoptMeContractInstance.createAdoptionRequest.sendTransaction(
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

function petParser(request) {
  return {
    id: request[0],
    shelterId: request[1],
    metadataIPFSHash: hexToString(request[2]),
    imageIPFSHash: hexToString(request[3]),
  }
}

const getPet = id => new Promise((resolve, reject) => {
  window.adoptMeContractInstance.pets.call(id, async (error, petUnparsed) => {
    if (!error) {
      const pet = petParser(petUnparsed);

      const metadata = await getFileFromIPFS(pet.metadataIPFSHash)
      const image = await getFileFromIPFS(pet.imageIPFSHash)

      pet.metadata = metadata;
      pet.pic = image;

      resolve(pet)
    } else {
      console.log('Error in Pet Retrievel: ', error);
      reject(error)
    }
  })
})

const getAdoptionRequest = id => new Promise((resolve, reject) => {
  window.adoptMeContractInstance.adoptionRequests.call(id, async (error, adoptionRequestUnparsed) => {
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
    window.adoptMeContractInstance.getPendingAdoptionRequest.call(async (error, adoptionRequestIds) => {
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
    window.adoptMeContractInstance.getAllAdoptionsForAdopter.call(async (error, adoptionRequestIds) => {
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
    window.adoptMeContractInstance.getShelterId.call(walletAddress, async (error, shelterId) => (
      error ? reject(error) : resolve(shelterId)
    ))
  ))
)

