import { Component,Inject, OnInit } from '@angular/core';
import { web3 } from 'src/web3';
import {Router} from  '@angular/router';
import { AlertsService } from 'angular-alert-module';
import {GetMRAService} from '../get-mra.service';


@Component({
  selector: 'app-moh',
  templateUrl: './moh.component.html',
  styleUrls: ['./moh.component.css']
})
export class MOHComponent implements OnInit {

  res=123456789;

  constructor( private alert: AlertsService,
               private router: Router,
               private getMRA: GetMRAService) { }


  public form = {
    Id: null,
  };


  ngOnInit() {
  }

  naClic(){
    console.log('majd')}

  getUser() {
    console.log(this.form.Id);

    const ABI = [
      {
        'constant': false,
        'inputs': [
          {
            'name': 'hospitalAddressI',
            'type': 'address'
          },
          {
            'name': 'hospitalName',
            'type': 'string'
          }
        ],
        'name': 'addHospital',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      },
      {
        'constant': false,
        'inputs': [
          {
            'name': 'pharmacyAddressI',
            'type': 'address'
          },
          {
            'name': 'pharmacyName',
            'type': 'string'
          }
        ],
        'name': 'addPharmacy',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      },
      {
        'constant': false,
        'inputs': [
          {
            'name': 'nationalID',
            'type': 'uint256'
          },
          {
            'name': 'name',
            'type': 'string'
          },
          {
            'name': 'dateI',
            'type': 'uint256'
          },
          {
            'name': 'phoneNumberI',
            'type': 'string'
          },
          {
            'name': 'genderI',
            'type': 'string'
          },
          {
            'name': 'bloodTypeI',
            'type': 'string'
          },
          {
            'name': 'emergencyContactI',
            'type': 'string'
          }
        ],
        'name': 'createMedicalRecord',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
      },
      {
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': 'nationalIDI',
            'type': 'uint256'
          }
        ],
        'name': 'checkMedicalRecord',
        'outputs': [
          {
            'name': '',
            'type': 'bool'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'getHospitalsCount',
        'outputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': 'nationalIDI',
            'type': 'uint256'
          }
        ],
        'name': 'getMedicalRecord',
        'outputs': [
          {
            'name': '',
            'type': 'address'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'getPharmaciesCount',
        'outputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': '',
            'type': 'address'
          }
        ],
        'name': 'hospitalAddresses',
        'outputs': [
          {
            'name': '',
            'type': 'bool'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'name': 'hospitals',
        'outputs': [
          {
            'name': 'name',
            'type': 'string'
          },
          {
            'name': 'networkAddress',
            'type': 'address'
          },
          {
            'name': 'date',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'name': 'medicalRecords',
        'outputs': [
          {
            'name': '',
            'type': 'address'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'medicalRecordsCount',
        'outputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [],
        'name': 'ministryOfHealth',
        'outputs': [
          {
            'name': '',
            'type': 'address'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': '',
            'type': 'uint256'
          }
        ],
        'name': 'pharmacies',
        'outputs': [
          {
            'name': 'name',
            'type': 'string'
          },
          {
            'name': 'networkAddress',
            'type': 'address'
          },
          {
            'name': 'date',
            'type': 'uint256'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      },
      {
        'constant': true,
        'inputs': [
          {
            'name': '',
            'type': 'address'
          }
        ],
        'name': 'pharmacyAddresses',
        'outputs': [
          {
            'name': '',
            'type': 'bool'
          }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
      }
    ];

    // Medical Record System Contract Address
    const address = '0xb14889d951b0033705f3c9ce8b52a469096b2da6';


    const mycontract = new web3.eth.Contract(ABI, address , {
      from: address ,
      gasPrice: '100000000'
    });


    // Hospital Address
    if (this.form.Id != null) {
      mycontract.methods.checkMedicalRecord(this.form.Id).call({from: '0xBF8091555d8ced0C0da7bb6d4913dB22d68e0341'} , (error , result) => {
        if (!error) {
          console.log(error);
          console.log(result);
          if (result === true) {
            // this.getMRA.getMedicalRecordAddress(this.form.Id);
            this.router.navigateByUrl('/pharmcy');
          } else {
            this.alert.setMessage('The national ID you have entered is invalid.' , 'error' );
          }
        }
      });
    } else {
      this.alert.setMessage('Enter your national ID.' , 'error' );


    }
  }

  majd(reee){
    if (reee==this.res){
      this.router.navigateByUrl('/pharmacy');
    }else {reee.alert.setMessage('the address is rong ');}
  }
}

