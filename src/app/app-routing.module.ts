import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MOHComponent} from './moh/moh.component';
import {PharmacyComponent} from './pharmacy/pharmacy.component';
import {PataintComponent} from './pataint/pataint.component';

const routes: Routes = [
    {path:'' , redirectTo:'/Moh' , pathMatch:'full'},
    {path: 'Moh' , component: MOHComponent},
    {path: 'pharmacy' , component: PharmacyComponent},
    {path: 'patint' , component: PataintComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
