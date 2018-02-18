const web3 = {
  contractAddress: '0x345ca3e014aaf5dca488057592ee47305d9b3e10',
  contractAbi: [
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
          "name": "",
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
          "name": "",
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
          "name": "",
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
          "name": "",
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
          "name": "",
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
          "name": "",
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
          "name": "",
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
          "name": "",
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
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
};

export default web3;
