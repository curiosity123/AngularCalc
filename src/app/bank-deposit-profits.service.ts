import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankDepositProfitsService {


  CurrentMoney = 100000;
  Inflation = 4.5;


  DepositList: { money: number, interest: number }[] =
    [
      { money: 1000, interest: 5.2 }
    ];

  TempMoney = 0;
  TempInterest = 0;

  MonthlyLoss = 0;
  MonthlyEarn = 0;
  SummaryLoss = 0;


  constructor() {
  
   }


  calculate(event) {
    this.MonthlyLoss = Number(((this.CurrentMoney * ((this.Inflation / 100) * 0.81)) / 12).toFixed(1));
    this.MonthlyEarn = 0;

    for (let i = 0; i < this.DepositList.length; i++) {
      this.MonthlyEarn = this.MonthlyEarn + (this.DepositList[i].money * ((this.DepositList[i].interest / 100) * 0.81)) / 12;
    }
    this.MonthlyEarn = Number(this.MonthlyEarn.toFixed(1));

    this.SummaryLoss = this.MonthlyLoss - this.MonthlyEarn;
  }

  AddNew(event) {
    this.DepositList.push({ money: this.TempMoney, interest: this.TempInterest });
    this.TempMoney = 0;
    this.TempInterest = 0;
    this.calculate(null);
  }

  Remove(event) {
    console.log(event);
    this.DepositList.splice(event, 1);
    this.TempMoney = 0;
    this.TempInterest = 0;
    this.calculate(null);
  }

}
