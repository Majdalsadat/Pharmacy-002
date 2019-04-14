import { Component,inject, OnInit } from '@angular/core';
import { web3 } from 'src/web3';
import {GetMRAService} from '../get-mra.service';





@Component({
  selector: 'app-pataint',
  templateUrl: './pataint.component.html',
  styleUrls: ['./pataint.component.css']
})
export class PataintComponent implements OnInit {

    public dru;

   d: [
        { id: 1, dr_name: 'Aurelia Vega', qun: 30, Name: 'Panadol', is_dis: false },
        { id: 2, dr_name: 'Guerra Cortez', qun: 45, Name: 'Voltarin', is_dis: false },
        { id: 3, dr_name: 'Guadalupe House', qun: 26, Name: 'Asperen', is_dis: false },
        { id: 4, dr_name: 'Aurelia Vega', qun: 30, Name: 'Avosion', is_dis: false },
        { id: 5, dr_name: 'Elisa Gallagher', qun: 31, Name: 'Portica', is_dis: false }];

  r: Array<any> = [
    { id: 1, dr_name: 'Ahmed', date:2013, companyName: 'Deepends', country: this.d, city: 'Madrid' },
    { id: 2, dr_name: 'Ali', date: 2016, companyName: 'Insectus', country: this.d, city: 'San Francisco' },
    { id: 3, dr_name: 'Mohamed', date: 2018, companyName: 'Isotronic', country: this.d, city: 'Frankfurt am Main' },
    { id: 4, dr_name: 'Abdulkareem', date: 2017, companyName: 'Deepends', country: this.d, city: 'Madrid' },
    { id: 5, dr_name: 'Fahad', date: 2019, companyName: 'Portica', country: this.d, city: 'London' },];



  constructor(private getMRA: GetMRAService) {

  }

  ngOnInit() {console.log('Majd');
   this.getMRA.getMedicalRecordAddress(this.getMRA.nID);

  }

    flagDrugList:boolean = false;
    flagDrugPrescribtion:boolean = false;


    //displayDrugPrescribtion(){
      //  this.getMRA.getDrugPrescribtion()
       // this.flagDrugPrescribtion = true;
        //this.flagDiagnosis = false;
        //this.flagBloodDonation =false;
        //this.flagSurgery = false;
        //this.flagRadiology = false;
        //this.flagLabTest = false;
        //this.flagDrugList = false;
        //this.flagCorrection = false;
    //}



    //displayDrugList(i){
        //this.drug = JSON.parse(this.getMRA.P_drugPrescribtions[i]['drugList']);
        //this.drug = JSON.parse('{"drugName":"panadol","quantity":1,"doctorComment":"5 time per days","isDispensed":"true"}');
        //this.flagDrugList = !this.flagDrugList;


   // }



  flagm(){
      return true;
  }

}


