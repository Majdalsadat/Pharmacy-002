import { Component,inject, OnInit } from '@angular/core';
import { web3 } from 'src/web3';





@Component({
  selector: 'app-pataint',
  templateUrl: './pataint.component.html',
  styleUrls: ['./pataint.component.css']
})
export class PataintComponent implements OnInit {

  dragPre: Array<any> = [
    { id: 1, dr_name: 'Ahmed', date:2013, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 2, dr_name: 'Ali', date: 2016, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    { id: 3, dr_name: 'Mohamed', date: 2018, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    { id: 4, dr_name: 'Abdulkareem', date: 2017, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
    { id: 5, dr_name: 'Fahad', date: 2019, companyName: 'Portica', country: 'United Kingdom', city: 'London' },];


  drug: [
    { id: 1, dr_name: 'Aurelia Vega', qun: 30, Name: 'Deepends', is_dis: false },
    { id: 2, dr_name: 'Guerra Cortez', qun: 45, Name: 'Insectus', is_dis: false },
    { id: 3, dr_name: 'Guadalupe House', qun: 26, Name: 'Isotronic', is_dis: false },
    { id: 4, dr_name: 'Aurelia Vega', qun: 30, Name: 'Deepends', is_dis: false },
    { id: 5, dr_name: 'Elisa Gallagher', qun: 31, Name: 'Portica', is_dis: false }]


  constructor() {

  }

  ngOnInit() {console.log('Majd');
   // this.getMRA.getMedicalRecordAddress(123456789);
  }




    isLoaded(){
  // this.getMRA.getPatientMedicalRecordData();
     return true;

}
   comper(drug,dragPre ){
   const ma=[];
   dragPre.forEach((dragPre.id))==
     drug.forEach((drug.id)) ; {if (dragPre.id===drug.id) {ma.push(drug)}}
    return(ma);
  }

}


