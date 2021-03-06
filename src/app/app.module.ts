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
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';

import { BankDepositProfitsComponent } from './bank-deposit-profits/bank-deposit-profits.component';

@NgModule({
  declarations: [
    AppComponent,
    SavingMoneyCalcComponent,
    BankDepositProfitsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    GoogleChartsModule,
    FormsModule
  ],
  providers: [SavingMoneyCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
