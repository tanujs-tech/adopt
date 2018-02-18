export const adoptMeSmartContractAddress = '0x672b6563c25638ea8614e41bfe10b07c85baaa214d30399af1a74ebbc4518573';
export const adoptMeSmartContractAbi = `
[
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "shelterId",
        "type": "uint256"
      },
      {
        "name": "petMetadataIPFS",
        "type": "bytes32"
      },
      {
        "name": "imageIPFSHash",
        "type": "bytes32"
      }
    ],
    "name": "addPet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "name",
        "type": "bytes32"
      },
      {
        "name": "physicalAddress",
        "type": "bytes32"
      },
      {
        "name": "registrationId",
        "type": "bytes32"
      },
      {
        "name": "metadataIPFSHash",
        "type": "bytes32"
      },
      {
        "name": "shelterOwner",
        "type": "address"
      }
    ],
    "name": "addShelter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "shelterId",
        "type": "uint256"
      },
      {
        "name": "petId",
        "type": "uint256"
      },
      {
        "name": "amountRequired",
        "type": "uint256"
      }
    ],
    "name": "addAdoptionRequestForPet",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "shelterId",
        "type": "uint256"
      },
      {
        "name": "petMetadataIPFS",
        "type": "bytes32"
      },
      {
        "name": "imageIPFSHash",
        "type": "bytes32"
      },
      {
        "name": "amountRequired",
        "type": "uint256"
      }
    ],
    "name": "createAdoptionRequest",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "adoptionRequestId",
        "type": "uint256"
      }
    ],
    "name": "adoptPet",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPendingAdoptionRequest",
    "outputs": [
      {
        "name": "pendingRequests",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getCompletedAdoptionRequest",
    "outputs": [
      {
        "name": "completedRequests",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getNonCompletedAdoptionRequest",
    "outputs": [
      {
        "name": "nonCompletedRequests",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "petId",
        "type": "uint256"
      }
    ],
    "name": "getAllAdoptionRequestForPet",
    "outputs": [
      {
        "name": "adoptionRequestsForPet",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAllAdoptionsForAdopter",
    "outputs": [
      {
        "name": "adoptedPets",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getShelterId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "shelterId",
        "type": "uint256"
      }
    ],
    "name": "getAllAnimalsForShelter",
    "outputs": [
      {
        "name": "allAdoptionRequest",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "shelterId",
        "type": "uint256"
      }
    ],
    "name": "getAllAdoptionsForShelter",
    "outputs": [
      {
        "name": "allAdoptionRequest",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "shelterId",
        "type": "uint256"
      }
    ],
    "name": "getPendingAdoptionsForShelter",
    "outputs": [
      {
        "name": "pendingAdoptionRequest",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "shelterId",
        "type": "uint256"
      }
    ],
    "name": "getCompletedAdoptionsForShelter",
    "outputs": [
      {
        "name": "completeAdoptionRequest",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
`
