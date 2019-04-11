import { Injectable } from '@angular/core';
import { web3 } from 'src/web3';

@Injectable({
    providedIn: 'root'
})
export class GetMRAService {

    private P_Address;
    private P_name;
    private P_nationalID;
    private P_phone_number;
    private P_birth_date;
    constructor() { }

    getMedicalRecordAddress(id: number) {
        const ABI = [
            {
                "constant": true,
                "inputs": [],
                "name": "getHospitalsCount",
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
                        "name": "nationalIDI",
                        "type": "uint256"
                    }
                ],
                "name": "getMedicalRecord",
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
                        "name": "nationalID",
                        "type": "uint256"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "dateI",
                        "type": "uint256"
                    },
                    {
                        "name": "phoneNumberI",
                        "type": "string"
                    },
                    {
                        "name": "genderI",
                        "type": "string"
                    },
                    {
                        "name": "bloodTypeI",
                        "type": "string"
                    },
                    {
                        "name": "emergencyContactI",
                        "type": "string"
                    }
                ],
                "name": "createMedicalRecord",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "pharmacyAddresses",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
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
                        "name": "pharmacyAddressI",
                        "type": "address"
                    },
                    {
                        "name": "pharmacyName",
                        "type": "string"
                    }
                ],
                "name": "addPharmacy",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "name": "hospitalAddressI",
                        "type": "address"
                    },
                    {
                        "name": "hospitalName",
                        "type": "string"
                    }
                ],
                "name": "addHospital",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [
                    {
                        "name": "nationalIDI",
                        "type": "uint256"
                    }
                ],
                "name": "checkMedicalRecord",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
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
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "medicalRecords",
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
                "constant": true,
                "inputs": [
                    {
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "hospitals",
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "networkAddress",
                        "type": "address"
                    },
                    {
                        "name": "date",
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
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "pharmacies",
                "outputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "networkAddress",
                        "type": "address"
                    },
                    {
                        "name": "date",
                        "type": "uint256"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "ministryOfHealth",
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
                "constant": true,
                "inputs": [],
                "name": "getPharmaciesCount",
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
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "hospitalAddresses",
                "outputs": [
                    {
                        "name": "",
                        "type": "bool"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "medicalRecordsCount",
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
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            }
        ];
        // const address = data;

        // const mycontract = new web3.eth.Contract(ABI_PatientMR, address , {
        //  from: address ,
        //  gasPrice: '100000000'
        // });

    }}

