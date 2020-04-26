import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SavingMoneyCalcComponent } from './saving-money-calc/saving-money-calc.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { GoogleChartsModule } from 'angular-google-charts';
import 'rxjs';
import { FormsModule } from '@angular/forms';
import { SavingMoneyCalcService } from './saving-money-calc.service';


@NgModule({
  declarations: [
    AppComponent,
    SavingMoneyCalcComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [SavingMoneyCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
