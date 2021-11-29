import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtStrapComponent } from './boots.component';
import { FormsComponent } from './forms/forms.component';
import { NgModelComponent } from './forms/NgModel.component';
import { FormValidComponent } from './forms/FormValid.component';
import { FrValidComponent } from './forms/FormValid1.component';
import { SpecificComponent } from './forms/Specific.component';
import { PValidComponent } from './forms/PValidation.component';
import { NgModelGrpComponent } from './forms/NgFormGrp.component';
import { PNgModelGrpComponent } from './forms/PNgFormGrp.component';


@NgModule({
  declarations: [
    AppComponent,
    BtStrapComponent,
    FormsComponent,
    NgModelComponent,
    FormValidComponent,
    FrValidComponent,
    SpecificComponent,
    PValidComponent,
    NgModelGrpComponent,
    PNgModelGrpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
