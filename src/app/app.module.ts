import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MOHComponent } from './moh/moh.component';
import { PharmacyComponent } from './pharmacy/pharmacy.component';
import { PataintComponent } from './pataint/pataint.component';
import {FormsModule} from '@angular/forms';
import {AlertsModule} from 'angular-alert-module';



@NgModule({
  declarations: [
    AppComponent,
    MOHComponent,
    PharmacyComponent,
    PataintComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
